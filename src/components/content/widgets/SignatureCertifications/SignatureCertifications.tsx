import React from "react";

import { BaseInput, BaseRadioButton, BaseButton } from "@base/index";
import { ValidItem, RequestInfoItem } from "@content/index";
import { useDispatch } from "react-redux";

import { actions as actionsWidgetDox } from "store/widgetDox/reducer";
import { getPriceList } from "@api/widget-sidious";

import defaultValues from "@services/widget-signcert.json";

import styles from "./SignatureCertifications.module.scss";

import { actions as actionsModal } from "store/modals/reducer";

const SignatureCertifications: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [widgetData, setWidgetData] = React.useState<PriceListData>([]);

  //quantity

  const [quantity, setQuantity] = React.useState<number>(1);
  const [price, setPrice] = React.useState(0);
  const [delivery, setDelivery] = React.useState<number | undefined>(1);
  const [max, setMax] = React.useState<number | undefined>(1);

  // Service options
  const [serviceOptions, setServiceOptions] =
    React.useState<ServiceOption[]>(defaultValues);

  const [radioValue, setRadioValue] = React.useState<string>(
    defaultValues[0].id
  );

  const changeHandlerQuantity = (value: number) => {
    if (!value) {
      setQuantity(1);
    }
    if (value > 0 && value <= max!) {
      setQuantity(value);
    }
  };

  const getDescription = (name: string) => {
    const dsrpt = widgetData[0]?.ItemList?.find(
      (item) => item?.name === name
    )?.description;

    if (dsrpt) {
      return [dsrpt];
    }
    return [""];
  };

  const requestData = () => {
    const ItemList: any = [];
    widgetData[0].ItemList.forEach((service) => {
      if (service.id === radioValue) {
        ItemList.push({ id: service.id, quantity });
      }
      if (service.name === "Delivery") {
        ItemList.push({ id: service.id, quantity: "1" });
      }
    });

    const OrderList = {
      pricelist_id: widgetData[0]?.id,
      type: widgetData[0]?.type,
      ItemList,
    };

    const Data = {
      services: widgetData[0],
      price,
      totalPrice: price + delivery!,
      quantity,
    };

    dispatch(
      actionsWidgetDox.setSignCert({
        OrderList,
        Data,
      })
    );

    dispatch(
      actionsModal.setPopup({
        popup: "CertificationPopup",
        id: 4,
      })
    );
  };

  // Calc price
  React.useEffect(() => {
    let priceService = 0;

    serviceOptions.forEach((service) => {
      if (service.id === radioValue) {
        priceService = +service.price;
      }
    });

    const allPrice = priceService * quantity;

    setPrice(allPrice);
  }, [quantity, radioValue]);

  // Async fetch data
  React.useEffect(() => {
    async function awaitData() {
      const res = await getPriceList({ listName: "signcert" });
      if (res) {
        setWidgetData(res);
      } else {
        setWidgetData([]);
      }
    }
    awaitData();

    return () => {
      setWidgetData([]);
    };
  }, []);

  // Update service options
  React.useEffect(() => {
    if (widgetData?.length) {
      let newServiceOptions: ServiceOption[] = [];
      let newDelivery;
      let maxValue;

      widgetData[0].ItemList.forEach((el: ServiceOption) => {
        if (el.name !== "Delivery") {
          newServiceOptions.push(el);
          maxValue = +el.quantity_max;
        }
        if (el.name === "Delivery") {
          newDelivery = +el.price;
        }
      });

      setServiceOptions(newServiceOptions);
      setDelivery(newDelivery);
      setMax(maxValue);
    }
  }, [widgetData]);

  return (
    <>
      <div className={styles.SignatureCertifications}>
        <p className={styles.Description}>
          We can remotely verify Your Signature on any Original Document <br />
          Here you may appoint remote meeting for signature verification on any
          document: just choose the type of verification and proceed to
          appointments calendar
        </p>
        <p className={styles.CovidDescription}>
          Due to COVID -19 situation we can remotely verify personal and
          corporate documents.
        </p>

        <div className={styles.Table}>
          <table>
            <thead>
              <tr className={styles.TheadTr}>
                <th className={styles.Clear}></th>
                <th className={styles.Name}>Name</th>
                <th className={styles.Qty}>Qty</th>
                <th className={styles.Price}>Price</th>
                <th className={styles.Info}>Info</th>
              </tr>
            </thead>

            <tbody>
              {/* Services options */}

              {serviceOptions.length &&
                serviceOptions.map((row) => {
                  return (
                    <tr
                      key={row.id}
                      className={styles.tr_verification_apostil_N}
                    >
                      <td className={styles.TdSelect}>
                        <BaseRadioButton
                          id={row.id}
                          isActive={radioValue === row.id}
                          onClick={() => setRadioValue(row.id)}
                        ></BaseRadioButton>
                      </td>
                      <td colSpan={3} className={styles.CertcopyDocname}>
                        <p className={styles.SelectItemDescription}>
                          {row.name}
                        </p>
                      </td>
                      <td>
                        <RequestInfoItem
                          title={row?.name}
                          descriptionList={[row?.description]}
                          className={styles.RequestInfoItem}
                        />
                      </td>
                    </tr>
                  );
                })}

              {/* Couter */}

              <tr className={styles.tr_certcopy_doc}>
                <td className={styles.Select}></td>
                <td>
                  <p className={styles.SelectItemDescription}>
                    Number of Documents/Persons to sign:
                  </p>
                </td>
                <td>
                  <BaseInput
                    name="number"
                    min={1}
                    max={max}
                    type="number"
                    value={quantity}
                    onChange={changeHandlerQuantity}
                    className={styles.Input}
                  />
                </td>
                <td>
                  <span className={styles.PriceValue}>{`${price}.00`}</span>
                  &ensp;
                  <span className={styles.Currency}>EUR</span>
                </td>
                <td></td>
              </tr>

              {/* Delivery */}

              <tr className={styles.tr_certcopy_delivery}>
                <td className={styles.Select}>
                  <ValidItem done={true} className={styles.ValidItem} />
                </td>
                <td colSpan={2}>
                  <p className={styles.SelectItemDescription}>
                    International Delivery
                  </p>
                </td>
                <td>
                  <span className={styles.PriceValue}>{delivery}.00</span>&ensp;
                  <span className={styles.Currency}>EUR</span>
                </td>
                <td>
                  {widgetData[0]?.ItemList?.length && (
                    <RequestInfoItem
                      title={"Delivery"}
                      descriptionList={getDescription("Delivery")}
                      className={styles.RequestInfoItem}
                    />
                  )}
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr className={styles.tr_foot}>
                <th colSpan={3} className={styles.Total}>
                  <span>Total</span>
                </th>
                <th>
                  <span className={`${styles.PriceValue} ${styles.Bold}`}>
                    {`${price + delivery!}.00`}
                  </span>
                  &ensp;
                  <span className={`${styles.Currency} ${styles.Bold}`}>
                    EUR
                  </span>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
        <BaseButton className={styles.Button} onClick={requestData}>
          Request
        </BaseButton>
      </div>
    </>
  );
};

export default SignatureCertifications;

interface Props {}

type PriceListData = SelecetedValue[];

type SelecetedValue = {
  ItemList: ServiceOption[];
  description: string;
  description_ru?: string;
  id: string;
  name: string;
  name_ru?: string;
  type: string;
};

type ServiceOption = {
  description: string;
  description_ru?: string;
  id: string;
  name: string;
  name_ru?: string;
  price: string;
  price_available: string;
  price_request: string;
  price_unit: string;
  quantity_max: string;
  quantity_min: string;
  type: string;
};
