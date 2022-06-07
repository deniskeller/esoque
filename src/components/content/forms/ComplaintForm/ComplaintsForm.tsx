import React from "react";

import { BaseButton, BaseInput, BaseTextarea } from "@base/index";
import PhoneInput from "@content/other/PhoneInput/PhoneInput";

import UploadFile from "@content/other/UploadFileBtn/UploadFileBtn";
import UploadZoneFile from "@content/other/UploadZoneFile/UploadZoneFile";

import { validateEmail, validateFields } from "@utils/validateInputs";

import styles from "./ComplaintsForm.module.scss";
import { feedbackCompany } from "@api/feedbackForms";

type TInputs = {
  [key: string]: { [key: string]: string };
};

const ComplaintsForm = () => {
  const [email, setEmail] = React.useState<string>("");

  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [files, setFiles] = React.useState<File[]>();
  const [submitSuccess, setSubmitSuccess] = React.useState<boolean>(false);

  const [inputs, setInputs] = React.useState<TInputs>({
    firstName: { value: "", error: "", type: "string" },
    phone: { value: "", error: "", type: "phone" },
    phoneCode: { value: "", error: "", type: "phoneCode" },
  });

  // Optional input
  const [desc, setDesc] = React.useState<string>("");
  const [companyName, setCompanyName] = React.useState<string | number>("");

  const changeInputs = (name: string, value: string) => {
    const newInputs = { ...inputs };
    newInputs[name].value = value;

    newInputs[name].error = "";

    setInputs(newInputs);
  };

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
        name: newObj.firstName.value,
        companyName,
        phone: newObj.phoneCode.value + newObj.phone.value,
        email: email,
        description: desc,
        files: files,
      };

      const res = await feedbackCompany(data);
      if (res) setSubmitSuccess(true);
      // alert("Done");
    }

    setInputs(newObj);
  };

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
      {submitSuccess ? (
        <div className={styles.MessageContainer}>
          <div className={styles.Message}>
            <span>
              Thak you! <br /> The mail has been sent successfully.
            </span>
          </div>
        </div>
      ) : (
        <form className={styles.Form}>
          <BaseInput
            className={styles.FormInput}
            value={inputs.firstName.value}
            type="text"
            name="firstName"
            error={!!inputs.firstName.error}
            onChange={(value: string) => changeInputs("firstName", value)}
            placeholder="Name Surname"
          />
          <BaseInput
            className={styles.FormInput}
            value={companyName}
            type="text"
            name="companyName"
            onChange={setCompanyName}
            placeholder="Company Name (if applicable)"
          />

          <div className={styles.FormPhoneInput}>
            <PhoneInput
              errorCode={!!inputs.phoneCode.error}
              errorPhone={!!inputs.phone.error}
              value={inputs.phone.value}
              onChangeCode={(value: string) => {
                changeInputs("phoneCode", value);
              }}
              onChangePhone={(value: string) => changeInputs("phone", value)}
            />
          </div>
          <BaseInput
            className={styles.FormInput}
            value={email}
            type="text"
            name="Email"
            onChange={(value: string) => setEmail(value)}
            placeholder="Email Address"
            error={emailError}
          />
          <BaseTextarea
            className={styles.FormTextarea}
            type="Landing"
            onChange={setDesc}
            value={desc}
            placeholder="Description of the case"
          />
          <div className={styles.FormFiles}>
            <div className={styles.FormFilesName}>
              <UploadZoneFile onDrop={uploadDropFile} />
            </div>
            <div className={styles.FormFilesBtn}>
              <UploadFile uploadFiles={uploadFile} />
            </div>
          </div>
          <div className={styles.FormSubmit}>
            <BaseButton onClick={submitFormData} className={styles.FormSubmitBtn} type="default">
              Submit
            </BaseButton>
          </div>
        </form>
      )}
    </>
  );
};
export default ComplaintsForm;
