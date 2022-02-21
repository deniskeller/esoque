import React from 'react';
import {
  BaseButton,
  BaseInput,
  BaseSearchSelect,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './NinthStep.module.scss';
import { LinkHome, StepBack } from '@content/index';

interface Props {
  nextStep: () => void;
}

const mockCountry = [
  { title: 'Америка' },
  { title: 'Канада' },
  { title: 'Кипр' },
  { title: 'Россия' },
  { title: 'Германия' },
  { title: 'Украина' },
  { title: 'Франция' },
];

const mockBusinessType = [
  { title: 'Торговля' },
  { title: 'Услуги' },
  { title: 'Производство' },
];

const NinthStep: React.FC<Props> = ({ nextStep }) => {
  const [country, setCountry] = React.useState('');
  const [legalName, setLegalName] = React.useState('');

  const [registNumber, setRegistNumber] = React.useState('');
  const [date, setDate] = React.useState('');
  const [businessType, setBusinessType] = React.useState('');

  const changeHandlerCountry = (value: string) => {
    console.log('country: ', value);
    setCountry(value);
  };

  const changeHandlerLegalName = (value: string) => {
    console.log('legalName: ', value);
    setLegalName(value);
  };

  const changeHandlerRegistNumber = (value: string) => {
    console.log('registNumber: ', value);
    setRegistNumber(value);
  };

  const changeHandlerDate = (value: string) => {
    console.log('date: ', value);
    setDate(value);
  };

  const changeHandlerBusinessType = (value: string) => {
    console.log('businessType: ', value);
    setBusinessType(value);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form action='' method='post' className={styles.PersonalAddress}>
      <BaseTitle className={styles.Title}>Sign up your business</BaseTitle>
      <BaseText className={styles.Subtitle}>And start using Esoque</BaseText>
      <ul className={styles.Ul}>
        <li className={styles.Li}>
          <BaseSearchSelect
            name='country'
            placeholder='Country of Incorporation'
            value={country}
            onChange={changeHandlerCountry}
            options={mockCountry}
            className={`${styles.Input} ${styles.Country}`}
          />

          <BaseInput
            name='legalName'
            placeholder='Legal Name'
            type='text'
            required
            value={legalName}
            onChange={changeHandlerLegalName}
            className={`${styles.Input} ${styles.LegalName}`}
          />
        </li>
        <li className={styles.Li}>
          <BaseInput
            name='registNumber'
            placeholder='Registration Number'
            type='text'
            required
            value={registNumber}
            onChange={changeHandlerRegistNumber}
            className={`${styles.Input} ${styles.RegistNumber}`}
          />

          <BaseInput
            name='date'
            placeholder='Incorporation Date'
            type='text'
            required
            value={date}
            onChange={changeHandlerDate}
            className={`${styles.Input} ${styles.Date}`}
          />

          <BaseSearchSelect
            name='businessType'
            placeholder='Business Type'
            value={businessType}
            onChange={changeHandlerBusinessType}
            options={mockBusinessType}
            className={`${styles.Input} ${styles.BusinessType}`}
          />
        </li>
      </ul>

      <BaseButton onClick={submitFormData} className={styles.Btn}>
        Register Business
      </BaseButton>

      <LinkHome className={styles.LinkHome} />

      <StepBack />
    </form>
  );
};

export default NinthStep;
