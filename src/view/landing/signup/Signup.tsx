import React from 'react';
import { BaseContainer } from '@base/index';
import styles from './Signup.module.scss';
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
} from '@content/index';

interface Props {}

const Signup: React.FC<Props> = () => {
  const [step, setStep] = React.useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const registerCompleted = () => {
    alert('Регистрация завершена!');
  };

  switch (step) {
    case 1:
      return (
        <BaseContainer>
          <FirstStep nextStep={nextStep} />
        </BaseContainer>
      );
    case 2:
      return <SecondStep nextStep={nextStep} />;

    case 3:
      return (
        <BaseContainer>
          <ThirdStep nextStep={nextStep} />
        </BaseContainer>
      );

    case 4:
      return (
        <BaseContainer>
          <FourthStep nextStep={nextStep} />
        </BaseContainer>
      );

    case 5:
      return <FifthStep nextStep={nextStep} />;

    case 6:
      return (
        <BaseContainer>
          <SixthStep nextStep={nextStep} />
        </BaseContainer>
      );
    case 7:
      return (
        <BaseContainer>
          <SeventhStep nextStep={nextStep} />
        </BaseContainer>
      );
    case 8:
      return (
        <BaseContainer>
          <CompletedStep
            title='You have completed your personal profile'
            subtitle='Now let’s set up your business!'
            btnText='Continue'
            nextStep={nextStep}
          />
        </BaseContainer>
      );
    case 9:
      return (
        <BaseContainer>
          <NinthStep nextStep={nextStep} />
        </BaseContainer>
      );
    case 10:
      return (
        <BaseContainer>
          <CompletedStep
            title='You have registered your business'
            subtitle='You can now start using Esoque'
            btnText='Continue to Login'
            nextStep={registerCompleted}
          />
        </BaseContainer>
      );

    default:
      return null;
  }
};

export default Signup;
