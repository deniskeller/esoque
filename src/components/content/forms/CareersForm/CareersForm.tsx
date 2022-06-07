import React from "react";

import { BaseButton, BaseInput, BaseTextarea } from "@base/index";
import PhoneInput from "@content/other/PhoneInput/PhoneInput";

import UploadFile from "@content/other/UploadFileBtn/UploadFileBtn";
import UploadZoneFile from "@content/other/UploadZoneFile/UploadZoneFile";

import { validateEmail, validateFields } from "@utils/validateInputs";

import styles from "./CareersForm.module.scss";
import { IApplyVacancy } from "@type/careers";

type TInputs = {
  [key: string]: { [key: string]: string };
};
interface Props {
  id: any;
  onSubmit: (params: IApplyVacancy) => void;
  showSuccessForm: boolean;
}

const CareersForm: React.FC<Props> = ({ id, onSubmit, showSuccessForm }: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [files, setFiles] = React.useState<any[]>([]);

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
    console.log(newObj, "newObj");

    if (!email.length) {
      setEmailError(true);
    }

    if (!errors && !emailError) {
      const data = {
        fullName: newObj.firstName.value,
        phone: newObj.phoneCode.value + newObj.phone.value,
        email: email,
        linkedProfile: companyName,
        textarea: desc,
        attachment: files,
        position: id.toString(),
      } as IApplyVacancy;

      onSubmit(data);
      console.log("data Form", data);
    }

    setInputs(newObj);
  };

  function onDeleteFile() {
    setFiles([]);
  }

  React.useEffect(() => {
    if (email.length)
      if (validateEmail(email)) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
  }, [email]);

  console.log("files", files);
  return (
    <>
      {showSuccessForm ? (
        <div className={styles.MessageContainer}>
          <div className={styles.Message}>
            <span>
              Thank you! <br /> Resume sent successfully
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
            placeholder="LinkedIn Profile (if applicable)"
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
            placeholder="Tell in a few words about yourself and your interest in our company"
          />
          <div className={styles.FormFiles}>
            <div className={styles.FormFilesName}>
              {files?.length > 0 ? (
                files.map((file) => {
                  return <FileSelected key={file?.name} file={file} onClose={onDeleteFile} />;
                })
              ) : (
                <UploadZoneFile onDrop={uploadDropFile} isMultiple={false} />
              )}
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
export default CareersForm;

interface FileProps {
  file: File;
  onClose: (id: any) => void;
}

const FileSelected: React.FC<FileProps> = ({ file, onClose }: FileProps) => {
  return (
    <div className={styles.FormFilesNameWrap}>
      <div className={styles.FormFilesNameFile}>{file.name}</div>
      <div className={styles.FormFilesBtnClose} onClick={onClose}>
        <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.6 0.0999997H10.58L6.58 4.54L2.58 0.0999997H0.52L5.52 5.52L0.48 11H2.5L6.54 6.52L10.58 11H12.64L7.62 5.5L12.6 0.0999997Z"
            fill="black"
            fillOpacity="0.39"
          />
        </svg>
      </div>
    </div>
  );
};
