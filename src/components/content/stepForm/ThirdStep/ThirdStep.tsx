import React, { useState } from 'react';
import Link from 'next/link';
import {
  BaseButton,
  BaseInput,
  BaseSearchSelect,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './ThirdStep.module.scss';
import { LinkHome, StepBack } from '@content/index';
import { codes } from '@utils/codes';
import { validateFields } from '@utils/validateInputs';
import { CheckPhone } from '@store/signup/types';

interface Props {
  countryCode: string;
  phone: string;
  error: string;
  checkPhone: (phoneData: CheckPhone) => void;
  setStep: (step: number) => void;
  clearPrevInputs: () => void;
}

type Inputs = {
  [key: string]: {
    [key: string]: string;
  };
};

const ThirdStep: React.FC<Props> = ({
  phone,
  countryCode,
  error,
  checkPhone,
  setStep,
  clearPrevInputs,
}) => {
  const [inputs, setInputs] = useState<Inputs>({
    countryCode: { value: countryCode, error: '', type: 'phoneCode' },
    phone: { value: phone, error: '', type: 'number' },
  });
  const changeInputs = (name: string, value: string) => {
    const newInputs = { ...inputs };
    newInputs[name].value = value.trim();
    setInputs(newInputs);
  };

  const prevStep = () => {
    clearPrevInputs();
    setStep(1);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStep(4);
    // const { newObj, errors } = validateFields(inputs);

    // if (!errors) {
    //   const obj = {
    //     countryCode: newObj.countryCode.value,
    //     phone: newObj.phone.value,
    //   };
    //   checkPhone(obj);
    // }
    // setInputs(newObj);
  };

  return (
    <form action="" method="post" className={styles.Phone}>
      <BaseTitle className={styles.Title}>Enter your phone number</BaseTitle>
      <BaseText className={styles.Subtitle}>
        We will send you a 6-digit verification code
      </BaseText>

      <div className={styles.Inputs}>
        <BaseSearchSelect
          name="countryCode"
          placeholder="Country Code"
          value={inputs.countryCode.value}
          error={inputs.countryCode.error || error}
          onChange={(code: string) => changeInputs('countryCode', code)}
          options={codes}
          className={styles.SearchSelect}
        />

        <BaseInput
          name="phone"
          placeholder="Enter number"
          type="text"
          required
          value={inputs.phone.value}
          error={inputs.phone.error || error}
          onChange={(value: string) => changeInputs('phone', value)}
          className={styles.Input}
        />
      </div>

      <BaseButton onClick={submitFormData} className={styles.BtnLogin}>
        Confirm and continue
      </BaseButton>

      <LinkHome className={styles.LinkHome} />

      <StepBack onClick={prevStep} />
    </form>
  );
};

export default ThirdStep;
