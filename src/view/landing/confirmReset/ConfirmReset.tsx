import React from "react";

import styles from "./ConfirmReset.module.scss";

import ResetPassword from "@content/confirmPassword/ResetPassword/ResetPassword";
import CompletedReset from "@content/confirmPassword/CompletedReset/CompletedReset";
import { newPassword } from "@api/login";

interface Props {
  token: string;
}

const ConfirmReset: React.FC<Props> = ({ token }) => {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState<string>("");

  const setNewPassword = async ({
    password,
    confirmPassword,
  }: {
    password: string;
    confirmPassword: string;
  }) => {
    const { status }: any = await newPassword({
      uid: token,
      password,
      confirmPassword,
    });

    // console.log(status, message, "stastus message");
    if (status === "OK") {
      setSuccess(true);
      return;
    }
    // setError(message);
  };

  return success ? (
    <CompletedReset
      title="Password successfully changed"
      subtitle=""
      btnText="Sign In"
    />
  ) : (
    <ResetPassword error={error} submitNewPassword={setNewPassword} />
  );
};

export default ConfirmReset;
