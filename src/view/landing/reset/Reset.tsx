import React, { Dispatch, SetStateAction } from "react";

import {
  BaseButton,
  BaseContainer,
  BaseInput,
  BaseText,
  BaseTitle,
} from "@base/index";
import styles from "./Reset.module.scss";
import { LinkHome } from "@content/index";
import { resetPassword } from "@api/login";
import { validateEmail } from "@utils/validateInputs";
interface Props {
  changeSuccess: Dispatch<SetStateAction<boolean>>;
}

const Reset: React.FC<Props> = ({ changeSuccess }) => {
  const [email, setEmail] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const changeHandlerEmail = (value: string) => {
    setEmail(value);
  };

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");

    if (validateEmail(email)) {
      // TODO Any
      const { status, message }: any = await resetPassword({ email });
      if (status === "OK") {
        changeSuccess(true);
        return;
      }
      setError(message);
    } else {
      setError("Please enter valid email");
    }
  };

  return (
    <BaseContainer>
      <form action="" method="post" className={styles.Reset}>
        <BaseTitle className={styles.Title}>Enter your email</BaseTitle>
        <BaseText className={styles.Subtitle}>
          You will receive recovery instructions shortly.
        </BaseText>

        <BaseInput
          value={email}
          name="email"
          error={error}
          onChange={changeHandlerEmail}
          placeholder="Email"
          type="text"
          required
          className={styles.Input}
        />
        <BaseButton onClick={submitHandler} className={styles.BtnLogin}>
          Reset password
        </BaseButton>

        <LinkHome />
      </form>
    </BaseContainer>
  );
};

export default Reset;
