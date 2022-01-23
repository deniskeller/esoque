import React, { useState } from 'react';
import {
  BaseButton,
  BaseContainer,
  BaseInput,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './SecondStep.module.scss';
import { LinkHome } from '@content/index';

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

    //тестовая валидация
    if (mockEmail == confirmEmail) {
      alert('пароли совпадают');
      setConfirmEmail('');
      nextStep();
    } else {
      alert('пароли не совпадают');
    }
  };

  return (
    <form action='' method='post' className={styles.ConfrimEmail}>
      <BaseTitle className={styles.Title}>Confirm your email</BaseTitle>
      <BaseText className={styles.Subtitle}>
        We've sent a confirmation code to {mockEmail}
      </BaseText>

      <BaseInput
        // label='Email'
        value={confirmEmail}
        name='email'
        onChange={confirmEmailHandler}
        placeholder='Enter verification code here'
        type='text'
        required
        className={styles.Input}
      />

      <BaseButton onClick={submitFormData} className={styles.BtnLogin}>
        Confirm and continue
      </BaseButton>

      <LinkHome />
    </form>
  );
};

export default SecondStep;
