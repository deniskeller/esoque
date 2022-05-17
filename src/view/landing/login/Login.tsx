import React, { useState } from "react";

import Link from "next/link";

import {
  BaseButton,
  BaseContainer,
  BaseInput,
  BaseText,
  BaseTitle,
} from "@base/index";

import { LinkHome } from "@content/index";

import { validateEmail } from "@utils/validateInputs";

import styles from "./Login.module.scss";
interface Props {
  error: string;
  loginUser: (data: LoginData) => void;
}

type LoginData = {
  email: string;
  password: string;
};

const Login: React.FC<Props> = ({ error, loginUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const changeHandlerEmail = (value: string) => {
    setEmail(value);
  };

  // Password
  const changePassword = (val: string) => {
    if (!val) {
      setPassword("");
      return;
    }
    setPassword(val);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(email)) {
      setEmailError("please enter a valid email");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Min length 8");
      return;
    }

    if (!emailError && !passwordError) {
      const data: LoginData = {
        email: email,
        password: password,
      };
      loginUser(data);
    }
  };

  return (
    <BaseContainer>
      <form action="" method="post" className={styles.Login}>
        <BaseTitle className={styles.Title}>Sign in to Esoque</BaseTitle>
        <BaseText className={styles.Subtitle}>
          It is great to see you back! Please log in.
        </BaseText>

        <BaseInput
          value={email}
          name="email"
          error={emailError}
          onChange={changeHandlerEmail}
          placeholder="Email"
          type="text"
          required
          className={styles.Input}
        />

        <BaseInput
          value={password}
          onChange={changePassword}
          name="password"
          error={passwordError || error}
          placeholder="Password"
          type="password"
          required
          className={styles.Input}
        />

        <div className={styles.Navbar}>
          <Link href={"/reset"}>
            <a className={styles.Link}>Password Reset</a>
          </Link>
          <Link href={"/signup"}>
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
