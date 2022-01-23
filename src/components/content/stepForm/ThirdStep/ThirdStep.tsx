import React from 'react';
import Link from 'next/link';
import {
  BaseButton,
  BaseInput,
  BaseSearchSelect,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './ThirdStep.module.scss';
import { LinkHome } from '@content/index';

interface Props {
  nextStep: () => void;
}

const country = [
  { code: 41, title: 'United Kingdom1' },
  { code: 42, title: 'United Kingdom2' },
  { code: 43, title: 'United Kingdom3' },
  { code: 44, title: 'United Kingdom4' },
  { code: 45, title: 'United Kingdom5' },
  { code: 46, title: 'United Kingdom6' },
  { code: 47, title: 'United Kingdom7' },
  { code: 49, title: 'United Kingdom8' },
];

const ThirdStep: React.FC<Props> = ({ nextStep }) => {
  const [phoneCode, setPhoneCode] = React.useState<number | string>('');
  const changeHandlerCode = (value: number) => {
    setPhoneCode(value);
  };

  const [phone, setPhone] = React.useState<number | string>('');
  const changeHandlerPhone = (value: number) => {
    setPhone(value);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('phoneCode: ', phoneCode);
    console.log('phone: ', phone);
    nextStep();
  };

  return (
    <form action='' method='post' className={styles.Phone}>
      <BaseTitle className={styles.Title}>Enter your phone number</BaseTitle>
      <BaseText className={styles.Subtitle}>
        We will send you a 6-digit verification code
      </BaseText>

      <div className={styles.Inputs}>
        <BaseSearchSelect
          name='phoneCode'
          placeholder='Country Code'
          value={phoneCode}
          onChange={changeHandlerCode}
          options={country}
          className={styles.SearchSelect}
        />

        <BaseInput
          name='phone'
          placeholder='Enter code here'
          type='text'
          required
          value={phone}
          onChange={changeHandlerPhone}
          className={styles.Input}
        />
      </div>

      <BaseButton onClick={submitFormData} className={styles.BtnLogin}>
        Confirm and continue
      </BaseButton>

      <LinkHome />
    </form>
  );
};

export default ThirdStep;
