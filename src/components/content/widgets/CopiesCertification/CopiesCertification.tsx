import React from "react";
import { getPriceList } from "@api/widget-sidious";

import {
  BaseInput,
  BaseSelect,
  BaseButton,
  BaseRadioButton,
} from "@base/index";

import { formatsOptionsData } from "@utils/widget-helpers";
import { ValidItem, RequestInfoItem } from "@content/index";
import { useDispatch } from "react-redux";
import { actions as actionsModal } from "store/modals/reducer";
import { actions as actionsWidgetDox } from "store/widgetDox/reducer";

import defaultValues from "@services/widget-copycerf.json";

import styles from "./CopiesCertification.module.scss";

const CopiesCertification: React.FC<Props> = () => {
  const dispatch = useDispatch();

  // View price and disbled
  const [disabledRequest, setDisabledRequest] = React.useState(true);
  const [viewPrice, setViewPrice] = React.useState(false);

  const [widgetData, setWidgetData] = React.useState<PriceListData>([]);
  const [options, setOptions] = React.useState<FormatOptions>([
    { title: "No data", value: "" },
  ]);

  // Selected value
  const [selectedValue, setSelectedValue] = React.useState<SelecetedValue>();
  const [max, setMax] = React.useState<number | undefined>(1);
  const [delivery, setDelivery] = React.useState<number | undefined>(1);
  const [price, setPrice] = React.useState(0);
  const [documentPrice, setDocumentPrice] = React.useState<number>(0);
  const [quantity, setQuantity] = React.useState<number>(1);

  // Service options
  const [radioValue, setRadioValue] = React.useState<string>(
    defaultValues[0].id
  );
  const [serviceOptions, setServiceOptions] =
    React.useState<ServiceOption[]>(defaultValues);

  const changeHandlerDocuments = (value: string) => {
    const selectedData = widgetData.filter((el) => el!.name === value)[0];
    setSelectedValue(selectedData);
  };

  const changeHandlerQuantity = (value: number) => {
    if (!value) {
      setQuantity(1);
    }
    if (value > 0 && value <= max!) {
      setQuantity(value);
    }
  };

  const getDescription = (name: string) => {
    const dsrpt = selectedValue?.ItemList?.find(
      (item) => item?.name === name
    )?.description;

    if (dsrpt) {
      return [dsrpt];
    }
    return [""];
  };

  const requestData = async () => {
    const ItemList: any = [];
    selectedValue!.ItemList.forEach((service) => {
      if (service.id === radioValue) {
        ItemList.push({ id: service.id, quantity: "1" });
      }
      if (service.name === "Delivery") {
        ItemList.push({ id: service.id, quantity: "1" });
      }
      if (service.name === selectedValue?.name) {
        ItemList.push({ id: service.id, quantity });
      }
    });

    const OrderList = {
      pricelist_id: selectedValue?.id,
      type: selectedValue?.type,
      ItemList,
    };

    const Data = {
      services: selectedValue,
      price,
      totalPrice: price + delivery!,
      quantity,
    };

    dispatch(
      actionsWidgetDox.setCopyCert({
        OrderList,
        Data,
      })
    );

    dispatch(actionsModal.setPopup({ popup: "CertificationPopup", id: 3 }));
  };

  // update selected value
  React.useEffect(() => {
    if (selectedValue?.ItemList?.length) {
      let newServiceOptions: ServiceOption[] = [];
      let newDelivery;
      let maxValue;
      let newDocPrice = 0;

      selectedValue.ItemList.forEach((el: ServiceOption) => {
        if (el.name !== "Delivery" && el.name !== selectedValue.name) {
          newServiceOptions.push(el);
        }
        if (el.name === "Delivery") {
          newDelivery = +el.price;
        }
        if (el.name === selectedValue.name) {
          maxValue = +el.quantity_max;
          newDocPrice = +el.price;
        }
      });

      setServiceOptions(newServiceOptions);
      setDelivery(newDelivery);
      setMax(maxValue);
      setDocumentPrice(newDocPrice);
    }
  }, [selectedValue, quantity]);

  // Calc price
  React.useEffect(() => {
    let priceService = 0;

    serviceOptions.forEach((service) => {
      if (service.id === radioValue) {
        priceService = +service.price;
      }
    });

    let docPrice = documentPrice + priceService;
    const allPrice = docPrice * quantity;

    setPrice(allPrice);
  }, [quantity, radioValue, documentPrice]);

  // view price
  React.useEffect(() => {
    if (selectedValue?.id) {
      setViewPrice(true);
      setDisabledRequest(false);
    } else {
      setViewPrice(false);
    }
  }, [selectedValue]);

  // Async fetch data
  React.useEffect(() => {
    async function awaitData() {
      const res = await getPriceList({ listName: "copycert" });

      if (res) {
        const formatedOptions = formatsOptionsData(res);

        setWidgetData(res);
        setOptions(formatedOptions);
      } else {
        const formatedOptions = formatsOptionsData([]);
        setOptions(formatedOptions);
        setWidgetData([]);
      }
    }
    awaitData();

    return () => {
      setWidgetData([]);
      setOptions([{ title: "No data", value: "" }]);
    };
  }, []);

  return (
    <>
      <div className={styles.CopiesCertification}>
        <p className={styles.Description}>
          We can remotely verify any Document as a True Copy <br /> Here you may
          appoint remote meeting to verify the copy of any document - personal
          or corporate: just choose the type of the verification and required
          document. <br /> After payment you will receive the link to Notary
          remote appointment calendar.
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

              {/* Select doc */}

              <tr className={styles.tr_certcopy_doc}>
                <td className={styles.TdSelect}>
                  <ValidItem
                    done={selectedValue?.name ? true : false}
                    className={styles.ValidItem}
                  />
                </td>
                <td>
                  <BaseSelect
                    widget
                    placeholder="Select Document"
                    options={options}
                    onChange={changeHandlerDocuments}
                    className={styles.Select}
                  />
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
                  {viewPrice && (
                    <>
                      <span className={styles.PriceValue}>{`${price}.00`}</span>
                      &ensp;
                      <span className={styles.Currency}>EUR</span>
                    </>
                  )}
                </td>
                <td>
                  {selectedValue?.ItemList?.length && (
                    <RequestInfoItem
                      title={selectedValue?.name}
                      descriptionList={getDescription(selectedValue.name)}
                      className={styles.RequestInfoItem}
                    />
                  )}
                </td>
              </tr>

              {/* Delivery */}

              <tr className={styles.tr_certcopy_delivery}>
                <td className={styles.TdSelect}>
                  <ValidItem done={true} className={styles.ValidItem} />
                </td>
                <td colSpan={2}>
                  <p className={styles.SelectItemDescription}>
                    International Delivery
                  </p>
                </td>
                <td>
                  {viewPrice && (
                    <>
                      <span className={styles.PriceValue}>{delivery}.00</span>
                      &ensp;
                      <span className={styles.Currency}>EUR</span>
                    </>
                  )}
                </td>
                <td>
                  {selectedValue?.ItemList?.length && (
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
                  {viewPrice && (
                    <>
                      <span className={`${styles.PriceValue} ${styles.Bold}`}>
                        {`${price + delivery!}.00`}
                      </span>
                      &ensp;
                      <span className={`${styles.Currency} ${styles.Bold}`}>
                        EUR
                      </span>
                    </>
                  )}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
        <BaseButton
          disabled={disabledRequest}
          className={styles.Button}
          onClick={requestData}
        >
          Request
        </BaseButton>
      </div>
    </>
  );
};

export default CopiesCertification;
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

type FormatOptions = [{ value: string; title: string }];
