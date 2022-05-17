import React, { useState } from "react";
import { useRouter } from "next/router";

import { getJCInfo } from "@api/widget-safe";
import { BaseInput, BaseSelect, BaseButton, BaseCheckbox } from "@base/index";
import { juristdictionData } from "@utils/juristdiction";

import styles from "./Widget.module.scss";

interface Props {}

interface ISelectItem {
  title: string;
}

type Response = {
  cart?: number;
  company_name?: string;
  is_available?: boolean;
  message?: string;
  message_description?: string;
  overlimit_status?: number;
  price?: string;
  product_description?: string;
  product_id?: number;
  product_name?: string;
  url_cart?: string;
  list?: {
    [key: string]: {
      company_name?: string;
      lock?: number;
      price?: string;
      product_id?: string;
      regdate?: string;
      url_cart?: string;
    };
  };
  product?: {
    description?: string;
    name?: string;
  };
};

const Widget: React.FC<Props> = ({}) => {
  const router = useRouter();
  const [companyName, setCompanyName] = React.useState<string>("");
  const [option, setOption] = React.useState<string>("");
  //  juristdiction
  const [juristdiction, setJuristdiction] = useState("");
  const [response, setResponse] = useState<Response>({});
  const changeHandlerCompanyName = (value: string) => {
    setCompanyName(value);
  };
  const changeHandlerJuristdiction = (value: string) => {
    const code = juristdictionData.filter((el) => el?.title === value)[0]
      ?.value;
    setJuristdiction(code);
    setOption(value);
  };

  //логика чекбокса
  // const [checkboxValue, setCheckboxValue] = React.useState<boolean>(true);

  // const changeHandlerCheckbox = (value: boolean) => {
  //   setCheckboxValue(value);
  // };

  //сабмит
  const submitFormData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (companyName && juristdiction) {
      // const res = await getJCInfo({
      //   js: juristdiction,
      //   cn: companyName,
      //   jc: juristdiction,
      //   ml: 3000,
      //   aff: 0,
      // });
      // if (res) {
      //   setResponse(res);
      // }
    }
  };

  const buyCN = (path: string) => {
    if (path) {
      router.push(path);
    }
  };
  return (
    <>
      <div className={styles.Widget}>
        <div className={styles.Widgetform}>
          <BaseInput
            name="companyName"
            placeholder="Your Company Name"
            type="text"
            value={companyName}
            onChange={changeHandlerCompanyName}
            className={styles.Input}
          />

          <BaseSelect
            widget
            placeholder="Selected Juristdiction"
            options={juristdictionData}
            onChange={changeHandlerJuristdiction}
            className={`${styles.Select} ${styles.SelectJuristdiction}`}
          />

          <BaseButton onClick={submitFormData} className={styles.Button}>
            Check
          </BaseButton>
        </div>

        <div className={styles.WidgetResponse} style={{ color: "#fff " }}>
          {response?.is_available && (
            <>
              <div className={styles.ResponseCompanyName}>
                {response?.company_name &&
                  `Company name: ${response?.company_name}`}
              </div>
              <div className={styles.ResponseProductName}>
                {response?.product_name &&
                  `Product name: ${response?.product_name}`}
              </div>
              <div className={styles.ResponseProductDescription}>
                {response?.product_description &&
                  `Product name: ${response?.product_description}`}
              </div>
              <div className={styles.ResponseMessage}>
                {response?.message && `message: ${response?.message}`}
              </div>
              <div className={styles.ResponseMessageDescription}>
                {response?.message_description &&
                  `message description: ${response?.message_description}`}
              </div>
              <div className={styles.ResponsePrice}>
                {response?.price && `price: ${response?.price} eur`}
              </div>
              {response?.url_cart && (
                <BaseButton
                  onClick={() => buyCN(response?.url_cart!)}
                  className={styles.Button}
                >
                  Buy
                </BaseButton>
              )}

              {response?.list?.length && (
                <div className={styles.ResponseList}>
                  {Object.values(response?.list).map((el) => {
                    <>
                      <div className={styles.ResponseCompanyName}>
                        {el?.company_name &&
                          `Company name: ${el?.company_name}`}
                      </div>
                      <div className={styles.ResponseRegdate}>
                        {el?.regdate && `regdate: ${el?.regdate}`}
                      </div>{" "}
                      <div className={styles.ResponsePrice}>
                        {el?.price && `price: ${el?.price} eur`}
                      </div>
                      {el?.url_cart && (
                        <BaseButton
                          onClick={() => buyCN(el?.url_cart!)}
                          className={styles.Button}
                        >
                          Buy
                        </BaseButton>
                      )}
                    </>;
                  })}
                </div>
              )}
            </>
          )}
          {!response?.is_available && (
            <>
              <div className={styles.ResponseCompanyName}>
                {response?.company_name &&
                  `Company name: ${response?.company_name}`}
              </div>
              <div className={styles.ResponseProductName}>
                {response?.product_name &&
                  `Product name: ${response?.product_name}`}
              </div>
              <div className={styles.ResponseProductDescription}>
                {response?.product_description &&
                  `Product name: ${response?.product_description}`}
              </div>
              <div className={styles.ResponseMessage}>
                {response?.message && `message: ${response?.message}`}
              </div>
              <div className={styles.ResponseMessageDescription}>
                {response?.message_description &&
                  `message description: ${response?.message_description}`}
              </div>
            </>
          )}
        </div>
        {/* <BaseCheckbox
          onClick={changeHandlerCheckbox}
          checkboxValue={checkboxValue}
        >
          Show only ready-made companies
        </BaseCheckbox> */}
      </div>
    </>
  );
};

export default Widget;
