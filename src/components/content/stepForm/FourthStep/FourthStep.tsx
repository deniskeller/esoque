import React, { useState } from "react";
import { BaseButton, BaseInput, BaseText, BaseTitle } from "@base/index";
import styles from "./FourthStep.module.scss";
import { LinkHome, StepBack } from "@content/index";
import { validateFields } from "@utils/validateInputs";
import { CheckVerifyPhoneCode } from "@store/signup/types";

interface Props {
  phoneData: {
    countryCode: string;
    phone: string;
  };
  code: string;
  error: string;
  validatePhoneCode: (value: CheckVerifyPhoneCode) => void;
  setStep: (step: number) => void;
}
type Inputs = {
  [key: string]: {
    [key: string]: string;
  };
};

const FourthStep: React.FC<Props> = ({
  phoneData,
  error,
  code,
  setStep,
  validatePhoneCode,
}) => {
  const [inputs, setInputs] = useState<Inputs>({
    code: { value: code, error: "", type: "number" },
  });
  const { countryCode, phone } = phoneData;

  const normalizeFormat = `${countryCode}${phone}`;
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
      const obj = {
        phone: normalizeFormat,
        value: newObj.code.value,
      };
      validatePhoneCode(obj);
    }
    setInputs(newObj);
  };

  const prevStep = () => {
    setStep(3);
  };
  return (
    <form action="" method="post" className={styles.ConfirmPhone}>
      <BaseTitle className={styles.Title}>Confirm your phone number</BaseTitle>
      <BaseText className={styles.Subtitle}>
        {`We've sent a verification code to ${normalizeFormat}`}
        {/* We&apos;ve sent a verification code to */}
      </BaseText>

      <BaseInput
        label=""
        name="confirmPhone"
        placeholder="Enter verification code here"
        type="text"
        required
        value={inputs.code.value}
        error={inputs.code.error || error}
        onChange={(value: string) => changeInputs("code", value)}
        className={styles.Input}
      />

      <BaseButton onClick={submitFormData} className={styles.BtnLogin}>
        Confirm and continue
      </BaseButton>

      <LinkHome className={styles.LinkHome} />

      <StepBack onClick={prevStep} />
    </form>
  );
};

export default FourthStep;
