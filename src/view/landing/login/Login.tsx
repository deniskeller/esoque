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

interface Props {}

const Login: React.FC<Props> = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const changeHandlerEmail = (value: string) => {
    setEmail(value);
  };

  const changeHandlerPassword = (value: string) => {
    //доделать здездочки на пароль вместо точек
    // const starText = Array(value.length).fill('*').join('');
    setPassword(value);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log('data: ', data);
    setEmail('');
    setPassword('');
  };

  return (
    <BaseContainer>
      <form action='' method='post' className={styles.Login}>
        <BaseTitle className={styles.Title}>Sign in to Esoque</BaseTitle>
        <BaseText className={styles.Subtitle}>
          It is great to see you back! Please log in.
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

        <BaseButton onClick={submitHandler} className={styles.BtnLogin}>
          Log in
        </BaseButton>

        <LinkHome />
      </form>
    </BaseContainer>
  );
};

export default Login;
