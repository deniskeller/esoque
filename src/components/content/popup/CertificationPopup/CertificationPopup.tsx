import React from 'react';
import { BaseInput, BasePopup } from '@base/index';
import styles from './CertificationPopup.module.scss';

interface Props {
  className?: string;
}

const CertificationPopup: React.FC<Props> = ({ className }) => {
  return (
    <>
      <BasePopup className={className} type='mini'>
        <div className={styles.CertificationPopupTitle}>Send Request</div>
        <div className={styles.CertificationPopupSubtitle}>
          Pay now or send request for bank transfers and you will receive the
          link to Notary Appointments’ Calendar
        </div>

        <table className={styles.Table}>
          <tbody>
            <tr>
              <td colSpan={3} className={styles.TdHeader}>
                Single Personal or Corporate document
              </td>
            </tr>
            <tr>
              <td>EU Licensed lawyer/company</td>
              <td className={styles.TdCounter}>1</td>
              <td>
                <span>75</span>&nbsp;EUR
              </td>
            </tr>
            <tr>
              <td colSpan={2}>International Delivery</td>
              <td>
                <span>75</span>&nbsp;EUR
              </td>
            </tr>
            <tr>
              <td colSpan={2} className={styles.TdTotal}>
                Total
              </td>
              <td>
                <span>75</span>&nbsp;EUR
              </td>
            </tr>
          </tbody>
        </table>

        <BaseInput
          name=''
          placeholder='Your Name'
          type='text'
          required
          autocomplete='on'
          value={''}
          onChange={() => {}}
          className={styles.Input}
        />

        <BaseInput
          name=''
          placeholder='Email'
          type='text'
          required
          autocomplete='on'
          value={''}
          onChange={() => {}}
          className={styles.Input}
        />

        <BaseInput
          name=''
          placeholder='Phone'
          type='text'
          required
          autocomplete='on'
          value={''}
          onChange={() => {}}
          className={styles.Input}
        />
      </BasePopup>
    </>
  );
};

export default CertificationPopup;
