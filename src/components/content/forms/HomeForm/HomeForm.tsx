import { BaseInput, BaseButton, BaseSelect } from '@base/index';
import SelectInput from '@content/other/SelectInputHomeForm/SelectInput';
import { validateEmail } from '@utils/validateInputs';
import React from 'react';

import styles from './HomeForm.module.scss';

const mockData = [
  { value: 'option1', title: 'option one' },
  { value: 'option1', title: 'option one' },
  { value: 'option1', title: 'option one' },
  { value: 'option1', title: 'option one' },
  { value: 'option1', title: 'option one' },
  { value: 'option1', title: 'option one' },
];

type TInputs = {
  [key: string]: { [key: string]: string };
};

const HomeForm = () => {
  const [country, setCountry] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [emailErr, setEmailErr] = React.useState<boolean>(false);
  const [proceed, setProceed] = React.useState<boolean>(false);

  const [] = React.useState<string>('');

  const [inputs, setInputs] = React.useState<TInputs>({
    firstName: { value: '', error: '', type: 'string' },
    // phone: { value: "", error: "", type: "string" },
    // phoneCode: { value: "", error: "", type: "phoneCode" },
  });

  const changeInputs = (name: string, value: string) => {
    const newInputs = { ...inputs };
    newInputs[name].value = value;
    newInputs[name].error = '';
    setInputs(newInputs);
  };

  const handlerSubmit = () => {
    setProceed(true);
  };

  React.useEffect(() => {
    if (email.length)
      if (validateEmail(email)) {
        setEmailErr(false);
      } else {
        setEmailErr(true);
      }
  }, [email]);

  return (
    <div
      className={`${styles.wrapper} ${proceed ? styles.wrapperProceed : ''}`}
    >
      {!proceed ? (
        <>
          <div className={styles.titleText}>
            Start your business right now and become <span>a new Unicorn!</span>
          </div>
          {/* <SelectInput
            className={styles.inputSelect}
            placeholder="Choose your country"
            options={mockData}
            onChange={(e) => e}
          /> */}

          <BaseSelect
            className={styles.Select}
            placeholder="Choose your country"
            options={mockData}
            onChange={(e) => e}
          />
          <BaseInput
            className={styles.input}
            value={inputs.firstName.value}
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={(value: string) => changeInputs('firstName', value)}
          />
          <BaseInput
            className={styles.input}
            value={email}
            error={emailErr}
            name="email"
            type="text"
            placeholder="Give us your email"
            onChange={(value: string) => setEmail(value)}
          />
          <BaseInput
            className={styles.input}
            value={''}
            name="phone"
            type="text"
            placeholder="Maybe a phone number?"
            onChange={(value) => console.log(value)}
          />
          <div className={styles.bottomText}>and we will be back shortly!</div>
          <BaseButton
            className={styles.btn}
            type="default"
            onClick={handlerSubmit}
          >
            Proceed
          </BaseButton>
        </>
      ) : (
        <>
          <div className={styles.Subscription}>
            <p>
              Congratulations! <br /> You have successfully <br /> subscribed to
              updates.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeForm;
