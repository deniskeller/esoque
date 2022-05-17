import React from "react";
import { BaseButton, BaseText, BaseTitle } from "@base/index";
import { useRouter } from "next/router";

import styles from "./CheckEmail.module.scss";

const CheckEmail: React.FC = ({}) => {
  const router = useRouter();
  return (
    <div className={styles.CheckEmail}>
      <BaseTitle className={styles.Title}>Check your email</BaseTitle>
      <BaseText className={styles.Subtitle}>
        We have sent you recovery instructions to your email address.Please,
        follow link in it to continue.
      </BaseText>
      <BaseButton
        onClick={() => {
          router.push("/");
        }}
        className={styles.Btn}
      >
        Home
      </BaseButton>
    </div>
  );
};

export default CheckEmail;
