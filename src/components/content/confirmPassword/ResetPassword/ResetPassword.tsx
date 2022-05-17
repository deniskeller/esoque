import React, { useState, useEffect } from "react";

import { BaseButton, BaseInput, BaseText, BaseTitle } from "@base/index";

import { LinkHome, ValidItem } from "@content/index";
import { checkValidValues, validatePassword } from "@utils/validateInputs";

import styles from "./ResetPassword.module.scss";

interface Props {
  submitNewPassword: ({
    password,
    confirmPassword,
  }: {
    password: string;
    confirmPassword: string;
  }) => void;
  error: string;
}

type ValidateInputs = {
  [key: string]: boolean;
};

const ResetPassword: React.FC<Props> = ({ submitNewPassword, error }) => {
  const [password, setPassword] = useState<string>("");

  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const [repeatError, setRepeatError] = useState<string>("");

  const [validateItems, setValidateItems] = useState<ValidateInputs>({
    digit: false,
    lowercase: false,
    uppercase: false,
    minLength: false,
    special: false,
  });

  // Password
  const changePassword = (val: string) => {
    setPassword(val);
  };

  // Repeat password
  const changeRepeatPassword = (val: string) => {
    setRepeatPassword(val);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const arrValues = Object.values(validateItems);
    const isValid = checkValidValues(arrValues);

    if (!isValid && !repeatError.length) {
      submitNewPassword({ password, confirmPassword: repeatPassword });
    }
  };

  // Validate match repeat
  React.useEffect(() => {
    if (password === repeatPassword) {
      setRepeatError("");
    } else {
      setRepeatError("Your passwords did not match");
    }
  }, [password, repeatPassword]);

  // Check validate items
  useEffect(() => {
    const res = validatePassword(password, validateItems);
    setValidateItems(res);
  }, [password]);

  return (
    <div className={styles.Container}>
      <div className={styles.LeftBlock}>
        <div className={styles.CreatePassword}>
          <form action="" method="post">
            <BaseTitle className={styles.Title}>Create your password</BaseTitle>
            <BaseText className={styles.Subtitle}>
              And start using Esoque
            </BaseText>

            <BaseInput
              name="password"
              placeholder="Password"
              type="password"
              required
              autocomplete="on"
              value={password}
              onChange={changePassword}
              className={styles.Input}
            />

            <BaseInput
              name="password"
              placeholder="Repeat Password"
              type="password"
              required
              autocomplete="on"
              value={repeatPassword}
              onChange={changeRepeatPassword}
              className={styles.Input}
              error={error || repeatError}
            />

            <div className={styles.Btns}>
              <BaseButton onClick={submitFormData} className={styles.BtnLogin}>
                Continue
              </BaseButton>
              <LinkHome className={styles.LinkHome} />
              {/* <StepBack onClick={prevStep} /> */}
            </div>
          </form>
        </div>
      </div>
      <div className={styles.RightBlock}>
        <div className={styles.ValidationPassword}>
          <ValidItem
            done={validateItems.digit}
            text="Passwords must contain at least one digit"
            className={styles.ValidItem}
          />

          <ValidItem
            done={validateItems.lowercase}
            text="Passwords must contain at least one lowercase letter"
            className={styles.ValidItem}
          />
          <ValidItem
            done={validateItems.uppercase}
            text="Passwords must contain at least one uppercase letter"
            className={styles.ValidItem}
          />
          <ValidItem
            done={validateItems.minLength}
            text="Passwords must have a minimal length of 8 characters"
            className={styles.ValidItem}
          />
          <ValidItem
            done={validateItems.special}
            text="Passwords must contain at least one special character"
            className={styles.ValidItem}
          />
          <ValidItem
            done={repeatError.length || repeatPassword === "" ? false : true}
            text="Passwords must match"
            className={styles.ValidItem}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
