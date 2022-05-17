import React from "react";

import { AppInput, AppSelect, AppSearchSelect, TitleLine } from "@content/index";

import styles from "./UserDetailsForm.module.scss";
import { BaseButton, BaseSingleCheckboxApp, BaseIcon, BaseCheckbox } from "@base/index";

import { ALL_ICONS } from "@constants/icons";

import { useDispatch, useSelector } from "react-redux";
import { EsoqueState } from "@store/store";

import userTitles from "@services/userTitles.json";
import phoneCodes from "@services/phoneCodes.json";
import { validateFields } from "@utils/validateInputs";
import { actions } from "@store/app/userDetails/reducer";
import { useRouter } from "next/router";
import { IUserDetailsData } from "@store/app/userDetails/types";

const userStatus = [
  { title: "Disabled", value: "Disabled" },
  { title: "Enabled", value: "Enabled" },
];

type Props = {};

type Inputs = {
  [key: string]: { [key: string]: string };
};

type Status = {
  value: string;
  error: string;
};

const UserDetailsForm: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { details, currentFirm } = useSelector((state: EsoqueState) => state.userDetails);

  console.log(details, "details");

  // Firm status
  const [status, setStatus] = React.useState<Status>({
    value: details?.status ? "Enabled" : "Disabled",
    error: "",
  });

  // Inputs
  const [inputs, setInputs] = React.useState<Inputs>({
    title: { value: details?.title, error: "", type: "string" },
    firstName: { value: details?.firstName, error: "", type: "string" },
    lastName: { value: details?.lastName, error: "", type: "string" },
    email: { value: details?.email, error: "", type: "email" },
    repeatEmail: { value: details?.email, error: "", type: "email" },
    jobTitle: { value: details?.jobTitle, error: "", type: "string" },
    countryCode: { value: details?.countryCode, error: "", type: "phoneCode" },
    telephoneNumber: { value: details?.telephoneNumber, error: "", type: "phone" },
  });

  // Permissions
  const [canManageUsers, setCanManageUsers] = React.useState<boolean>(false);
  const [checkBoxs, setCheckBoxs] = React.useState<string>("");

  // Handlers
  const onChangeInputs = (name: string, value: string) => {
    const newInputs = { ...inputs };
    newInputs[name].value = value;
    newInputs[name].error = "";
    setInputs(newInputs);
  };

  const cancelCreateUser = () => {
    router.back();
  };

  // Save \ Create user
  const onSubmit = () => {
    const { newObj, errors } = validateFields(inputs);

    // check repeatEmail
    if (newObj?.email?.value !== newObj?.repeatEmail?.value) {
      newObj.repeatEmail.error = "Error";
    }

    if (!errors && !newObj?.repeatEmail?.error) {
      const newDetails: IUserDetailsData = {
        title: newObj.title.value,
        jobTitle: newObj.jobTitle.value,
        firstName: newObj.firstName.value,
        lastName: newObj.lastName.value,
        email: newObj.email.value,
        countryCode: newObj.countryCode.value,
        telephoneNumber: newObj.telephoneNumber.value,
        permission: checkBoxs,
        canManageUsers: canManageUsers,
        firm: details?.firm,
      };

      if (details?.firm) {
        // Update data users
        dispatch(actions.sendUserDetails(newDetails));
      } else {
        newDetails.firm = currentFirm.value;
        dispatch(actions.sendUserDetails(newDetails));
      }
    }

    setInputs(newObj);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.requareText}>
        <span>Required fields are marked with *</span>
      </div>
      <TitleLine type="yellow" text="User Detail" className={styles.rowTitle} />
      <div className={styles.firmName}>
        <span>FIRM</span>
        <span>{details?.firmName || currentFirm?.title || "-"}</span>
      </div>
      <div className={styles.userForm}>
        <div className={styles.lineInputs}>
          <AppSelect
            label="TITLE"
            placeholder="Title"
            className={styles.input}
            isRequared={true}
            inputSize="Medium"
            options={userTitles}
            selectedValue={inputs.title.value}
            error={Boolean(inputs?.title.error)}
            onChange={(value: string) => onChangeInputs("title", value)}
          />
          <AppInput
            inputSize="Small"
            value={inputs?.firstName?.value}
            isRequared={true}
            label="FIRST NAME"
            placeholder="First name"
            name="firstName"
            type="text"
            className={styles.input}
            error={Boolean(inputs?.firstName.error)}
            onChange={(value: string) => onChangeInputs("firstName", value)}
          />
        </div>
        <div className={styles.lineInputs}>
          <AppInput
            inputSize="Small"
            value={inputs?.lastName?.value}
            isRequared={true}
            label="LAST NAME"
            placeholder="Last name"
            name="lastName"
            type="text"
            className={styles.input}
            error={Boolean(inputs?.lastName.error)}
            onChange={(value: string) => onChangeInputs("lastName", value)}
          />
          <AppInput
            inputSize="Small"
            value={inputs?.jobTitle?.value}
            isRequared={true}
            label="JOB TITLE"
            placeholder="Job Title"
            name="jobTitle"
            type="text"
            className={styles.input}
            error={Boolean(inputs?.jobTitle.error)}
            onChange={(value: string) => onChangeInputs("jobTitle", value)}
          />
        </div>
        <div className={styles.lineInputs}>
          <AppInput
            inputSize="Small"
            label="EMAIL ADDRESS"
            placeholder="Email address"
            className={styles.input}
            isRequared={true}
            value={inputs?.email.value}
            name="email"
            type="text"
            error={Boolean(inputs.email.error)}
            onChange={(value: string) => onChangeInputs("email", value)}
          />
          <AppInput
            label="CONFIRM EMAIL ADDRESS"
            placeholder="Email Address"
            inputSize="Small"
            className={styles.input}
            isRequared={true}
            value={inputs?.repeatEmail?.value}
            name="email"
            type="text"
            error={Boolean(inputs?.repeatEmail.error)}
            onChange={(value: string) => onChangeInputs("repeatEmail", value)}
          />
        </div>
        <div className={styles.emailDescription}>
          Your email address will be your username. <br />
          Please enter an individual address rather ran a group or consolidated email
          address.
        </div>
        <div className={styles.lineInputs}>
          <AppSearchSelect
            label="PHONE COUNTRY CODE"
            placeholder="Select an Option"
            className={styles.input}
            isRequared={true}
            inputSize="Medium"
            options={phoneCodes}
            selectedValue={inputs?.countryCode?.value}
            error={Boolean(inputs?.countryCode.error)}
            onChange={(value: string) => onChangeInputs("countryCode", value)}
          />
          <AppInput
            label="TELEPHONE NUMBER"
            placeholder="Phone number"
            inputSize="Small"
            className={styles.input}
            isRequared={true}
            value={inputs?.telephoneNumber?.value}
            name="phone"
            type="text"
            error={Boolean(inputs?.telephoneNumber.error)}
            onChange={(value: string) => onChangeInputs("telephoneNumber", value)}
          />
        </div>
      </div>
      {/* Firm status */}
      <>
        <TitleLine type="yellow" text="Firm Status" className={styles.rowTitle} />
        <div className={styles.firmStatus}>
          <AppSelect
            label="STATUS"
            placeholder="Disabled"
            className={`${styles.input} ${!details?.status ? styles.disabled : ""}`}
            isRequared={true}
            inputSize="Medium"
            options={userStatus}
            selectedValue={details?.status ? status.value : ""}
            onChange={(value: string) => setStatus({ value, error: "" })}
          />
          <span className={styles.firmStatusDesc}>
            Your email address will be your username. Please enter an individual address
            rather ran a group or consolidated email address.
          </span>
        </div>
      </>
      {/* Permissions */}
      <>
        <TitleLine
          type="yellow"
          text="Applications Permissions"
          className={styles.rowTitle}
        />
        <div className={styles.permissions}>
          <div className={styles.advanced}>
            <span>Enable Advanced User Management</span>
            <div className={styles.advancedCheckbox}>
              <BaseCheckbox checkboxValue={canManageUsers} onClick={setCanManageUsers} />
              <BaseIcon
                className={styles.advancedCheckboxIcon}
                icon={ALL_ICONS.INFO_ICON}
                viewBox="0 0 32 33"
              />
            </div>
          </div>

          <div className={styles.applicationsList}>
            <div className={styles.applicationsListItem}>
              <span>Applications Type</span>
              All
            </div>
            <div className={styles.applicationsListItem}>
              <span>Data Entry</span>
              <BaseSingleCheckboxApp
                checkboxValue={checkBoxs === "dataEntry"}
                onClick={() => setCheckBoxs("dataEntry")}
              />
            </div>
            <div className={styles.applicationsListItem}>
              <span>Submitter</span>
              <BaseSingleCheckboxApp
                checkboxValue={checkBoxs === "submitter"}
                onClick={() => setCheckBoxs("submitter")}
              />
            </div>
            <div className={styles.applicationsListItem}>
              <span>Read Only</span>
              <BaseSingleCheckboxApp
                checkboxValue={checkBoxs === "readOnly"}
                onClick={() => setCheckBoxs("readOnly")}
              />
            </div>
          </div>
        </div>
      </>

      <div className={styles.groupBtn}>
        <BaseButton
          className={styles.btn}
          type="success_black"
          onClick={cancelCreateUser}
        >
          Cancel
        </BaseButton>
        <BaseButton className={styles.btn} onClick={onSubmit}>
          {details?.id ? "Save" : "Create"}
        </BaseButton>
      </div>
    </div>
  );
};

export default UserDetailsForm;
