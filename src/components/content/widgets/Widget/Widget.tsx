import {
  BaseInput,
  BaseSelect,
  BaseButton,
  BaseIcon,
  BaseCheckbox,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import useOnClickOutside from '@hooks/useOnClickOutside';
import React from 'react';
import styles from './Widget.module.scss';

interface Props {}

interface ISelectItem {
  title: string;
}

const options = [
  { title: 'SCOTLAND' },
  { title: 'IRELAND' },
  { title: 'CANADA' },
  { title: 'CYPRUS' },
];

const Widget: React.FC<Props> = ({}) => {
  //логика для инпута
  const [companyName, setCompanyName] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');
  const [option, setOption] = React.useState<string>('');

  const changeHandlerCompanyName = (value: string) => {
    setCompanyName(value);
  };

  //логика для селекта
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('');
  const selectContainerRef = React.useRef(null);
  const clickOutsideHandler = () => setIsOpen(false);
  useOnClickOutside(selectContainerRef, clickOutsideHandler);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    setOption(value);
  };

  // const changeHandlerJuristdiction = (value: string) => {
  //   console.log('gender: ', value);
  //   setCompanyName(value);
  // };

  //сабмит
  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  //логика чекбокса
  const [checkboxValue, setCheckboxValue] = React.useState<boolean>(true);
  const changeHandlerCheckbox = (value: boolean) => {
    setCheckboxValue(value);
  };

  React.useEffect(() => {
    console.log('checkboxValue: ', checkboxValue);
  }, [checkboxValue]);

  return (
    <>
      <div className={styles.Widget}>
        <div className={styles.Widgetform}>
          {/* <BaseInput
        name='companyName'
        placeholder='Your Company Name'
        type='text'
        value={companyName}
        onChange={changeHandlerCompanyName}
        className={styles.Input}
      />

      <BaseSelect
        placeholder='Selected Juristdiction'
        options={juristdiction}
        onChange={changeHandlerJuristdiction}
        className={`${styles.Input} ${styles.SelectJuristdiction}`}
      />

      <BaseButton onClick={submitFormData} className={styles.Btn}>
        Check
      </BaseButton> */}

          <div className={styles.BaseInput}>
            <input
              value={companyName}
              type='text'
              className={`${styles.Input} ${error ? styles.Error : ''}`}
              name='companyName'
              placeholder='Your Company Name'
              required={true}
              autoComplete='true'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                changeHandlerCompanyName(e.target.value)
              }
            />
            {error ? <div className={styles.ErrorText}>{error}</div> : ''}
          </div>

          <div className={styles.SelectContainer} ref={selectContainerRef}>
            <div
              className={`${styles.SelectHeader}  ${
                isOpen ? styles.SelectHeaderFocus : ''
              }`}
              onClick={toggling}
            >
              <span className={`${selectedOption ? styles.NotEmpty : ''}`}>
                {selectedOption || 'Selected Juristdiction'}
              </span>
              <BaseIcon
                icon={ALL_ICONS.SELECT_ARROW}
                viewBox='0 0 16 16'
                className={`${styles.IconArrow} ${styles.IconArrowTop}`}
              />
              <BaseIcon
                icon={ALL_ICONS.SELECT_ARROW}
                viewBox='0 0 16 16'
                className={`${styles.IconArrow} ${styles.IconArrowBottom}`}
              />
            </div>
            {isOpen && (
              <ul className={styles.SelectList}>
                {options.map((option: ISelectItem) => (
                  <li
                    className={styles.ListItem}
                    onClick={onOptionClicked(option.title)}
                    key={Math.random()}
                  >
                    <span className={styles.ListItemTitle}>{option.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.BaseButton}>
            <button
              disabled={false}
              className={styles.Button}
              onClick={submitFormData}
            >
              Check
            </button>
          </div>
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
