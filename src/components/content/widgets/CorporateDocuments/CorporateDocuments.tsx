import React from 'react';
import Image from 'next/image';
import {
  BaseInput,
  BaseSearchSelect,
  BaseButton,
  BaseSelect,
  BaseCheckbox,
} from '@base/index';
import {
  CompanyItem,
  ValidItem,
  CheckAvailable,
  RequestInfoItem,
} from '@content/index';
import { useDispatch } from 'react-redux';
import { setPopup } from 'store/modals/actions';
import styles from './CorporateDocuments.module.scss';

interface Props {}

const companiesList = [
  { companyName: 'ЗАО "ДИАМОНД-BW"', companyCode: 1234567890 },
  {
    companyName: 'CAMBRIDGE INSITU PRESSUREMETER TESTING NORTH AMERICA LIMITED',
    companyCode: 1234567890,
  },
];

const options = [
  { value: 'SCOTLAND', title: 'SCOTLAND' },
  { value: 'IRELAND', title: 'IRELAND' },
  { value: 'CANADA', title: 'CANADA' },
  { value: 'CYPRUS', title: 'CYPRUS' },
];

const descriptionList = [
  'Language: English',
  'Hard copy of a document',
  'Contains information about current status of a corporation or incorporated non-profit organization',
  'Does not contain information about shareholders and directors of the company',
  'Please note that Certificate of status is not available for trade names and partnerships',
  'up to 14 working days',
];

