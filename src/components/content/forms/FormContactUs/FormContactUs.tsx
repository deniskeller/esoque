import React from "react";

import { BaseButton, BaseCheckbox, BaseInput, BaseText, BaseTextarea, BaseTitle } from "@base/index";

import UploadFile from "@content/other/UploadFileBtn/UploadFileBtn";
import UploadZoneFile from "@content/other/UploadZoneFile/UploadZoneFile";

import styles from "./FormContactUs.module.scss";
import PhoneInput from "@content/other/PhoneInput/PhoneInput";
import { validateEmail, validateFields } from "@utils/validateInputs";
import { feedbackFull } from "@api/feedbackForms";
import Link from "next/link";

type TInputs = {
  [key: string]: { [key: string]: string };
};

const FormContactUs = () => {
  const [files, setFiles] = React.useState<File[]>();

  const [email, setEmail] = React.useState<string>("");

  const [emailError, setEmailError] = React.useState<boolean>(false);

  const [isConfirm, setIsConfirm] = React.useState<boolean>(false);
  const [isRead, setIsRead] = React.useState<boolean>(false);

  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [disabled, setDisabled] = React.useState<boolean>(true);

  //моковое подтверждение
  const [apply, setApply] = React.useState<boolean>(false);

  const [inputs, setInputs] = React.useState<TInputs>({
    firstName: { value: "", error: "", type: "string" },
    lastName: { value: "", error: "", type: "string" },
    phone: { value: "", error: "", type: "phone" },
    phoneCode: { value: "", error: "", type: "phoneCode" },
  });

  // Optional input
  const [desc, setDesc] = React.useState<string>("");

  const changeInputs = (name: string, value: string) => {
    const newInputs = { ...inputs };
    newInputs[name].value = value;

    newInputs[name].error = "";

    setInputs(newInputs);
  };

  // Files
  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Object.values(e?.target?.files || {});
    setFiles(files);
  };

  const uploadDropFile = React.useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles, "acceptedFiles");

    setFiles(acceptedFiles);
  }, []);

  // Submit
  const submitFormData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { newObj, errors } = validateFields(inputs);
    // console.log(newObj, "newObj");

    if (!email.length) {
      setEmailError(true);
    }

    if (!errors && !emailError) {
      const data = {
        firstName: newObj.firstName.value,
        lastName: newObj.lastName.value,
        phone: newObj.phoneCode.value + newObj.phone.value,
        email: email,
        comment: desc,
        files: files,
      };

      const res = await feedbackFull(data);
      if (res) {
        setSubmitSuccess(true);

        alert("Успешно");
      }
    }

    setInputs(newObj);
    setApply(true);
  };

  React.useEffect(() => {
    if (isRead && isConfirm) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [isRead, isConfirm]);

  React.useEffect(() => {
    if (email.length)
      if (validateEmail(email)) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
  }, [email]);

  return (
    <>
      <div className={styles.Form}>
        <BaseTitle className={styles.FormTitle}>Contact us</BaseTitle>
        <BaseText className={styles.FormSubTitle}>
          Please feel free to contact or ask your questions. We are happy to help!
        </BaseText>
        {!apply ? (
          <>
            <div className={styles.Row}>
              <BaseInput
                className={styles.Input}
                type="text"
                name="firstName"
                placeholder="First Name"
                value={inputs.firstName.value}
                error={inputs.firstName.error}
                onChange={(value: string) => changeInputs("firstName", value)}
              />
              <BaseInput
                className={styles.Input}
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={inputs.lastName.value}
                error={inputs.lastName.error}
                onChange={(value: string) => changeInputs("lastName", value)}
              />
            </div>
            <div className={styles.Row}>
              <BaseInput
                className={styles.Input}
                type="text"
                name="email"
                value={email}
                onChange={(value: string) => setEmail(value)}
                placeholder="Email Address"
                error={emailError}
              />
              <div className={styles.FormPhoneInput}>
                <PhoneInput
                  errorCode={Boolean(inputs.phoneCode.error)}
                  errorPhone={Boolean(inputs.phone.error)}
                  value={inputs.phone.value}
                  onChangeCode={(value: string) => {
                    changeInputs("phoneCode", value);
                  }}
                  onChangePhone={(value: string) => changeInputs("phone", value)}
                />
              </div>
            </div>
            <BaseTextarea className={styles.Textarea} placeholder="Type here.." value={desc} onChange={setDesc} />
            <div className={styles.Row}>
              <div className={styles.FormFiles}>
                <div className={styles.FormFilesName}>
                  <UploadZoneFile onDrop={uploadDropFile} />
                </div>
                <div className={styles.FormFilesBtn}>
                  <UploadFile uploadFiles={uploadFile} />
                </div>
              </div>
            </div>

            <div className={styles.CheckBoxContainer}>
              <BaseCheckbox checkboxValue={isConfirm} onClick={setIsConfirm} />
              <div className={styles.CheckBoxText}>
                I confirm that I have read and expressly understand how my personal data will be used for the purposes
                described in{" "}
                <Link href="/privacy_policy">
                  <a>Privacy Policy</a>
                </Link>
                .
              </div>
            </div>

            <div className={`${styles.CheckBoxContainer} ${styles.CheckBoxContainer2}`}>
              <BaseCheckbox checkboxValue={isRead} onClick={setIsRead} />
              <div className={styles.CheckBoxText}>
                I&apos;ve read and understand the{" "}
                <Link href="/privacy_policy">
                  <a>Privacy Policy</a>
                </Link>
                .
              </div>
            </div>

            <BaseButton disabled={disabled} className={styles.SubmitBtn} onClick={submitFormData}>
              Apply
            </BaseButton>
          </>
        ) : (
          <div className={styles.Apply}>
            <div className={styles.ApplyTitle}>
              Thank you for <br /> getting in touch! <br />
              Your message has been <br /> successfully sent.
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FormContactUs;
