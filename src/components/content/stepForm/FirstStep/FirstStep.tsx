import React from 'react';
import Link from 'next/link';
import { BaseButton, BaseInput, BaseText, BaseTitle } from '@base/index';
import styles from './FirstStep.module.scss';

interface Props {
  nextStep: () => void;
}

const FirstStep: React.FC<Props> = ({ nextStep }) => {
  const [email, setEmail] = React.useState<string>('');
  const changeHandlerPhone = (value: string) => {
    setEmail(value);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form action='' method='post' className={styles.Login}>
      <BaseTitle className={styles.Title}>Enter your email</BaseTitle>
      <BaseText className={styles.Subtitle}>
        This address will be associated with your Company’s profile.
      </BaseText>

      <BaseInput
        // label='Email'
        value={email}
        name='email'
        onChange={changeHandlerPhone}
        placeholder='Email'
        type='text'
        required
        className={styles.Input}
      />

      <BaseButton onClick={submitFormData} className={styles.BtnLogin}>
        Continue
      </BaseButton>

      <BaseText className={styles.Question}>
        Already have an account?{' '}
        <Link href={'/login'}>
          <a className={`${styles.Link} ${styles.LinkQuestion}`}>Sign in.</a>
        </Link>
      </BaseText>

      <Link href={'/'}>
        <a className={`${styles.Link} ${styles.LinkToHome}`}>Home</a>
      </Link>
    </form>
  );
};

export default FirstStep;