const CorporateDocuments: React.FC<Props> = ({}) => {
  const [companyName, setCompanyName] = React.useState<string>('');
  const [option, setOption] = React.useState<string>('');

  //логика для инпута
  const changeHandlerCompanyName = (value: string) => {
    setCompanyName(value);
  };

  //логика для селекта
  const changeHandlerJuristdiction = (value: string) => {
    setOption(value);
  };

  //сабмит
  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const [radioValue, setRadioValue] = React.useState(0);

  //select
  const documents = [
    {
      value: 'Passport and Other ID document',
      title: 'Passport and Other ID document',
    },
    {
      value: 'Single Personal or Corporate document',
      title: 'Single Personal or Corporate document',
    },
    {
      value: 'Set of  Personal or Corporate documents',
      title: 'Set of  Personal or Corporate documents',
    },
  ];
  const [document, setDocument] = React.useState<string>('');
  const changeHandlerDocuments = (value: string) => {
    setDocument(value);
  };

  //checkbox
  const [checkbox, setCheckbox] = React.useState<boolean>(false);

  //вызов модалки
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setPopup('CertificationPopup', 1));
  };

  return (
    <div className={styles.CorporateDocuments}>
      <p className={styles.Description}>
        Specify company, jurisdiction, choose and order documents. Hard copy or
        electronic. Fast service, clear pricing.
      </p>

      <div className={styles.ImageDesktop}>
        <Image src={`/images/landing/imgSidious2.png`} layout='fill' alt={''} />
      </div>
      <div className={styles.ImageTablet}>
        <Image
          src={`/images/landing/imgSidious2Tablet.png`}
          layout='fill'
          alt={''}
        />
      </div>

      <div className={styles.Widgetform}>
        <BaseInput
          name='companyName'
          placeholder='Your Company Name'
          type='text'
          value={companyName}
          onChange={changeHandlerCompanyName}
          className={styles.Input}
          error=''
        />

        <BaseSearchSelect
          placeholder='Selected Juristdiction'
          options={options}
          onChange={changeHandlerJuristdiction}
          className={`${styles.Select} ${styles.SelectJuristdiction}`}
        />

        <BaseButton onClick={submitFormData} className={styles.Button}>
          New Request
        </BaseButton>
      </div>

      <div className={styles.WidgetContent}>
        {/* Вариант когда по введеной компании не принимаются запросы */}
        <div className={styles.NotAccepting}>
          <div className={styles.NotAcceptingMessage}>
            <p>
              Currently we are not accepting online orders for&nbsp;
              <span>USA (New York)</span>. Still, you may send the Request and
              we will process it manually. Please, specify which information
              about the company you wish to receive.
            </p>
          </div>
          <BaseButton
            className={styles.NotAcceptingBtn}
            onClick={() => dispatch(setPopup('NotAcceptingPopup', 3))}
          >
            Request
          </BaseButton>
        </div>

        {/* Вариант когда много компаний с подобным названием */}
        <div className={styles.ChoiceCompany}>
          <div className={styles.ManyOptions}>
            <p>
              There are too many companies’ names with <span>diamond</span>.
              <br /> Please be more specific with your company’s name.
            </p>
          </div>

          <div className={styles.CompaniesList}>
            {companiesList &&
              companiesList.map((item, index) => {
                return (
                  <CompanyItem
                    key={index}
                    id='1'
                    isActive={radioValue == 1}
                    onClick={() => setRadioValue(1)}
                    companyName={item.companyName}
                    companyCode={item.companyCode}
                  />
                );
              })}
          </div>
        </div>

        {/* Вариант с несуществующим именем */}
        <div className={styles.NonExistentName}>
          <p>
            The name <span>diamond1</span> was not found. It is possible, that
            you entered non-existing name or online service is experiencing
            technical troubles. You may send the Request anyway and we will
            process it manually.
          </p>
        </div>

        {/* Таблица */}

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
              <tr className={styles.tr_certcopy_doc}>
                <td className={styles.TdSelect}>
                  <ValidItem done={false} className={styles.ValidItem} />
                </td>
                <td>
                  <BaseSelect
                    placeholder='Select Document'
                    options={documents}
                    onChange={changeHandlerDocuments}
                    className={styles.Select}
                  />
                </td>
                <td>
                  <CheckAvailable title='By Request' />
                </td>
                <td>
                  <RequestInfoItem
                    title='EU Licensed lawyer/company'
                    success='G'
                    danger='O S U'
                    info='H'
                    descriptionList={descriptionList}
                  />
                </td>
              </tr>

              <tr className={styles.tr_certcopy_delivery}>
                <td className={styles.TdSelect}>
                  <ValidItem done={true} className={styles.ValidItem} />
                </td>
                <td>
                  <p className={styles.SelectItemDescription}>
                    International Delivery
                  </p>
                </td>
                <td>
                  <span className={styles.PriceValue}>200.00</span>&ensp;
                  <span className={styles.Currency}>EUR</span>
                </td>
                <td>
                  <RequestInfoItem
                    title='EU Licensed lawyer/company'
                    descriptionList={descriptionList}
                  />
                </td>
              </tr>

              <tr className={styles.tr_verification_apostil_N}>
                <td className={styles.TdSelect}>
                  <BaseCheckbox
                    checkboxValue={checkbox}
                    onClick={() => setCheckbox(!checkbox)}
                  />
                </td>
                <td className={styles.CertcopyDocname}>
                  <p className={styles.SelectItemDescription}>Apostille</p>
                </td>
                <td>
                  <CheckAvailable />
                </td>
                <td>
                  <RequestInfoItem
                    title='EU Licensed lawyer/company'
                    descriptionList={descriptionList}
                  />
                </td>
              </tr>

              <tr className={styles.tr_verification_apostil_Notary}>
                <td className={styles.TdSelect}>
                  <BaseCheckbox
                    checkboxValue={checkbox}
                    onClick={() => setCheckbox(!checkbox)}
                  />
                </td>
                <td className={styles.CertcopyDocname}>
                  <p className={styles.SelectItemDescription}>Translation</p>
                </td>
                <td>
                  <span className={styles.PriceValue}>200.00</span>&ensp;
                  <span className={styles.Currency}>EUR/page</span>
                </td>
                <td>
                  <RequestInfoItem
                    title='EU Licensed lawyer/company'
                    descriptionList={descriptionList}
                  />
                </td>
              </tr>

              <tr className={styles.tr_verification_apostil_Y}>
                <td className={styles.TdSelect}>
                  <BaseCheckbox
                    checkboxValue={checkbox}
                    onClick={() => setCheckbox(!checkbox)}
                  />
                </td>
                <td className={styles.CertcopyDocname}>
                  <p className={styles.SelectItemDescription}>
                    International Delivery
                  </p>
                </td>
                <td>
                  <span className={styles.PriceValue}>200.00</span>&ensp;
                  <span className={styles.Currency}>EUR</span>
                </td>
                <td>
                  <RequestInfoItem
                    title='EU Licensed lawyer/company'
                    descriptionList={descriptionList}
                  />
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr className={styles.tr_foot}>
                <th></th>
                <th>
                  <p className={styles.Total}>Total</p>
                </th>
                <th>
                  <span className={`${styles.PriceValue} ${styles.Bold}`}>
                    200.00
                  </span>
                  &ensp;
                  <span className={`${styles.Currency} ${styles.Bold}`}>
                    EUR
                  </span>
                </th>
              </tr>
            </tfoot>
          </table>
          <BaseButton className={styles.Button} onClick={handleClick}>
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
                Contains information about Directors and other officers of the
                company.
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
                Electronic copy of document. Apostille may be not available for
                this kind of documents.
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
      </div>
    </div>
  );
};

export default CorporateDocuments;
