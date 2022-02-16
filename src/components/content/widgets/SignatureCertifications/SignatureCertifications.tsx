import {
  BaseInput,
  BaseSelect,
  BaseRadioButton,
  BaseButton,
} from '@base/index';
import { ValidItem } from '@content/index';
import React from 'react';
import styles from './SignatureCertifications.module.scss';

interface Props {}

const SignatureCertifications: React.FC<Props> = ({}) => {
  //radio Button
  const [radioValue, setRadioValue] = React.useState(false);

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

  return (
    <div className={styles.SignatureCertifications}>
      <p className={styles.Description}>
        We can remotely verify Your Signature on any Original Document <br />
        Here you may appoint remote meeting for signature verification on any
        document: just choose the type of verification and proceed to
        appointments calendar
      </p>
      <p className={styles.CovidDescription}>
        Due to COVID -19 situation we can remotely verify personal and corporate
        documents.
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
                  value={radioValue}
                  onClick={() => setRadioValue(!radioValue)}
                ></BaseRadioButton>
              </td>
              <td colSpan={3} className={styles.CertcopyDocname}>
                <p className={styles.SelectItemDescription}>
                  EU Licensed lawyer/company
                </p>
              </td>
              <td>
                <span className={styles.Question}>
                  <p className={styles.QuestionTitle}>?</p>
                </span>
              </td>
            </tr>

            <tr className={styles.tr_certcopy_doc}>
              <td className={styles.Select}></td>
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
                <ValidItem done='true' className={styles.ValidItem} />
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
                <span className={styles.Question}>
                  <p className={styles.QuestionTitle}>?</p>
                </span>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr className={styles.tr_foot}>
              <th></th>
              <th colSpan={2}>
                <p className={styles.Total}>Total</p>
              </th>
              <th>
                <span className={`${styles.PriceValue} ${styles.Bold}`}>
                  200.00
                </span>
                &ensp;
                <span className={`${styles.Currency} ${styles.Bold}`}>EUR</span>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
      <BaseButton className={styles.Button}>Request</BaseButton>
    </div>
  );
};

export default SignatureCertifications;
