import { BaseInput, BaseSelect, BaseButton } from '@base/index';
import React from 'react';
import styles from './WidgetDarkside.module.scss';

interface Props {}

interface ISelectItem {
  title: string;
}

const options = [
  { value: 'Alberta (Canada)', title: 'Alberta (Canada)' },
  { value: 'British Columbia (Canada', title: 'British Columbia (Canada)' },
  { value: 'Cyprus', title: 'Cyprus' },
  { value: 'England (UK)', title: 'England (UK)' },
  { value: 'Marshall Islands', title: 'Marshall Islands' },
  { value: 'Northern Ireland (UK)', title: 'Northern Ireland (UK)' },
  { value: 'Scotland (UK)', title: 'Scotland (UK)' },
];

const WidgetDarkside: React.FC<Props> = ({}) => {
  const [companyName, setCompanyName] = React.useState<string>('');
  const [option, setOption] = React.useState<string>('');
  const [widgetVisible, setWidgetVisible] = React.useState<boolean>(false);

  //логика для инпута
  const changeHandlerCompanyName = (value: string) => {
    setCompanyName(value);
  };

  //логика для селекта
  const changeHandlerJuristdiction = (value: string) => {
    console.log('gender: ', value);
    setOption(value);
  };

  //сабмит
  const submitFormData = (e: React.SyntheticEvent) => {
    if (companyName != '' && option != '') {
      setWidgetVisible(true);
      if (companyName == isCorrect.value1 && option == isCorrect.value2) {
        e.preventDefault();
        setIsExisting(true);
        console.log('kek');
      } else {
        setIsExisting(false);
      }
    }
  };

  //виджет
  //несуществующая компания
  const [isExisting, setIsExisting] = React.useState<boolean | null>(null);

  const [isCorrect, setIsCorrect] = React.useState({
    value1: 'diamond',
    value2: 'Alberta (Canada)',
  });

  React.useEffect(() => {
    console.log('isExisting: ', isExisting);
  }, [isCorrect, companyName, option, isExisting]);

  return (
    <>
      <div className={styles.Widget}>
        <div className={styles.Widgetform}>
          <BaseInput
            name='companyName'
            placeholder='Your Company Name'
            type='text'
            value={companyName}
            onChange={changeHandlerCompanyName}
            className={styles.Input}
          />

          <BaseSelect
            placeholder='Selected Juristdiction'
            options={options}
            onChange={changeHandlerJuristdiction}
            className={`${styles.Select} ${styles.SelectJuristdiction}`}
          />

          <BaseButton onClick={submitFormData} className={styles.Button}>
            Check
          </BaseButton>
        </div>
        {widgetVisible ? (
          <div className={styles.WidgetContent}>
            {!isExisting ? (
              <div className={styles.NonExistent}>
                <p className={styles.NonExistentTitle}>
                  This Company Name <span>Google</span> is not available
                </p>
                <p className={styles.NonExistentSubtitle}>
                  Please try another company name!
                </p>
              </div>
            ) : (
              <div className={styles.Existent}>
                <div className={styles.ExistentHeader}>
                  <div className={styles.CompanyName}>
                    <div className={styles.Name}>DIAMOD</div>
                    <div className={styles.Title}>Alberta (Canada)</div>
                    <div className={styles.Subtitle}>
                      Government and Notary Fees / Registered Address
                    </div>
                  </div>
                  <div className={styles.CompanyPrice}>
                    <div className={styles.Title}>
                      Great, your company name: <span>DIAMOD</span> is free.
                    </div>
                    <p className={styles.Description}>
                      Please, note, that the government companies registrar may
                      reject the application for many reasons, for example, if
                      the chosen name is too similar to the already registered
                      one.In that case you may provide another name (or names)
                      and we will submit it again.
                    </p>
                    <div className={styles.Price}>
                      <div className={styles.PriceTitle}>Price:</div>
                      <div className={styles.PriceValue}>
                        <span>4300.00</span> EUR
                      </div>
                      <BaseButton className={styles.PriceButton}>
                        Buy
                      </BaseButton>
                    </div>
                  </div>
                </div>

                <div className={styles.ExistentDescription}>
                  <div className={styles.ExistentDescriptionTitle}>
                    Available Ready-made companies in: Alberta (Canada)
                  </div>
                  <div className={styles.ExistentDescriptionSubtitle}>
                    Government and Notary Fees / Registered Address / Proxy
                    Services Package / Filling Financial Statements and Tax
                    reporting
                  </div>
                </div>

                <div className={styles.ExistentTable}>
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
                </div>
              </div>
            )}
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default WidgetDarkside;
