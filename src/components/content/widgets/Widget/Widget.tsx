import { BaseInput, BaseSelect, BaseButton, BaseCheckbox } from '@base/index';
import React from 'react';
import styles from './Widget.module.scss';

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

const Widget: React.FC<Props> = ({}) => {
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

  //логика чекбокса
  const [checkboxValue, setCheckboxValue] = React.useState<boolean>(true);
  const changeHandlerCheckbox = (value: boolean) => {
    setCheckboxValue(value);
  };

  //сабмит
  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    console.log('checkboxValue: ', checkboxValue);
  }, [checkboxValue]);

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
        <BaseCheckbox
          onClick={changeHandlerCheckbox}
          checkboxValue={checkboxValue}
        >
          Show only ready-made companies
        </BaseCheckbox>
      </div>
    </>
  );
};

export default Widget;
