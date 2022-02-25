import React from 'react';
import { BaseButton, BaseInput, BasePopup, BaseTextarea } from '@base/index';
import styles from './CorporateDocumentsPopup.module.scss';

interface Props {
  className?: string;
}

const CorporateDocumentsPopup: React.FC<Props> = ({ className }) => {
  const [single, setsingle] = React.useState<boolean>(true);
  const [formData1, setFormData1] = React.useState<string>('');
  const [formData2, setFormData2] = React.useState<string>('');
  const [formData3, setFormData3] = React.useState<string>('');
  const [formData4, setFormData4] = React.useState<string>('');
  const [formData5, setFormData5] = React.useState<string>('');

  return (
    <>
      <BasePopup className={className} type='mini'>
        <div className={styles.CorporateDocumentsPopupTitle}>Send Request</div>

        <table className={styles.Table}>
          <tbody>
            <tr>
              <td className={styles.Large}>Jurisdiction</td>
              <td>Canada (Alberta)</td>
            </tr>
            <tr>
              <td className={styles.Large}>Company Name</td>
              <td>GOOGLE PAYMENT CANADA CORP. (2112976507)</td>
            </tr>
            <tr>
              <td className={styles.Large}>Corporate search report</td>
              <td>
                <span>40</span>&nbsp;EUR
              </td>
            </tr>
            <tr>
              <td className={styles.Large}>Processing fee</td>
              <td>
                <span>150</span>&nbsp;EUR
              </td>
            </tr>
            <tr>
              <td className={styles.Large}>Translation</td>
              <td>
                <span>25</span>&nbsp;EUR
              </td>
            </tr>
            <tr>
              <td className={styles.Large}>International Delivery</td>
              <td>
                <span>75</span>&nbsp;EUR
              </td>
            </tr>
            <tr>
              <td className={`${styles.TdTotal} ${styles.Large}`}>Total</td>
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

export default CorporateDocumentsPopup;
