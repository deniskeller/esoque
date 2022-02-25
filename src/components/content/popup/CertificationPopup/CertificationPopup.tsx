import React from 'react';
import { BaseButton, BaseInput, BasePopup, BaseTextarea } from '@base/index';
import styles from './CertificationPopup.module.scss';

interface Props {
  className?: string;
}

const CertificationPopup: React.FC<Props> = ({ className }) => {
  const [single, setsingle] = React.useState<boolean>(true);
  const [formData1, setFormData1] = React.useState<string>('');
  const [formData2, setFormData2] = React.useState<string>('');
  const [formData3, setFormData3] = React.useState<string>('');
  const [formData4, setFormData4] = React.useState<string>('');
  const [formData5, setFormData5] = React.useState<string>('');

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
            {single && (
              <tr>
                <td colSpan={3} className={styles.TdHeader}>
                  Single Personal or Corporate document
                </td>
              </tr>
            )}

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
          value={formData1}
          onChange={(val: string) => setFormData1(val)}
          className={styles.Input}
        />

        <BaseInput
          name=''
          placeholder='Email'
          type='text'
          required
          autocomplete='on'
          value={formData2}
          onChange={(val: string) => setFormData2(val)}
          className={styles.Input}
        />

        <BaseInput
          name=''
          placeholder='Phone'
          type='text'
          required
          autocomplete='on'
          value={formData3}
          onChange={(val: string) => setFormData3(val)}
          className={styles.Input}
        />

        <BaseTextarea
          placeholder='Delivery address for originals / hardcopies of documents'
          value={formData4}
          onChange={(val: string) => setFormData4(val)}
          className={`${styles.Textarea} ${styles.Textarea1}`}
        />

        <BaseTextarea
          placeholder='Comment'
          value={formData5}
          onChange={(val: string) => setFormData5(val)}
          className={`${styles.Textarea} ${styles.Textarea2}`}
        />

        <BaseButton className={styles.Button}>Request</BaseButton>
      </BasePopup>
    </>
  );
};

export default CertificationPopup;
