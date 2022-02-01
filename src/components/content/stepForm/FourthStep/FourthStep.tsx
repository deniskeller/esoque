import React from "react";
import { BaseButton, BaseInput, BaseText, BaseTitle } from "@base/index";
import styles from "./FourthStep.module.scss";
import { LinkHome } from "@content/index";

interface Props {
  nextStep: () => void;
}

//тестовый телефон
const mockPhone = "+44 442 545 221";

const FourthStep: React.FC<Props> = ({ nextStep }) => {
  const [confirmPhone, setConfirmPhone] = React.useState<number | string>("");
  const changeHandlerConfirmPhone = (value: number) => {
    setConfirmPhone(value);
  };

  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();

    //тестовая валидация
    if (mockPhone == confirmPhone) {
      alert("Телефоны совпадают");
      setConfirmPhone("");
      nextStep();
    } else {
      alert("Телефоны не совпадают");
    }
  };

  return (
    <form action="" method="post" className={styles.ConfirmPhone}>
      <BaseTitle className={styles.Title}>Confirm your phone number</BaseTitle>
      <BaseText className={styles.Subtitle}>
        We&apos;ve sent a verification code to +44 442 545 221
      </BaseText>

      <BaseInput
        name="confirmPhone"
        placeholder="Enter verification code here"
        type="text"
        required
        value={confirmPhone}
        onChange={changeHandlerConfirmPhone}
        className={styles.Input}
      />

      <BaseButton onClick={submitFormData} className={styles.BtnLogin}>
        Confirm and continue
      </BaseButton>

      <LinkHome />
    </form>
  );
};

export default FourthStep;
