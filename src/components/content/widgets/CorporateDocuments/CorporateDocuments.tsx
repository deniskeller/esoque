import React from "react";
import Image from "next/image";
import {
  BaseInput,
  BaseSearchSelect,
  BaseButton,
  BaseSelect,
  BaseCheckbox,
} from "@base/index";

import {
  CompanyItem,
  ValidItem,
  CheckAvailable,
  RequestInfoItem,
} from "@content/index";
import { useDispatch } from "react-redux";

import { actions as actionsModal } from "store/modals/reducer";
import { actions as actionsWidgetDox } from "store/widgetDox/reducer";
import {
  companySearch,
  getJurisdictionList,
  getPriceList,
} from "@api/widget-sidious";

import styles from "./CorporateDocuments.module.scss";

const CorporateDocuments: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  // Price

  const [price, setPrice] = React.useState(0);

  // Buttons

  const [disabledSearch, setDisabledSearch] = React.useState<boolean>(true);
  const [disableRequest, setDisableRequest] = React.useState<boolean>(true);

  // Fetch select options (search company)

  const [juristdictionList, setJuristdictionList] =
    React.useState<juristdictionList>([{ title: "No data", value: "" }]);

  // Search comapany

  const [companyName, setCompanyName] = React.useState<string>("");
  const [juristdiction, setJuristdiction] = React.useState("");

  // Table data

  const [companyData, setCompanyData] = React.useState<CompanyData>();
  // Option from select (table)
  const [selectedData, setSelectedData] = React.useState<SelectedData[]>();
  // Service data
  const [servicesData, setServicesData] = React.useState<ServiceOption[]>();

  // Options select document (table)

  const [options, setOptions] = React.useState<FormatOptions>([
    { title: "No data", value: "" },
  ]);

  // Company names (many company)

  const [compNameRadio, setCompNameRadio] = React.useState<string>();

  // Selected option document (table)

  const [selectedValue, setSelectedValue] = React.useState<SelecetedValue>();

  // Type service

  const [offlineSerivce, setOfflineService] = React.useState<boolean>(false);

  // Checkbox services

  const [serviceSelected, setServiceSelected] = React.useState<string[]>([]);

  // Error get options (select table)

  const [error, setError] = React.useState(false);

  // Current document name

  const [document, setDocument] = React.useState<string>("");

  // Contains
  const [contains, setContains] = React.useState<Contains>({
    success: [],
    danger: [],
    info: [],
  });

  // Handlers

  // Docs
  const changeHandlerDocuments = (value: string) => {
    setDocument(value);
  };
  // Checkbox
  const setServiceCheckbox = (value: string) => {
    setServiceSelected((prev) => {
      const hasItem = prev.includes(value);
      if (hasItem) {
        return prev.filter((el) => el !== value);
      }
      return [...prev, value];
    });
  };

  // CN
  const changeHandlerCompanyName = (value: string) => {
    setCompanyName(value);
  };

  // JS
  const changeHandlerJuristdiction = (value: string) => {
    const code = juristdictionList.filter((el) => el?.title === value)[0]
      ?.value;

    if (code) {
      setOfflineService(false);
      setJuristdiction(code);
    }
  };

  // Description from service

  const getDescription = (name: string) => {
    const dsrpt = selectedValue?.ItemList?.find(
      (item) => item?.name === name
    )?.description;

    return dsrpt?.split("\n");
  };

  const filterAbbr = (value: string) => {
    const abbreviations = "GOSU";
    const result: Contains = {
      success: [],
      danger: [],
      info: [],
    };

    if (!value) {
      return result;
    }

    value.split("/").forEach((letter) => {
      if ("HE".includes(letter)) {
        result.info.push(letter);
        return;
      }
      if (abbreviations.includes(letter)) {
        result.success.push(letter);
      }
    });

    result.danger = abbreviations.split("").filter((letter) => {
      if (!value.split("/").includes(letter)) {
        return true;
      }
    });

    return result;
  };

  // Search company

  const submitFormData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    // Clear response data

    setCompNameRadio("");
    setError(false);
    setOfflineService(false);
    setCompanyData({});
    setServiceSelected([]);
    setSelectedValue({});
    setDocument("");
    setOptions([{ title: "No data", value: "" }]);
    setPrice(0);

    // Company data

    const companyRes = await companySearch({
      name: companyName.trim(),
      jurisdiction_ident: juristdiction,
    });

    // Document options and services

    const priceRes = await getPriceList({
      listName: "corpdoc",
      jurisdiction_ident: juristdiction,
    });

    setLoading(false);

    if (companyRes) {
      setCompanyData(companyRes);
    }

    // Check offline | error
    // [] - periceRes
    if (priceRes?.length === 0) {
      setOfflineService(true);
      setError(true);
      return;
    }

    if (priceRes) {
      setOfflineService(false);
      if (Object.values(priceRes).length) {
        const selectedDataArr: SelectedData[] = Object.values(priceRes);
        setSelectedData(selectedDataArr);
      }
    }
  };

  // Submit

  const requestData = (typeRequest: string) => {
    let currentCompany;
    let OrderList;
    const ItemList: any = [];

    // Company
    if (companyData?.ItemList && compNameRadio) {
      Object.entries(companyData?.ItemList).forEach((item) => {
        if (`${item[1]?.name}${item[1]?.number}` === compNameRadio) {
          currentCompany = item[1];
        }
      });
    } else {
      currentCompany = {
        jurisdiction_ident: juristdiction,
        name: companyName,
        number: "",
      };
    }

    // ItemList
    selectedValue?.ItemList?.forEach((service) => {
      if (!serviceSelected.includes(service?.name) || !service?.quantity_min) {
        ItemList.push({ id: service?.id, quantity: "1" });
      }
    });

    // OrderList
    OrderList = {
      pricelist_id: selectedValue?.id,
      type: selectedValue?.type,
      ItemList,
    };

    const Data = {
      juristdiction: juristdictionList.find(
        (item) => item?.value === juristdiction
      )?.title,
      companyName: currentCompany?.name,
      totalPrice: price,
      services: selectedValue,
    };

    if (typeRequest === "offline") {
      dispatch(
        actionsWidgetDox.setCorpDocOffline({
          Data,
        })
      );
      dispatch(actionsModal.setPopup({ popup: "NotAcceptingPopup", id: 1 }));
    } else {
      dispatch(
        actionsWidgetDox.setCorpDoc({
          Company: currentCompany,
          OrderList,
          Data,
        })
      );
      dispatch(
        actionsModal.setPopup({
          popup: "CorporateDocumentsPopup",
          id: 2,
        })
      );
    }
  };

  // Update document options data (table)

  React.useEffect(() => {
    if (selectedData?.length) {
      const newOptions: FormatOptions = [];

      selectedData.forEach((item) => {
        newOptions.push({ title: item.name!, value: item?.name! });
      });

      if (newOptions.length) {
        setOptions(newOptions);
      }
    }
  }, [selectedData]);

  // Update selected document (current doc)

  React.useEffect(() => {
    if (document) {
      const newSelectedValue: any = selectedData?.find(
        (el) => el?.name === document
      );

      setSelectedValue(newSelectedValue);
      setServicesData(newSelectedValue?.ItemList);
    }
  }, [document]);

  // Disabled search btn

  React.useEffect(() => {
    if (companyName.trim().length >= 3 && juristdiction) {
      setDisabledSearch(false);
    } else {
      setDisabledSearch(true);
    }
  }, [companyName, juristdiction]);

  // Calc price

  React.useEffect(() => {
    let totalPrice = 0;

    selectedValue?.ItemList?.forEach((service) => {
      if (
        service?.name === selectedValue?.name ||
        +service?.quantity_min ||
        !serviceSelected.includes(service?.name)
      ) {
        totalPrice += +service?.price;
      }
    });

    setPrice(totalPrice);
  }, [document, selectedValue, serviceSelected]);

  // Fetch jurisdiction list

  React.useEffect(() => {
    async function awaitData() {
      const res = await getJurisdictionList();
      setJuristdictionList(res);
    }

    awaitData();
    return () => {
      setJuristdictionList([{ title: "No data", value: "" }]);
    };
  }, []);

  // Update contains

  React.useEffect(() => {
    if (selectedValue?.document_contains) {
      let res = filterAbbr(selectedValue?.document_contains);
      if (res) {
        setContains(res);
      }
    }
  }, [selectedValue]);

  React.useEffect(() => {
    if (document) {
      setDisableRequest(false);
      return;
    }
    setDisableRequest(true);
  }, [document, compNameRadio, companyData]);

  return (
    <>
      <div className={styles.CorporateDocuments}>
        <p className={styles.Description}>
          Specify company, jurisdiction, choose and order documents. Hard copy
          or electronic. Fast service, clear pricing.
        </p>

        <div className={styles.ImageDesktop}>
          <Image
            src={`/images/landing/sidious/imgSidious2.png`}
            layout="fill"
            alt={""}
            priority
          />
        </div>
        <div className={styles.ImageTablet}>
          <Image
            src={`/images/landing/sidious/imgSidious2Tablet.png`}
            layout="fill"
            alt={""}
            priority
          />
        </div>

        <div className={styles.Widgetform}>
          <BaseInput
            name="companyName"
            placeholder="Your Company Name"
            type="text"
            value={companyName}
            onChange={changeHandlerCompanyName}
            className={styles.Input}
            error=""
          />

          <BaseSearchSelect
            name="juristdiction"
            placeholder="Selected Juristdiction"
            value={juristdiction}
            options={juristdictionList}
            onChange={changeHandlerJuristdiction}
            className={`${styles.Select} ${styles.SelectJuristdiction}`}
          />

          <BaseButton
            loading={loading}
            disabled={disabledSearch}
            onClick={submitFormData}
            className={styles.Button}
          >
            New Request
          </BaseButton>
        </div>

        <div className={styles.WidgetContent}>
          {/* Вариант когда по введеной компании не принимаются запросы */}

          {offlineSerivce && error && (
            <div className={styles.NotAccepting}>
              <div className={styles.NotAcceptingMessage}>
                <p>
                  Currently we are not accepting online orders for&nbsp;
                  <span>
                    {
                      juristdictionList.find(
                        (js) => js?.value === juristdiction
                      )?.title
                    }
                  </span>
                  . Still, you may send the Request and we will process it
                  manually. Please, specify which information about the company
                  you wish to receive.
                </p>
              </div>
              <BaseButton
                className={styles.NotAcceptingBtn}
                onClick={() => requestData("offline")}
              >
                Request
              </BaseButton>
            </div>
          )}

          {/* Вариант когда много компаний с подобным названием */}

          {companyData?.ItemList &&
            !error &&
            Object.values(companyData?.ItemList).length && (
              <div className={styles.ChoiceCompany}>
                <div className={styles.ManyOptions}>
                  <p>
                    There are too many companies’ names with{" "}
                    <span>{companyData?.name}</span>.
                    <br /> Please be more specific with your company’s name.
                  </p>
                </div>

                <div className={styles.CompaniesList}>
                  {companyData?.ItemList &&
                    Object.entries(companyData?.ItemList).map((item, index) => {
                      return (
                        <CompanyItem
                          key={index}
                          id="1"
                          isActive={
                            compNameRadio ===
                            `${item[1]?.name}${item[1]?.number}`
                          }
                          onClick={() =>
                            setCompNameRadio(
                              `${item[1]?.name}${item[1]?.number}`
                            )
                          }
                          companyName={item[1]?.name!}
                          companyCode={item[1]?.number!}
                        />
                      );
                    })}
                </div>
              </div>
            )}

          {/* Вариант с несуществующим именем */}

          {!offlineSerivce &&
            companyData?.name &&
            !companyData?.ItemList &&
            !error && (
              <div className={styles.NonExistentName}>
                <p>
                  The name <span>{companyData?.name}</span> was not found. It is
                  possible, that you entered non-existing name or online service
                  is experiencing technical troubles. You may send the Request
                  anyway and we will process it manually.
                </p>
              </div>
            )}

          {/* Таблица */}

          {companyData?.name && !error && (
            <div className={styles.Table}>
              <table>
                <thead>
                  <tr className={styles.TheadTr}>
                    <th className={styles.Clear}></th>
                    <th className={styles.Name}>Name</th>
                    <th className={styles.Price}>Price</th>
                    <th className={styles.Info}>Info</th>
                  </tr>
                </thead>

                <tbody>
                  {/* Select doc */}
                  <tr>
                    <td className={styles.TdSelect}>
                      <ValidItem
                        done={document ? true : false}
                        className={styles.ValidItem}
                      />
                    </td>
                    <td>
                      <BaseSelect
                        placeholder="Select Document"
                        options={options}
                        onChange={changeHandlerDocuments}
                        className={styles.Select}
                      />
                    </td>
                    <td>
                      {
                        <>
                          <span className={styles.PriceValue}>
                            {
                              selectedValue?.ItemList?.find(
                                (el) => el?.id === selectedValue?.id
                              )?.price
                            }
                          </span>
                          &ensp;
                          <span className={styles.Currency}>EUR</span>
                        </>
                      }

                      {/* <CheckAvailable title="By Request" /> */}
                    </td>
                    <td>
                      {selectedValue?.name && {} && (
                        <RequestInfoItem
                          success={contains?.success.join(" ")}
                          danger={contains?.danger.join(" ")}
                          info={contains?.info.join(" ")}
                          title={
                            selectedValue?.ItemList?.find(
                              (el) => el?.id === selectedValue?.id
                            )?.name
                          }
                          descriptionList={getDescription(
                            selectedValue?.ItemList?.find(
                              (el) => el?.id === selectedValue?.id
                            )?.name!
                          )}
                          className={styles.RequestInfoItem}
                        />
                      )}
                    </td>
                  </tr>

                  {!!document &&
                    servicesData?.length &&
                    servicesData?.map((service) => {
                      if (service?.name !== selectedValue?.name)
                        return (
                          <tr key={service?.id}>
                            <td
                              className={`${styles.TdSelect} ${
                                service?.price_available !== "Y"
                                  ? styles.TdDisabled
                                  : ""
                              }`}
                            >
                              {+service?.quantity_min ? (
                                <ValidItem
                                  done={true}
                                  className={styles.ValidItem}
                                />
                              ) : (
                                <BaseCheckbox
                                  checkboxValue={serviceSelected.includes(
                                    service?.name
                                  )}
                                  onClick={() => {
                                    setServiceCheckbox(service?.name);
                                  }}
                                />
                              )}
                            </td>
                            <td>
                              <p className={styles.SelectItemDescription}>
                                {service?.name}
                              </p>
                            </td>
                            <td>
                              {service?.price_available === "Y" ? (
                                <>
                                  <span className={styles.PriceValue}>
                                    {service?.price}
                                  </span>
                                  &ensp;
                                  <span className={styles.Currency}>EUR</span>
                                </>
                              ) : (
                                <CheckAvailable />
                              )}
                            </td>
                            <td>
                              {service?.description && (
                                <RequestInfoItem
                                  title={service?.name}
                                  descriptionList={getDescription(
                                    service?.name
                                  )}
                                  className={styles.RequestInfoItem}
                                />
                              )}
                            </td>
                          </tr>
                        );
                    })}
                </tbody>

                <tfoot>
                  <tr className={styles.tr_foot}>
                    <th colSpan={2} className={styles.Total}>
                      <span>Total</span>
                    </th>
                    <th>
                      <span className={`${styles.PriceValue} ${styles.Bold}`}>
                        {`${price}.00`}
                      </span>
                      &ensp;
                      <span className={`${styles.Currency} ${styles.Bold}`}>
                        EUR
                      </span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <BaseButton
                className={styles.Button}
                disabled={disableRequest}
                onClick={() => requestData("online")}
              >
                Request
              </BaseButton>

              <ul className={styles.DocumentDescription}>
                <li>
                  <span>G</span>
                  <p>
                    Contains general information about company - company name,
                    number and sometimes registered address.
                  </p>
                </li>
                <li>
                  <span>O</span>
                  <p>
                    Contains information about Directors and other officers of
                    the company.
                  </p>
                </li>
                <li>
                  <span>S</span>
                  <p>Contains Shareholders Information.</p>
                </li>
                <li>
                  <span>U</span>
                  <p>Contains information anout UBO.</p>
                </li>
                <li>
                  <span>E</span>
                  <p>
                    Electronic copy of document. Apostille may be not available
                    for this kind of documents.
                  </p>
                </li>
                <li>
                  <span>H</span>
                  <p>
                    Hard copy of documents available. Delivery must be added for
                    this kind document.
                  </p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CorporateDocuments;

interface Props {}

type juristdictionList = [{ title: string; value: string }];

type CompanyData = {
  name?: string;
  jurisdiction_ident?: string;
  ItemList?: {
    [key: string]: CompanyItem;
  };
};

type CompanyItem = {
  name?: string;
  number?: string;
  jurisdiction_ident?: string;
};

type PriceList = {
  [key: string]: PriceItem;
};

type PriceItemList = {
  id?: string;
  name?: string;
  name_ru?: string;
  description?: string;
  description_ru?: string;
  type?: string;
  quantity_min?: string;
  quantity_max?: string;
  price?: string;
  price_unit?: string;
  price_available?: string;
  price_request?: string;
};

type PriceItem = {
  id?: string;
  type?: string;
  jurisdiction_ident?: string;
  name?: string;
  name_ru?: string;
  description?: string;
  description_ru?: string;
  document_contains?: string;
  ItemList?: PriceItemList[];
};

type SelecetedValue = {
  ItemList?: ServiceOption[];
  description?: string;
  description_ru?: string;
  document_contains?: string;
  id?: string;
  name?: string;
  name_ru?: string;
  type?: string;
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

type SelectedData = {
  ItemList?: ServiceOption[];
  description?: string;
  description_ru?: string;
  document_contains?: string;
  id?: string;
  jurisdiction_ident?: string;
  name?: string;
  name_ru?: string;
  type?: string;
};

type Contains = {
  success: string[];
  danger: string[];
  info: string[];
};

type FormatOptions = { value: string; title: string }[];
