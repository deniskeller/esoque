import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { checkIncorporate, getJCInfo } from '@api/widget-safe';
import { v4 as uuidv4 } from 'uuid';

import { BaseInput, BaseSelect, BaseButton } from '@base/index';
import { juristdictionData } from '@utils/juristdiction';
import styles from './WidgetDarkside.module.scss';

const WidgetDarkside: React.FC<Props> = () => {
  const router = useRouter();

  // Input / Select
  const [companyName, setCompanyName] = React.useState<string>('');
  const [juristdiction, setJuristdiction] = useState('');

  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState('');

  // Response data
  const [response, setResponse] = useState<Response>();

  // Vivisble response
  const [widgetVisible, setWidgetVisible] = React.useState<boolean>(false);

  const changeHandlerCompanyName = (value: string) => {
    setCompanyName(value);
  };
  const changeHandlerJuristdiction = (value: string) => {
    const code = juristdictionData.filter((el) => el?.title === value)[0]
      ?.value;
    setJuristdiction(code);
  };

  // Submit
  const submitFormData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    setWidgetVisible(false);
    setError('');

    // Генерируем session_id, который,
    // нам потом нужно будет передать на наш бэкенд,
    // в случае если пользователь нажмет на кнопку buy
    const session_id = uuidv4();
    sessionStorage.setItem('session_id', session_id);

    const data = {
      js: juristdiction,
      cn: companyName.trim(),
      jc: juristdiction,
      ml: 3000,
      aff: 0,
      session_id,
    };

    const res = await getJCInfo(data);

    if (res) {
      setWidgetVisible(true);
      setResponse(res);
    } else {
      setWidgetVisible(true);
      setError('Network error please try again');
    }
    setLoading(false);
  };

  const buy = async () => {
    // Получаем session_id из предыдущего шага
    const session_id = sessionStorage.getItem('session_id');

    const data = {
      js: juristdiction,
      cn: companyName.trim(),
      jc: juristdiction,
      ml: 3000,
      aff: 0,
      session_id: session_id!,
    };

    const res = await checkIncorporate(data);
    console.log(res, 'check');

    if (res) {
      router.push(response?.url_cart!);
    }
  };

  React.useEffect(() => {
    if (!companyName) {
      setError('');
    }
    if (companyName.trim().length >= 3 && juristdiction) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [companyName, juristdiction]);

  React.useEffect(() => {
    return () => {
      sessionStorage.removeItem('session_id');
    };
  }, []);

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
            error=""
          />

          <BaseSelect
            widget
            placeholder="Selected Juristdiction"
            options={juristdictionData}
            onChange={changeHandlerJuristdiction}
            className={`${styles.Select} ${styles.SelectJuristdiction}`}
          />

          <BaseButton
            loading={loading}
            disabled={disabled}
            onClick={submitFormData}
            className={styles.Button}
          >
            Check
          </BaseButton>
        </div>

        {widgetVisible && (
          <div className={styles.WidgetContent}>
            {response?.is_available ? (
              <div className={styles.NonExistent}>
                {error ? (
                  <p className={styles.NonExistentTitle}>{error}</p>
                ) : (
                  <>
                    <p className={styles.NonExistentTitle}>
                      This Company Name{' '}
                      <span>
                        {response?.searched_company?.company_name ||
                          companyName}
                      </span>{' '}
                      is not available
                    </p>
                    <p className={styles.NonExistentSubtitle}>
                      {response?.message_description}
                    </p>
                  </>
                )}
              </div>
            ) : (
              <div className={styles.Existent}>
                <div className={styles.ExistentHeader}>
                  <div className={styles.CompanyName}>
                    <div className={styles.Name}>
                      {response?.company_name || companyName}
                    </div>
                    <div className={styles.Title}>
                      {response?.product_name || juristdiction}
                    </div>
                    <div className={styles.Subtitle}>
                      {response?.product_description ||
                        'Government and Notary Fees / Registered Address'}
                    </div>
                  </div>
                  <div className={styles.CompanyPrice}>
                    <div className={styles.Title}>
                      Great, your company name:{' '}
                      <span>{response?.company_name || companyName}</span> is
                      free.
                    </div>
                    <p className={styles.Description}>
                      {response?.message_description}
                    </p>
                    <div className={styles.Price}>
                      <div className={styles.PriceTitle}>Price:</div>
                      <div className={styles.PriceValue}>
                        <span>{response?.price}</span> EUR
                      </div>
                      <BaseButton onClick={buy} className={styles.PriceButton}>
                        Buy
                      </BaseButton>
                    </div>
                  </div>
                </div>

                {/* <div className={styles.ExistentDescription}>
                  <div className={styles.ExistentDescriptionTitle}>
                    Available Ready-made companies in: Alberta (Canada)
                  </div>
                  <div className={styles.ExistentDescriptionSubtitle}>
                    Government and Notary Fees / Registered Address / Proxy
                    Services Package / Filling Financial Statements and Tax
                    reporting
                  </div>
                </div> */}

                {/* <div className={styles.ExistentTable}>
                  <table>
                    <thead>
                      <tr className={styles.TheadTr}>
                        <th className={styles.CompanyName}>COMPANY NAME</th>
                        <th className={styles.RegistationDate}>
                          REGISTRATION DATE
                        </th>
                        <th className={styles.Price}>PRICE</th>
                        <th className={styles.Actions}></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className={styles.TdCompanyName}>
                          BURMEX MARKETING LP
                        </td>
                        <td className={styles.TdRegistationDate}>23.10.19</td>
                        <td className={styles.TdPrice}>
                          <span>4600.00</span>EUR
                        </td>
                        <td className={styles.TdActions}>
                          <BaseButton className={styles.TdActionsButton}>
                            Buy
                          </BaseButton>
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.TdCompanyName}>
                          PERLAND GENERAL ASSETS LP
                        </td>
                        <td className={styles.TdRegistationDate}>23.10.19</td>
                        <td className={styles.TdPrice}>
                          <span>4600.00</span>EUR
                        </td>
                        <td className={styles.TdActions}>
                          <BaseButton className={styles.TdActionsButton}>
                            Buy
                          </BaseButton>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default WidgetDarkside;

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
  searched_company?: {
    id: number;
    hash: string;
    company_name: string;
    status: string;
    currency_code: string;
  };
};
