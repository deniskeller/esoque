import React from 'react';
import { BaseButton, BasePopup } from '@base/index';
import styles from './RequestSuccessPopup.module.scss';

interface Props {
  className?: string;
}

const RequestSuccessPopup: React.FC<Props> = ({ className }) => {

  return (
    <>
      <BasePopup className={className} type='mini'>
        <div className={styles.Title}>Thanks!</div>
        <div className={styles.Subtitle}><p>Your request has been successfully sent. 
            We will reach you soon!</p></div>

        <BaseButton className={styles.Button} type='success' loading={true}>Great</BaseButton>
      </BasePopup>
    </>
  );
};

export default RequestSuccessPopup;
