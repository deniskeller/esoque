import React, { useState } from 'react';
import {
  BaseButton,
  BaseInput,
  BaseSelect,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './SixthStep.module.scss';
import { LinkHome, StepBack } from '@content/index';
import { dateMask, validateFields } from '@utils/validateInputs';
import { SetPersonalData } from '@store/signup/types';
import { titles } from '@utils/titles';

interface Props {
  title: string;
  firstName: string;
  lastName: string;
  birthday: string;
  setStep: (step: number) => void;
  savePersonalDate: (obj: SetPersonalData) => void;
}

type Inputs = {
  [key: string]: {
    [key: string]: string;
  };
};

const SixthStep: React.FC<Props> = ({
  title,
  firstName,
  lastName,
  birthday,
  setStep,
  savePersonalDate,
}) => {
  const [inputs, setInputs] = useState<Inputs>({
    title: { value: title, error: '', type: 'string' },
    firstName: { value: firstName, error: '', type: 'string' },
    lastName: { value: lastName, error: '', type: 'string' },
    birthday: { value: birthday, error: '', type: 'string' },
  });

  const changeInputs = (name: string, value: string) => {
    const newInputs = { ...inputs };
    newInputs[name].value = value;
    setInputs(newInputs);
  };

  const changeHandlerData = (value: string) => {
    const currentDate = dateMask(value);
    changeInputs('birthday', currentDate);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStep(7);

    // const { newObj, errors } = validateFields(inputs);

    // if (!errors) {
    //   const obj = {
    //     title: newObj.title.value,
    //     firstName: newObj.firstName.value,
    //     lastName: newObj.lastName.value,
    //     birthday: newObj.birthday.value,
    //   };
    //   savePersonalDate(obj);
    // }

    // setInputs(newObj);
  };

  const prevStep = () => {
    setStep(5);
  };

  return (
    <form action="" method="post" className={styles.PersonalData}>
      <BaseTitle className={styles.Title}>Enter personal data</BaseTitle>
      <BaseText className={styles.Subtitle}>
        Just a few more things to figure out
      </BaseText>

      <div className={styles.Inputs}>
        <BaseSelect
          error={inputs.title.error}
          placeholder="Title"
          options={titles}
          onChange={(value: string) => changeInputs('title', value)}
          className={`${styles.Input} ${styles.SelectGender}`}
        />

        <BaseInput
          name="firstName"
          placeholder="First Name"
          error={inputs.firstName.error}
          type="text"
          required
          value={inputs.firstName.value}
          onChange={(value: string) => changeInputs('firstName', value)}
          className={`${styles.Input} ${styles.FirstName}`}
        />

        <BaseInput
          name="lastName"
          placeholder="Last Name"
          error={inputs.lastName.error}
          type="text"
          required
          value={inputs.lastName.value}
          onChange={(value: string) => changeInputs('lastName', value)}
          className={`${styles.Input} ${styles.LastName}`}
        />

        <BaseInput
          name="data"
          placeholder="DD/MM/YYYY"
          type="text"
          error={inputs.birthday.error}
          required
          value={inputs.birthday.value}
          onChange={changeHandlerData}
          className={`${styles.Input} ${styles.Data}`}
        />
      </div>

      <BaseButton onClick={submitFormData} className={styles.Btn}>
        Confirm and continue
      </BaseButton>

      <LinkHome className={styles.LinkHome} />

      <StepBack onClick={prevStep} />
    </form>
  );
};

export default SixthStep;
