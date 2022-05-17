import React, { useState } from "react";
import {
  BaseButton,
  BaseInput,
  BaseSearchSelect,
  BaseText,
  BaseTitle,
} from "@base/index";
import styles from "./NinthStep.module.scss";
import { LinkHome, StepBack } from "@content/index";
import { SetBusinessData } from "@store/signup/types";
import { dateMask, validateFields } from "@utils/validateInputs";

interface Props {
  country: string;
  legalName: string;
  registNumber: string;
  date: string;
  businessType: string;
  legalNameError: string;
  registNumberError: string;
  saveBusiness: (obj: SetBusinessData) => void;
  setStep: (step: number) => void;
}

type Inputs = {
  [key: string]: {
    [key: string]: string;
  };
};

const mockCountry = [
  { title: "America" },
  { title: "Canada" },
  { title: "Cyprus" },
  { title: "Russia" },
];

const mockBusinessType = [
  { title: "Trade" },
  { title: "Services" },
  { title: "Production" },
];

const NinthStep: React.FC<Props> = ({
  country,
  legalName,
  registNumber,
  date,
  businessType,
  legalNameError,
  registNumberError,
  saveBusiness,
  setStep,
}) => {
  const [inputs, setInputs] = useState<Inputs>({
    country: { value: country, error: "", type: "string" },
    legalName: { value: legalName, error: "", type: "string" },
    registNumber: { value: registNumber, error: "", type: "string" },
    IncorporationDate: { value: date, error: "", type: "string" },
    businessType: { value: businessType, error: "", type: "string" },
  });

  const changeInputs = (name: string, value: string) => {
    const newInputs = { ...inputs };
    newInputs[name].value = value;
    setInputs(newInputs);
  };

  const changeHandlerData = (value: string) => {
    const currentDate = dateMask(value);
    changeInputs("IncorporationDate", currentDate);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { newObj, errors } = validateFields(inputs);
    if (!errors) {
      const obj = {
        country: newObj.country.value,
        legalName: newObj.legalName.value,
        registNumber: newObj.registNumber.value,
        date: newObj.IncorporationDate.value,
        businessType: newObj.businessType.value,
        legalNameError: "",
        registNumberError: "",
      };
      saveBusiness(obj);
    }
    setInputs(newObj);
  };

  const prevStep = () => {
    setStep(8);
  };

  return (
    <form action="" method="post" className={styles.PersonalAddress}>
      <BaseTitle className={styles.Title}>Sign up your business</BaseTitle>
      <BaseText className={styles.Subtitle}>And start using Esoque</BaseText>
      <ul className={styles.Ul}>
        <li className={styles.Li}>
          <BaseSearchSelect
            name="country"
            placeholder="Country of Incorporation"
            value={inputs.country.value}
            error={inputs.country.error}
            onChange={(value: string) => changeInputs("country", value)}
            options={mockCountry}
            className={`${styles.Input} ${styles.Country}`}
          />

          <BaseInput
            name="legalName"
            placeholder="Legal Name"
            type="text"
            required
            value={inputs.legalName.value}
            error={inputs.legalName.error || legalNameError}
            onChange={(value: string) => changeInputs("legalName", value)}
            className={`${styles.Input} ${styles.LegalName}`}
          />
        </li>
        <li className={styles.Li}>
          <BaseInput
            name="registNumber"
            placeholder="Registration Number"
            type="text"
            required
            value={inputs.registNumber.value}
            error={inputs.registNumber.error || registNumberError}
            onChange={(value: string) => changeInputs("registNumber", value)}
            className={`${styles.Input} ${styles.RegistNumber}`}
          />

          <BaseInput
            name="IncorporationDate"
            placeholder="Incorporation Date"
            type="text"
            required
            value={inputs.IncorporationDate.value}
            error={inputs.IncorporationDate.error}
            onChange={changeHandlerData}
            className={`${styles.Input} ${styles.Date}`}
          />

          <BaseSearchSelect
            name="businessType"
            placeholder="Business Type"
            value={inputs.businessType.value}
            error={inputs.businessType.error}
            onChange={(value: string) => changeInputs("businessType", value)}
            options={mockBusinessType}
            className={`${styles.Input} ${styles.BusinessType}`}
          />
        </li>
      </ul>

      <BaseButton onClick={submitFormData} className={styles.Btn}>
        Register Business
      </BaseButton>

      <LinkHome className={styles.LinkHome} />

      <StepBack onClick={prevStep} />
    </form>
  );
};

export default NinthStep;
