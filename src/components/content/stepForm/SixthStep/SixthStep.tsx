import React from 'react';
import {
  BaseButton,
  BaseInput,
  BaseSelect,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './SixthStep.module.scss';
import { LinkHome } from '@content/index';

interface Props {
  nextStep: () => void;
}

const genders = [
  { value: 'Mr', title: 'Mr' },
  { value: 'Mrs', title: 'Mrs' },
];

const SixthStep: React.FC<Props> = ({ nextStep }) => {
  const [gender, setGender] = React.useState<string>('');
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [data, setData] = React.useState<string>('');

  const changeHandlerGender = (value: string) => {
    console.log('gender: ', value);
    setGender(value);
  };

  const changeHandlerFirstName = (value: string) => {
    console.log('firstName: ', value);
    setFirstName(value);
  };

  const changeHandlerLastName = (value: string) => {
    console.log('lastName: ', value);
    setLastName(value);
  };
  const changeHandlerData = (value: string) => {
    console.log('data: ', value);
    setData(value);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form action='' method='post' className={styles.PersonalData}>
      <BaseTitle className={styles.Title}>Enter personal data</BaseTitle>
      <BaseText className={styles.Subtitle}>
        Just a few more things to figure out
      </BaseText>

      <div className={styles.Inputs}>
        <BaseSelect
          placeholder='Title'
          options={genders}
          onChange={changeHandlerGender}
          className={`${styles.Input} ${styles.SelectGender}`}
        />

        <BaseInput
          label=''
          name='firstName'
          placeholder='First Name'
          type='text'
          required
          value={firstName}
          onChange={changeHandlerFirstName}
          className={`${styles.Input} ${styles.FirstName}`}
          error=''
        />

        <BaseInput
          name='lastName'
          placeholder='Last Name'
          type='text'
          required
          value={lastName}
          onChange={changeHandlerLastName}
          className={`${styles.Input} ${styles.LastName}`}
        />

        <BaseInput
          name='data'
          placeholder='DD/MM/YYYY'
          type='text'
          required
          value={data}
          onChange={changeHandlerData}
          className={`${styles.Input} ${styles.Data}`}
        />
      </div>

      <BaseButton onClick={submitFormData} className={styles.Btn}>
        Confirm and continue
      </BaseButton>

      <LinkHome />
    </form>
  );
};

export default SixthStep;
