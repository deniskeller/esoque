import React from 'react';
import {
  BaseButton,
  BaseInput,
  BaseSearchSelect,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './SeventhStep.module.scss';
import { LinkHome } from '@content/index';

interface Props {
  nextStep: () => void;
}

const mockCountryData = [
  { title: 'United Kingdom1' },
  { title: 'United Kingdom2' },
  { title: 'United Kingdom3' },
  { title: 'United Kingdom4' },
  { title: 'United Kingdom5' },
  { title: 'United Kingdom6' },
  { title: 'United Kingdom7' },
  { title: 'United Kingdom8' },
];

const SeventhStep: React.FC<Props> = ({ nextStep }) => {
  const [country, setCountry] = React.useState('');
  const [postcode, setPostcode] = React.useState('');

  const [city, setCity] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [addressTwo, setAddressTwo] = React.useState('');

  const changeHandlerCountry = (value: string) => {
    console.log('country: ', value);
    setCountry(value);
  };

  const changeHandlerPostcode = (value: string) => {
    console.log('postcode: ', value);
    setPostcode(value);
  };

  const changeHandlerCity = (value: string) => {
    console.log('city: ', value);
    setCity(value);
  };

  const changeHandlerAddress = (value: string) => {
    console.log('address: ', value);
    setAddress(value);
  };

  const changeHandlerAddressTwo = (value: string) => {
    console.log('addressTwo: ', value);
    setAddressTwo(value);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form action='' method='post' className={styles.PersonalAddress}>
      <BaseTitle className={styles.Title}>Enter personal address</BaseTitle>
      <BaseText className={styles.Subtitle}>
        This will complete your personal profile
      </BaseText>
      <ul className={styles.Ul}>
        <li className={styles.Li}>
          <BaseSearchSelect
            name='country'
            placeholder='Country'
            value={country}
            onChange={changeHandlerCountry}
            options={mockCountryData}
            className={`${styles.Input} ${styles.Country}`}
          />

          <BaseInput
            name='postcode'
            placeholder='Postcode'
            type='text'
            required
            value={postcode}
            onChange={changeHandlerPostcode}
            className={`${styles.Input} ${styles.Postcode}`}
          />

          <BaseInput
            name='city'
            placeholder='City'
            type='text'
            required
            value={city}
            onChange={changeHandlerCity}
            className={`${styles.Input} ${styles.City}`}
          />
        </li>
        <li className={styles.Li}>
          <BaseInput
            name='address'
            placeholder='Address line'
            type='text'
            required
            value={address}
            onChange={changeHandlerAddress}
            className={`${styles.Input} ${styles.Address}`}
          />
          <BaseInput
            name='addressTwo'
            placeholder='Address line 2 (optional)'
            type='text'
            required
            value={addressTwo}
            onChange={changeHandlerAddressTwo}
            className={`${styles.Input} ${styles.AddressTwo}`}
          />
        </li>
      </ul>

      <BaseButton onClick={submitFormData} className={styles.Btn}>
        Confirm and continue
      </BaseButton>

      <LinkHome />
    </form>
  );
};

export default SeventhStep;
