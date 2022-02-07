import React from 'react';
import { BaseButton, BaseText, BaseTitle } from '@base/index';
import styles from './CompletedStep.module.scss';
import { LinkHome } from '@content/index';
import Image from 'next/image';

interface Props {
  nextStep?: () => void;
  title: string;
  subtitle: string;
  btnText: string;
}

const CompletedStep: React.FC<Props> = ({
  nextStep,
  title,
  subtitle,
  btnText,
}) => {
  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    nextStep!();
  };

  return (
    <form action='' method='post' className={styles.Completed}>
      <BaseTitle className={styles.Title}>{title}</BaseTitle>

      <div className={styles.Image}>
        <Image
          src='/images/landing/class.png'
          layout='fill'
          alt={'Completed images'}
        />
      </div>

      <BaseText className={styles.Subtitle}>{subtitle}</BaseText>
      <BaseButton onClick={submitFormData} className={styles.Btn}>
        {btnText}
      </BaseButton>

      <LinkHome />
    </form>
  );
};

export default CompletedStep;
