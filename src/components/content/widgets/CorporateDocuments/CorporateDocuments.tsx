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
          options={options}
          onChange={changeHandlerJuristdiction}
          className={`${styles.Select} ${styles.SelectJuristdiction}`}
        />

        <BaseButton onClick={submitFormData} className={styles.Button}>
          Request
        </BaseButton>
      </div>

      <div className={styles.WidgetContent}>
        {/* Вариант когда по введеной компании не принимаются запросы */}
        <div className={styles.NotAccepting}>
          <div className={styles.NotAcceptingMessage}>
            <p>
              Currently we are not accepting online orders for&nbsp;
              <span>USA (New York)</span>. Still, you may send the Request and
              we will process it manually. Please, specify which information
              about the company you wish to receive.
            </p>
          </div>
          <BaseButton className={styles.NotAcceptingBtn}>Request</BaseButton>
        </div>

        {/* Вариант когда много компаний с подобным названием */}
        <div className={styles.ManyOptions}>
          <p>
            There are too many companies’ names with <span>diamond</span>.
            <br /> Please be more specific with your company’s name.
          </p>
        </div>

        {/* Вариант с несуществующим именем */}
        <div className={styles.NonExistentName}>
          <p>
            The name <span>diamond1</span> was not found. It is possible, that
            you entered non-existing name or online service is experiencing
            technical troubles. You may send the Request anyway and we will
            process it manually.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorporateDocuments;
