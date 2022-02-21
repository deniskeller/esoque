import React from 'react';
import { BaseButton, BaseInput, BaseText, BaseTitle } from '@base/index';
import styles from './FourthStep.module.scss';
import { LinkHome, StepBack } from '@content/index';

interface Props {
  nextStep: () => void;
}

//тестовый телефон
const mockPhone = '+44 442 545 221';

const FourthStep: React.FC<Props> = ({ nextStep }) => {
  const [confirmPhone, setConfirmPhone] = React.useState<number | string>('');
  const changeHandlerConfirmPhone = (value: number) => {
    setConfirmPhone(value);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form action='' method='post' className={styles.ConfirmPhone}>
      <BaseTitle className={styles.Title}>Confirm your phone number</BaseTitle>
      <BaseText className={styles.Subtitle}>
        We&apos;ve sent a verification code to +44 442 545 221
      </BaseText>

      <BaseInput
        label=''
        name='confirmPhone'
        placeholder='Enter verification code here'
        type='text'
        required
        value={confirmPhone}
        onChange={changeHandlerConfirmPhone}
        className={styles.Input}
        error=''
      />

      <BaseButton onClick={submitFormData} className={styles.BtnLogin}>
        Confirm and continue
      </BaseButton>

      <LinkHome className={styles.LinkHome} />

      <StepBack />
    </form>
  );
};

export default FourthStep;
