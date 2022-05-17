import React, { useState, useEffect } from "react";

import {
  BaseButton,
  BaseContainer,
  BaseInput,
  BaseText,
  BaseTitle,
} from "@base/index";
import styles from "./SecondStep.module.scss";
import { LinkHome, StepBack } from "@content/index";
import { validateEmailCode, validateFields } from "@utils/validateInputs";

interface Props {
  email: string;
  error: string;
  code: string;
  verifyEmailCode: (code: string) => void;
  setStep: (step: number) => void;
}
type Inputs = {
  [key: string]: {
    [key: string]: string;
  };
};

const SecondStep: React.FC<Props> = ({
  email,
  code,
  error,
  setStep,
  verifyEmailCode,
}) => {
  const [inputs, setInputs] = useState<Inputs>({
    code: { value: code, error: "", type: "number" },
  });

  const changeInputs = (name: string, value: string) => {
    const newInputs = { ...inputs };
    newInputs[name].value = value.trim();
    setInputs(newInputs);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (inputs.code.value.length !== 6) {
      const newObj = { ...inputs };
      newObj.code.error = "Code length 6 symbols";
      setInputs(newObj);
      return;
    }

    const { newObj, errors } = validateFields(inputs);
    if (!errors) {
      verifyEmailCode(newObj.code.value);
    }
    setInputs(newObj);
  };

  const prevStep = () => {
    setStep(1);
  };

  return (
    <form action="" method="post" className={styles.ConfrimEmail}>
      <BaseTitle className={styles.Title}>Confirm your email</BaseTitle>
      <BaseText className={styles.Subtitle}>
        We&apos;ve sent a confirmation code to {email}
      </BaseText>

      <BaseInput
        // label='Email'
        error={inputs.code.error || error}
        value={inputs.code.value}
        name="email"
        onChange={(value: string) => changeInputs("code", value)}
        placeholder="Enter verification code here"
        type="text"
        required
        className={styles.Input}
      />

      <BaseButton onClick={submitFormData} className={styles.BtnLogin}>
        Confirm
      </BaseButton>

      <LinkHome className={styles.LinkHome} />

      <StepBack onClick={prevStep} />
    </form>
  );
};

export default SecondStep;
