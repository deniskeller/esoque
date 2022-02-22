import { BaseInput, BaseSearchSelect, BaseButton } from '@base/index';
import Image from 'next/image';
import React from 'react';
import styles from './CorporateDocuments.module.scss';

interface Props {}

const options = [
  { value: 'SCOTLAND', title: 'SCOTLAND' },
  { value: 'IRELAND', title: 'IRELAND' },
  { value: 'CANADA', title: 'CANADA' },
  { value: 'CYPRUS', title: 'CYPRUS' },
];

const CorporateDocuments: React.FC<Props> = ({}) => {
  const [companyName, setCompanyName] = React.useState<string>('');
  const [option, setOption] = React.useState<string>('');

  //логика для инпута
  const changeHandlerCompanyName = (value: string) => {
    setCompanyName(value);
  };

  //логика для селекта
  const changeHandlerJuristdiction = (value: string) => {
    setOption(value);
  };

  //сабмит
  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.CorporateDocuments}>
      <p className={styles.Description}>
        Specify company, jurisdiction, choose and order documents. Hard copy or
        electronic. Fast service, clear pricing.
      </p>

      <div className={styles.ImageDesktop}>
        <Image src={`/images/landing/imgSidious2.png`} layout='fill' alt={''} />
      </div>
      <div className={styles.ImageTablet}>
        <Image
          src={`/images/landing/imgSidious2Tablet.png`}
          layout='fill'
          alt={''}
        />
      </div>
      <div className={styles.ImageMobile}>
        <Image
          src={`/images/landing/imgSidious2Mobile.png`}
          layout='fill'
          alt={''}
        />
      </div>

      <div className={styles.Widgetform}>
        <BaseInput
          name='companyName'
          placeholder='Your Company Name'
          type='text'
          value={companyName}
          onChange={changeHandlerCompanyName}
          className={styles.Input}
          error=''
        />

        <BaseSearchSelect
          placeholder='Selected Juristdiction'
          value={option}
          options={options}
          onChange={changeHandlerJuristdiction}
          className={`${styles.Select} ${styles.SelectJuristdiction}`}
        />

        <BaseButton onClick={submitFormData} className={styles.Button}>
          Request
        </BaseButton>
      </div>
    </div>
  );
};

export default CorporateDocuments;
