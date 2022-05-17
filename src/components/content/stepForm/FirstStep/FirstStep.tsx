import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BaseButton, BaseInput, BaseText, BaseTitle } from "@base/index";
import styles from "./FirstStep.module.scss";
import { LinkHome } from "@content/index";
import { validateEmail } from "@utils/validateInputs";

interface Props {
  checkEmail: (email: string) => void;
  email: string;
  error: string;
}

const FirstStep: React.FC<Props> = ({ email, error, checkEmail }) => {
  const [emailInput, setEmailInput] = useState<string>(email);
  const [textError, setTextError] = useState(error);

  const changeHandlerPhone = (value: string) => {
    setEmailInput(value);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validateEmail(emailInput)) {
      checkEmail(emailInput);
    } else {
      setTextError("Please enter a valid email");
    }
  };

  useEffect(() => {
    setTextError(error);
  }, [error]);

  return (
    <form action="" method="post" className={styles.Email}>
      <BaseTitle className={styles.Title}>Enter your email</BaseTitle>
      <BaseText className={styles.Subtitle}>
        This address will be associated with your Company’s profile.
      </BaseText>

      <BaseInput
        // label='Email'
        error={textError}
        value={emailInput}
        name="email"
        onChange={changeHandlerPhone}
        placeholder="Email"
        type="text"
        required
        className={styles.Input}
      />

      <BaseButton onClick={submitFormData} className={styles.BtnLogin}>
        Continue
      </BaseButton>

      <BaseText className={styles.Question}>
        Already have an account?{" "}
        <Link href={"/login"}>
          <a className={`${styles.Link} ${styles.LinkQuestion}`}>Sign in.</a>
        </Link>
      </BaseText>

      <LinkHome className={styles.LinkToHome} />
    </form>
  );
};

export default FirstStep;
