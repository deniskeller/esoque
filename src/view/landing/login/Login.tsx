import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BaseButton,
  BaseContainer,
  BaseInput,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './Login.module.scss';

interface Props {}

const Login: React.FC<Props> = () => {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const changeHandlerName = (value: string) => {
    setName(value);
  };
  const changeHandlerPassword = (value: string) => {
    const starText = Array(value.length).fill('*').join('');
    setPassword(starText);
  };

  const goToLogin = () => {
    router.push('/login');
  };

  return (
    <BaseContainer>
      <div className={styles.Login}>
        <BaseTitle className={styles.Title}>Sign in to Esoque</BaseTitle>
        <BaseText className={styles.Subtitle}>
          It is great to see you back! Please log in.
        </BaseText>

        <BaseInput
          // label='Email'
          value={name}
          name='name'
          onChange={changeHandlerName}
          placeholder='Email'
          type='text'
          required
          className={styles.Input}
        />

        <BaseInput
          // label='password'
          value={password}
          name='password'
          onChange={changeHandlerPassword}
          placeholder='Password'
          type='password'
          required
          className={styles.Input}
        />

        <div className={styles.Navbar}>
          <Link href={'/reset'}>
            <a className={styles.Link}>Password Reset</a>
          </Link>
          <Link href={'/signup'}>
            <a className={styles.Link}>Create New Account</a>
          </Link>
        </div>

        <BaseButton onClick={goToLogin} className={styles.BtnLogin}>
          Log in
        </BaseButton>

        <Link href={'/'}>
          <a className={`${styles.Link} ${styles.LinkToHome}`}>Home</a>
        </Link>
      </div>
    </BaseContainer>
  );
};

export default Login;
