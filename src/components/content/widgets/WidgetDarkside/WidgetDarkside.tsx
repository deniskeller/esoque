import { BaseInput, BaseSelect, BaseButton } from '@base/index';
import React from 'react';
import styles from './WidgetDarkside.module.scss';

interface Props {}

interface ISelectItem {
  title: string;
}

const options = [
  { value: 'SCOTLAND', title: 'SCOTLAND' },
  { value: 'SCOTLAND', title: 'IRELAND' },
  { value: 'SCOTLAND', title: 'CANADA' },
  { value: 'SCOTLAND', title: 'CYPRUS' },
];

const WidgetDarkside: React.FC<Props> = ({}) => {
  const [companyName, setCompanyName] = React.useState<string>('');
  const [option, setOption] = React.useState<string>('');

  //логика для инпута
  const changeHandlerCompanyName = (value: string) => {
    setCompanyName(value);
  };

  //логика для селекта
  const changeHandlerJuristdiction = (value: string) => {
    console.log('gender: ', value);
    setOption(value);
  };

  //сабмит
  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.Widget}>
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

          <BaseSelect
            placeholder='Selected Juristdiction'
            options={options}
            onChange={changeHandlerJuristdiction}
            className={`${styles.Select} ${styles.SelectJuristdiction}`}
          />

          <BaseButton onClick={submitFormData} className={styles.Button}>
            Check
          </BaseButton>
        </div>
      </div>
    </>
  );
};

export default WidgetDarkside;
