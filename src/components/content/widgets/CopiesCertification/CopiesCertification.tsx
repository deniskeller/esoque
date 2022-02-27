import React from 'react';
import {
  BaseInput,
  BaseSelect,
  BaseButton,
  BaseRadioButton,
} from '@base/index';
import { ValidItem, RequestInfoItem, CertificationPopup } from '@content/index';
import { useDispatch } from 'react-redux';
import { setPopup } from 'store/modals/actions';
import styles from './CopiesCertification.module.scss';

interface Props {}

const descriptionList = [
  'Language: English',
  'Hard copy of a document',
  'Contains information about current status of a corporation or incorporated non-profit organization',
  'Does not contain information about shareholders and directors of the company',
  'Please note that Certificate of status is not available for trade names and partnerships',
  'up to 14 working days',
];

const CopiesCertification: React.FC<Props> = ({}) => {
  //radio Button
  const [radioValue, setRadioValue] = React.useState(1);

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
    console.log('gender: ', value);
    setDocument(value);
  };

  //quantity
  const [quantity, setQuantity] = React.useState<number>(1);
  const changeHandlerQuantity = (value: number) => {
    setQuantity(value);
  };

  //вызов модалки
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPopup('CertificationPopup', 2));
  };

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
              <tr className={styles.tr_verification_apostil_N}>
                <td className={styles.TdSelect}>
                  <BaseRadioButton
                    id='1'
                    isActive={radioValue == 1}
                    onClick={() => setRadioValue(1)}
                  ></BaseRadioButton>
                </td>
                <td colSpan={3} className={styles.CertcopyDocname}>
                  <p className={styles.SelectItemDescription}>
                    EU Licensed lawyer/company
                  </p>
                </td>
                <td>
                  <RequestInfoItem
                    title='EU Licensed lawyer/company'
                    descriptionList={descriptionList}
                    className={styles.RequestInfoItem}
                  />
                </td>
              </tr>

              <tr className={styles.tr_verification_apostil_Notary}>
                <td className={styles.TdSelect}>
                  <BaseRadioButton
                    id='2'
                    isActive={radioValue == 2}
                    onClick={() => setRadioValue(2)}
                  ></BaseRadioButton>
                </td>
                <td colSpan={3} className={styles.CertcopyDocname}>
                  <p className={styles.SelectItemDescription}>Notary</p>
                </td>
                <td>
                  <RequestInfoItem
                    title='EU Licensed lawyer/company'
                    descriptionList={descriptionList}
                    className={styles.RequestInfoItem}
                  />
                </td>
              </tr>

              <tr className={styles.tr_verification_apostil_Y}>
                <td className={styles.TdSelect}>
                  <BaseRadioButton
                    id='3'
                    isActive={radioValue == 3}
                    onClick={() => setRadioValue(3)}
                  ></BaseRadioButton>
                </td>
                <td colSpan={3} className={styles.CertcopyDocname}>
                  <p className={styles.SelectItemDescription}>
                    Verification with Apostille
                  </p>
                </td>
                <td>
                  <RequestInfoItem
                    title='EU Licensed lawyer/company'
                    descriptionList={descriptionList}
                    className={styles.RequestInfoItem}
                  />
                </td>
              </tr>

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
                  <BaseInput
                    name='number'
                    min={1}
                    type='number'
                    value={quantity}
                    onChange={changeHandlerQuantity}
                    className={styles.Input}
                  />
                </td>
                <td>
                  <span className={styles.PriceValue}>200.00</span>&ensp;
                  <span className={styles.Currency}>EUR</span>
                </td>
                <td>
                  <RequestInfoItem
                    title='EU Licensed lawyer/company'
                    descriptionList={descriptionList}
                    className={styles.RequestInfoItem}
                  />
                </td>
              </tr>

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
                  <span className={styles.PriceValue}>200.00</span>&ensp;
                  <span className={styles.Currency}>EUR</span>
                </td>
                <td>
                  <RequestInfoItem
                    title='EU Licensed lawyer/company'
                    descriptionList={descriptionList}
                    className={styles.RequestInfoItem}
                  />
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
        </div>
        <BaseButton className={styles.Button} onClick={handleClick}>
          Request
        </BaseButton>
      </div>
      <CertificationPopup className='CertificationPopup' />
    </>
  );
};

export default CopiesCertification;
