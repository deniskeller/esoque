import React from 'react';
import { BaseContainer } from '@base/index';
import styles from './Signup.module.scss';
import { FirstStep, FourthStep, SecondStep, ThirdStep } from '@content/index';

interface Props {}

const Signup: React.FC<Props> = () => {
  const [step, setStep] = React.useState(3);

  const nextStep = () => {
    setStep(step + 1);
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

    default:
      return null;
  }
};

export default Signup;
