import React, { useState } from 'react';
import {
  BaseButton,
  BaseContainer,
  BaseInput,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './SecondStep.module.scss';
import { LinkHome, StepBack } from '@content/index';

interface Props {
  nextStep: () => void;
}

//тестовый пароль для подтвержедния почты
const mockEmail = 'alisa@wonderlabagency.com';

const SecondStep: React.FC<Props> = ({ nextStep }) => {
  const [confirmEmail, setConfirmEmail] = useState('');

  const confirmEmailHandler = (value: string) => {
    setConfirmEmail(value);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form action='' method='post' className={styles.ConfrimEmail}>
      <BaseTitle className={styles.Title}>Confirm your email</BaseTitle>
      <BaseText className={styles.Subtitle}>
        We&apos;ve sent a confirmation code to {mockEmail}
      </BaseText>

      <BaseInput
        label=''
        value={confirmEmail}
        name='email'
        onChange={confirmEmailHandler}
        placeholder='Enter verification code here'
        type='text'
        required
        className={styles.Input}
      />

      <BaseButton onClick={submitFormData} className={styles.BtnLogin}>
        Confirm
      </BaseButton>

      <LinkHome className={styles.LinkHome} />

      <StepBack />
    </form>
  );
};

export default SecondStep;
