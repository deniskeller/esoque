import React from 'react';
import Link from 'next/link';
import {
  BaseButton,
  BaseContainer,
  BaseInput,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './Reset.module.scss';

interface Props {}

const Reset: React.FC<Props> = () => {
  const [email, setEmail] = React.useState('');

  const changeHandlerEmail = (value: string) => {
    setEmail(value);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      email: email,
    };
    console.log('data: ', data);
    setEmail('');
  };

  return (
    <BaseContainer>
      <form action='' method='post' className={styles.Login}>
        <BaseTitle className={styles.Title}>Enter your email</BaseTitle>
        <BaseText className={styles.Subtitle}>
          You will receive recovery instructions shortly.
        </BaseText>

        <BaseInput
          // label='Email'
          value={email}
          name='email'
          onChange={changeHandlerEmail}
          placeholder='Email'
          type='text'
          required
          className={styles.Input}
        />

        <BaseButton onClick={submitHandler} className={styles.BtnLogin}>
          Reset password
        </BaseButton>

        <Link href={'/'}>
          <a className={`${styles.Link} ${styles.LinkToHome}`}>Home</a>
        </Link>
      </form>
    </BaseContainer>
  );
};

export default Reset;
