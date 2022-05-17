import React from "react";
import { useRouter } from "next/router";
import { BaseContainer } from "@base/index";
import {
  CompletedStep,
  FifthStep,
  FirstStep,
  FourthStep,
  NinthStep,
  SecondStep,
  SeventhStep,
  SixthStep,
  ThirdStep,
} from "@content/index";

import { useDispatch, useSelector } from "react-redux";
import { actions as actionsSignup } from "@store/signup/reducer";

import { EsoqueState } from "@store/store";
import {
  CheckPhone,
  CheckVerifyPhoneCode,
  SetBusinessData,
  SetPersonalData,
  SetPesonalAddress,
} from "@store/signup/types";

import styles from "./Signup.module.scss";

const signupState = (state: EsoqueState) => {
  return {
    email: state.signup.email,
    step: state.signup.step,
    emailCode: state.signup.emailCode,
    phone: state.signup.phone,
    password: state.signup.password,
    pesonalData: state.signup.pesonalData,
    personalAddress: state.signup.personalAddress,
    bussiness: state.signup.bussiness,
    phoneCode: state.signup.phoneCode,
  };
};

interface Props {}

const Signup: React.FC<Props> = () => {
  const {
    email,
    step,
    emailCode,
    phone,
    phoneCode,
    pesonalData,
    personalAddress,
    bussiness,
  } = useSelector(signupState);

  const dispatch = useDispatch();
  const router = useRouter();

  const checkEmail = (email: string) => {
    dispatch(actionsSignup.startCheckEmail({ email }));
  };

  const verifyEmailCode = (code: string) => {
    dispatch(actionsSignup.checkEmailCode({ code }));
  };

  const savePassword = (password: string) => {
    dispatch(actionsSignup.setPassword({ password }));
  };

  const savePersonalDate = (personalData: SetPersonalData) => {
    dispatch(actionsSignup.setPesonalData(personalData));
  };

  const savePersonalAddress = (addressData: SetPesonalAddress) => {
    dispatch(actionsSignup.setPesonalAddress(addressData));
  };

  const saveBusiness = (bussinessData: SetBusinessData) => {
    dispatch(actionsSignup.startSetBusiness(bussinessData));
  };

  const checkPhone = (phoneData: CheckPhone) => {
    dispatch(actionsSignup.startCheckPhone(phoneData));
  };

  const validatePhoneCode = (validateData: CheckVerifyPhoneCode) => {
    dispatch(actionsSignup.startVerifyPhoneCode(validateData));
  };

  const setStep = (step: number) => {
    dispatch(actionsSignup.setStep({ step }));
  };

  const clearEmailCode = () => {
    dispatch(actionsSignup.clearEmailCode({ value: "", error: "" }));
  };

  const clearPhoneCode = () => {
    dispatch(actionsSignup.clearPhoneCode({ value: "", error: "" }));
  };

  const registerCompleted = () => {
    router.push("/login");
    dispatch(actionsSignup.clearState());
  };

  switch (step) {
    case 1:
      return (
        <BaseContainer>
          <FirstStep
            checkEmail={checkEmail}
            email={email.value}
            error={email.error}
          />
        </BaseContainer>
      );
    case 2:
      return (
        <BaseContainer>
          <SecondStep
            email={email.value}
            verifyEmailCode={verifyEmailCode}
            code={emailCode.value}
            error={emailCode.error}
            setStep={setStep}
          />
        </BaseContainer>
      );

    case 3:
      return (
        <BaseContainer>
          <ThirdStep
            clearPrevInputs={clearEmailCode}
            checkPhone={checkPhone}
            phone={phone.phone}
            countryCode={phone.countryCode}
            error={phone.error}
            setStep={setStep}
          />
        </BaseContainer>
      );

    case 4:
      return (
        <BaseContainer>
          <FourthStep
            error={phoneCode.error}
            code={phoneCode.value}
            phoneData={phone}
            validatePhoneCode={validatePhoneCode}
            setStep={setStep}
          />
        </BaseContainer>
      );

    case 5:
      return (
        <FifthStep
          clearPrevInputs={clearPhoneCode}
          savePassword={savePassword}
          setStep={setStep}
        />
      );

    case 6:
      return (
        <BaseContainer>
          <SixthStep
            savePersonalDate={savePersonalDate}
            title={pesonalData.title}
            firstName={pesonalData.firstName}
            lastName={pesonalData.lastName}
            birthday={pesonalData.birthday}
            setStep={setStep}
          />
        </BaseContainer>
      );
    case 7:
      return (
        <BaseContainer>
          <SeventhStep
            savePersonalAddress={savePersonalAddress}
            country={personalAddress.country}
            city={personalAddress.city}
            postcode={personalAddress.postcode}
            address={personalAddress.address}
            addressTwo={personalAddress.addressTwo}
            setStep={setStep}
          />
        </BaseContainer>
      );
    case 8:
      return (
        <BaseContainer>
          <CompletedStep
            title="You have completed your personal profile"
            subtitle="Now let’s set up your business!"
            btnText="Continue"
            setStep={setStep}
            nextStepCount={9}
            prevStepCount={7}
          />
        </BaseContainer>
      );
    case 9:
      return (
        <BaseContainer>
          <NinthStep
            country={bussiness.country}
            legalName={bussiness.legalName}
            registNumber={bussiness.registNumber}
            date={bussiness.date}
            businessType={bussiness.businessType}
            legalNameError={bussiness.legalNameError}
            registNumberError={bussiness.registNumberError}
            saveBusiness={saveBusiness}
            setStep={setStep}
          />
        </BaseContainer>
      );
    case 10:
      return (
        <BaseContainer>
          <CompletedStep
            title="You have registered your business"
            subtitle="You can now start using Esoque"
            btnText="Continue to Login"
            setStep={setStep}
            nextStepCount={10}
            prevStepCount={9}
            registerCompleted={registerCompleted}
          />
        </BaseContainer>
      );

    default:
      return null;
  }
};

export default Signup;
