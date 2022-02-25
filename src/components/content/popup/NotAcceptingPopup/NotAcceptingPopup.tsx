import React from 'react';
import { BaseButton, BaseInput, BasePopup, BaseTextarea } from '@base/index';
import styles from './NotAcceptingPopup.module.scss';

interface Props {
  className?: string;
}

const NotAcceptingPopup: React.FC<Props> = ({ className }) => {
  const [formData1, setFormData1] = React.useState<string>('');
  const [formData2, setFormData2] = React.useState<string>('');
  const [formData3, setFormData3] = React.useState<string>('');
  const [formData4, setFormData4] = React.useState<string>('');
  const [formData5, setFormData5] = React.useState<string>('');

  return (
    <>
      <BasePopup className={className} type='mini'>
        <div className={styles.NotAcceptingPopupTitle}>Send Request</div>

        <table className={styles.Table}>
          <tbody>
            <tr>
              <td className={styles.Large}>Jurisdiction</td>
              <td>USA (New York)</td>
            </tr>
            <tr>
              <td className={styles.Large}>Company Name</td>
              <td>Google</td>
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
          placeholder='Please, specify which information about the company you wish to receive.'
          value={formData4}
          onChange={(val: string) => setFormData4(val)}
          className={`${styles.Textarea} ${styles.Textarea1}`}
        />

        <BaseButton className={styles.Button}>Request</BaseButton>
      </BasePopup>
    </>
  );
};

export default NotAcceptingPopup;
