import React from 'react';
import Link from 'next/link';
import {
  BaseButton,
  BaseContainer,
  BaseInput,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './Login.module.scss';
import { LinkHome } from '@content/index';

import { useRouter } from 'next/router';

interface Props {}

const Login: React.FC<Props> = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const changeHandlerEmail = (value: string) => {
    setEmail(value);
  };

  const changeHandlerPassword = (e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') setPassword((s) => s.slice(0, -1));
    if (e.key.length === 1) setPassword((s) => s + e.key);
  };

  React.useEffect(() => {
    console.log('password: ', password);
  }, [password]);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log('data: ', data);
    setEmail('');
    setPassword('');

    router.push('/app/');
  };

  return (
    <BaseContainer>
      <form action='' method='post' className={styles.Login}>
        <BaseTitle className={styles.Title}>Sign in to Esoque</BaseTitle>
        <BaseText className={styles.Subtitle}>
          It is great to see you back! Please log in.
        </BaseText>

        <BaseInput
          value={email}
          name='email'
          onChange={changeHandlerEmail}
          placeholder='Email'
          type='text'
          required
          className={styles.Input}
        />

        <BaseInput
          value={password.replace(/[^*]/g, '*')}
          onChange={() => {}}
          name='password'
          placeholder='Password'
          type='text'
          required
          className={styles.Input}
          onKeyDown={changeHandlerPassword}
        />

        <div className={styles.Navbar}>
          <Link href={'/reset'}>
            <a className={styles.Link}>Password Reset</a>
          </Link>
          <Link href={'/signup'}>
            <a className={styles.Link}>Create New Account</a>
          </Link>
        </div>

        <BaseButton onClick={submitHandler} className={styles.BtnLogin}>
          Log in
        </BaseButton>

        <LinkHome />
      </form>
    </BaseContainer>
  );
};

export default Login;
