import React from 'react';
import { BaseButton, BaseText, BaseTitle } from '@base/index';
import { LinkHome, StepBack } from '@content/index';

import Image from 'next/image';

import styles from './CompletedStep.module.scss';

interface Props {
  title: string;
  subtitle: string;
  btnText: string;
  setStep: (step: number) => void;
  prevStepCount: number;
  nextStepCount: number;
  registerCompleted?: () => void;
}

const CompletedStep: React.FC<Props> = ({
  title,
  subtitle,
  btnText,
  setStep,
  prevStepCount,
  nextStepCount,
  registerCompleted,
}) => {
  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStep(9);
    // if (registerCompleted) {
    //   registerCompleted();
    // }
    // setStep(nextStepCount);
  };

  const prevStep = () => {
    setStep(prevStepCount);
  };

  return (
    <form action="" method="post" className={styles.Completed}>
      <BaseTitle className={styles.Title}>{title}</BaseTitle>

      <div className={styles.Image}>
        <Image
          src="/images/landing/register/class.png"
          layout="fill"
          alt={'Completed images'}
        />
      </div>

      <BaseText className={styles.Subtitle}>{subtitle}</BaseText>
      <BaseButton onClick={submitFormData} className={styles.Btn}>
        {btnText}
      </BaseButton>

      <LinkHome className={styles.LinkHome} />

      {nextStepCount !== 10 && <StepBack onClick={prevStep} />}
    </form>
  );
};

export default CompletedStep;
