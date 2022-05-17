import React, { useState } from "react";
import {
  BaseButton,
  BaseInput,
  BaseSearchSelect,
  BaseText,
  BaseTitle,
} from "@base/index";

import { LinkHome, StepBack } from "@content/index";
import { validateFields } from "@utils/validateInputs";
import { SetPesonalAddress } from "@store/signup/types";
import { countries } from "@utils/countries";

import styles from "./SeventhStep.module.scss";
interface Props {
  country: string;
  postcode: string;
  city: string;
  address: string;
  addressTwo: string;
  savePersonalAddress: (obj: SetPesonalAddress) => void;
  setStep: (step: number) => void;
}

type Inputs = {
  [key: string]: {
    [key: string]: string;
  };
};

const SeventhStep: React.FC<Props> = ({
  country,
  postcode,
  city,
  address,
  addressTwo,
  setStep,
  savePersonalAddress,
}) => {
  const [inputs, setInputs] = useState<Inputs>({
    country: { value: country, error: "", type: "string" },
    postcode: { value: postcode, error: "", type: "string" },
    city: { value: city, error: "", type: "string" },
    address: { value: address, error: "", type: "string" },
    addressTwo: { value: addressTwo, error: "", type: "string" },
  });

  const changeInputs = (name: string, value: string) => {
    const newInputs = { ...inputs };
    newInputs[name].value = value;
    setInputs(newInputs);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { newObj, errors } = validateFields(inputs);
    if (!errors) {
      const obj = {
        country: newObj.country.value,
        postcode: newObj.postcode.value,
        city: newObj.city.value,
        address: newObj.address.value,
        addressTwo: newObj.addressTwo.value,
      };
      savePersonalAddress(obj);
    }
    setInputs(newObj);
  };

  const prevStep = () => {
    setStep(6);
  };
  return (
    <form action="" method="post" className={styles.PersonalAddress}>
      <BaseTitle className={styles.Title}>Enter personal address</BaseTitle>
      <BaseText className={styles.Subtitle}>
        This will complete your personal profile
      </BaseText>
      <ul className={styles.Ul}>
        <li className={styles.Li}>
          <BaseSearchSelect
            name="country"
            placeholder="Country"
            value={inputs.country.value}
            error={inputs.country.error}
            onChange={(value: string) => changeInputs("country", value)}
            options={countries}
            className={`${styles.Input} ${styles.Country}`}
          />

          <BaseInput
            name="postcode"
            placeholder="Postcode"
            type="text"
            required
            value={inputs.postcode.value}
            error={inputs.postcode.error}
            onChange={(value: string) => changeInputs("postcode", value)}
            className={`${styles.Input} ${styles.Postcode}`}
          />

          <BaseInput
            name="city"
            placeholder="City"
            type="text"
            required
            value={inputs.city.value}
            error={inputs.city.error}
            onChange={(value: string) => changeInputs("city", value)}
            className={`${styles.Input} ${styles.City}`}
          />
        </li>
        <li className={styles.Li}>
          <BaseInput
            name="address"
            placeholder="Address line"
            type="text"
            required
            value={inputs.address.value}
            error={inputs.address.error}
            onChange={(value: string) => changeInputs("address", value)}
            className={`${styles.Input} ${styles.Address}`}
          />
          <BaseInput
            name="addressTwo"
            placeholder="Address line 2 (optional)"
            type="text"
            required
            value={inputs.addressTwo.value}
            error={inputs.addressTwo.error}
            onChange={(value: string) => changeInputs("addressTwo", value)}
            className={`${styles.Input} ${styles.AddressTwo}`}
          />
        </li>
      </ul>

      <BaseButton onClick={submitFormData} className={styles.Btn}>
        Confirm and continue
      </BaseButton>

      <LinkHome className={styles.LinkHome} />

      <StepBack onClick={prevStep} />
    </form>
  );
};

export default SeventhStep;
