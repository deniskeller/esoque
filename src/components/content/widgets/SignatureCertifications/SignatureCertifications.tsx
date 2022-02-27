import React from 'react';
import { BaseInput, BaseRadioButton, BaseButton } from '@base/index';
import { ValidItem, RequestInfoItem, CertificationPopup } from '@content/index';
import { useDispatch } from 'react-redux';
import { setPopup } from 'store/modals/actions';
import styles from './SignatureCertifications.module.scss';

interface Props {}

const descriptionList = [
  'Language: English',
  'Hard copy of a document',
  'Contains information about current status of a corporation or incorporated non-profit organization',
  'Does not contain information about shareholders and directors of the company',
  'Please note that Certificate of status is not available for trade names and partnerships',
  'up to 14 working days',
];

const SignatureCertifications: React.FC<Props> = ({}) => {
  //radio Button
  const [radioValue, setRadioValue] = React.useState(1);

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
              <tr className={styles.tr_verification_apostil_N}>
                <td className={styles.Select}>
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

              <tr className={styles.tr_certcopy_doc}>
                <td className={styles.Hidden}></td>
                <td>
                  <p className={styles.SelectItemDescription}>
                    Number of Documents/Persons to sign:
                  </p>
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
                <td></td>
              </tr>

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

export default SignatureCertifications;
