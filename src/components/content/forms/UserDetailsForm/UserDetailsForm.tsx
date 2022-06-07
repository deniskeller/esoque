import React from "react";

import { TitleLine, LabelWrapper } from "@content/index";

import styles from "./UserDetailsForm.module.scss";
import {
  BaseButton,
  BaseSingleCheckboxApp,
  BaseIcon,
  BaseCheckbox,
  BaseSelectApp,
  BaseInputApp,
  BaseSearchSelectApp,
} from "@base/index";

import { ALL_ICONS } from "@constants/icons";

import { useDispatch, useSelector } from "react-redux";
import { EsoqueState } from "@store/store";

import userTitles from "@services/userTitles.json";
import phoneCodes from "@services/phoneCodes.json";
import { validateFields } from "@utils/validateInputs";
import { actions } from "@store/app/userDetails/reducer";
import { useRouter } from "next/router";
import { IUserDetailsData } from "@store/app/userDetails/types";

import useModal from "@hooks/useModal";
import UserManagmentModal from "@content/modals/UserManagmentModal/UserManagmentModal";
import { deleteUser } from "@api/app/manage_users/detailsUser";

const userStatus = [
  { title: "Disabled", value: "Disabled" },
  { title: "Enabled", value: "Enabled" },

  { title: "Deleted", value: "Deleted" },
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
  const { isShowing, toggle } = useModal();

  const dispatch = useDispatch();
  const router = useRouter();

  const { details, currentFirm, fieldErrors, success } = useSelector((state: EsoqueState) => state.userDetails);

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

  const [canManageUsers, setCanManageUsers] = React.useState<boolean>(details?.canManageUsers || false);
  const [checkBoxs, setCheckBoxs] = React.useState<string>(details?.permission || "readOnly");

  // Handlers
  const onChangeInputs = (name: string, value: string) => {
    if (inputs[name].error) {
      dispatch(actions.setError({ errors: { ...fieldErrors, [name]: "" } }));
    }

    const newInputs = { ...inputs };
    newInputs[name].value = value;
    newInputs[name].error = "";
    setInputs(newInputs);
  };

  const cancelCreateUser = () => {
    router.back();
  };

  const onDeleteUser = async (id: string) => {
    if (status.value === "Deleted") {
      const res = await deleteUser(id);
      res ? router.back() : alert("Ошибка удаления юзера");
    }
  };

  // Save \ Create user
  const onSubmit = () => {
    // Удаление юзера
    if (status.value === "Deleted") {
      toggle();
      return;
    }

    // Validate

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

        // Change status
        newDetails.status = status.value;

        dispatch(
          actions.updateUserDetails({
            details: newDetails,
            id: details?.id,
          })
        );
      } else {
        // Create new user

        newDetails.firm = currentFirm.value;
        dispatch(actions.sendUserDetails(newDetails));
      }
    }

    setInputs(newObj);
  };

  React.useEffect(() => {
    if (success) {
      // Open modal
      toggle();
    }
  }, [success]);

  React.useEffect(() => {
    if (fieldErrors) {
      setInputs((prev) => ({
        ...prev,
        email: { ...prev.email, error: fieldErrors.email },
        telephoneNumber: { ...prev.telephoneNumber, error: fieldErrors.phone },
      }));
    }
  }, [fieldErrors]);

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
          <LabelWrapper className={styles.input} label="TITLE" isRequared={true}>
            <BaseSelectApp
              selectedValue={inputs.title.value}
              className={styles.select}
              placeholder="Title"
              inputSize="Medium"
              onChange={(value: string) => onChangeInputs("title", value)}
              options={userTitles}
              error={Boolean(inputs?.title.error)}
            />
          </LabelWrapper>

          <LabelWrapper className={styles.input} label="TITLE" isRequared={true}>
            <BaseInputApp
              inputSize="Medium"
              error={Boolean(inputs?.firstName.error)}
              type="text"
              value={inputs?.firstName?.value}
              name="firstName"
              className={styles.input}
              placeholder="First name"
              onChange={(value: string) => onChangeInputs("firstName", value)}
            />
          </LabelWrapper>
        </div>
        <div className={styles.lineInputs}>
          <LabelWrapper className={styles.input} label="LAST NAME" isRequared={true}>
            <BaseInputApp
              inputSize="Medium"
              error={Boolean(inputs?.lastName.error)}
              type="text"
              value={inputs?.lastName?.value}
              name="lastName"
              placeholder="Last name"
              onChange={(value: string) => onChangeInputs("lastName", value)}
            />
          </LabelWrapper>

          <LabelWrapper className={styles.input} label="JOB TITLE" isRequared={true}>
            <BaseInputApp
              inputSize="Medium"
              error={Boolean(inputs?.jobTitle.error)}
              type="text"
              value={inputs?.jobTitle?.value}
              name="jobTitle"
              placeholder="Job Title"
              onChange={(value: string) => onChangeInputs("jobTitle", value)}
            />
          </LabelWrapper>
        </div>
        <div className={styles.lineInputs}>
          <LabelWrapper className={styles.input} label="EMAIL ADDRESS" isRequared={true}>
            <BaseInputApp
              inputSize="Medium"
              error={Boolean(inputs.email.error)}
              type="text"
              value={inputs?.email.value}
              name="email"
              placeholder="Email address"
              onChange={(value: string) => onChangeInputs("email", value)}
            />
          </LabelWrapper>

          <LabelWrapper className={styles.input} label="CONFIRM EMAIL ADDRESS" isRequared={true}>
            <BaseInputApp
              inputSize="Medium"
              error={Boolean(inputs?.repeatEmail.error)}
              type="text"
              value={inputs?.repeatEmail?.value}
              name="email"
              placeholder="Email Address"
              onChange={(value: string) => onChangeInputs("repeatEmail", value)}
            />
          </LabelWrapper>
        </div>
        <div className={styles.emailDescription}>
          Your email address will be your username. <br />
          Please enter an individual address rather ran a group or consolidated email address.
        </div>
        <div className={styles.lineInputs}>
          <LabelWrapper className={styles.input} label="PHONE COUNTRY CODE" isRequared={true}>
            <BaseSearchSelectApp
              error={Boolean(inputs?.countryCode.error)}
              placeholder="Select an Option"
              onChange={(value: string) => onChangeInputs("countryCode", value)}
              options={phoneCodes}
              inputSize="Medium"
              selectedValue={inputs?.countryCode?.value}
            />
          </LabelWrapper>

          <LabelWrapper className={styles.input} label="TELEPHONE NUMBER" isRequared={true}>
            <BaseInputApp
              inputSize="Medium"
              error={Boolean(inputs?.telephoneNumber.error)}
              type={"text"}
              value={inputs?.telephoneNumber?.value}
              name="phone"
              placeholder="Phone number"
              onChange={(value: string) => onChangeInputs("telephoneNumber", value)}
            />
          </LabelWrapper>
        </div>
      </div>
      {/* Firm status */}
      <>
        <TitleLine type="yellow" text="Firm Status" className={styles.rowTitle} />
        <div className={styles.firmStatus}>
          <LabelWrapper
            className={`${styles.input} ${!details?.lastLogged ? styles.disabled : ""}`}
            label="STATUS"
            isRequared={true}
          >
            <BaseSelectApp
              selectedValue={details?.status ? status.value : ""}
              placeholder="Disabled"
              inputSize="Medium"
              onChange={(value: string) => {
                if (details?.lastLogged) setStatus({ value, error: "" });
              }}
              options={userStatus}
              error={Boolean(inputs?.title.error)}
            />
          </LabelWrapper>

          <span className={styles.firmStatusDesc}>
            Your email address will be your username. Please enter an individual address rather ran a group or
            consolidated email address.
          </span>
        </div>
      </>
      {/* Permissions */}
      <>
        <TitleLine type="yellow" text="Applications Permissions" className={styles.rowTitle} />

        <div className={styles.permissions}>
          <div className={styles.advanced}>
            <span>Enable Advanced User Management</span>
            <div className={styles.advancedCheckbox}>
              <BaseCheckbox checkboxValue={canManageUsers} onClick={setCanManageUsers} />

              <BaseIcon className={styles.advancedCheckboxIcon} icon={ALL_ICONS.INFO_ICON} viewBox="0 0 32 33" />
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
        <BaseButton className={styles.btn} type="success_black" onClick={cancelCreateUser}>
          Cancel
        </BaseButton>
        <BaseButton className={styles.btn} onClick={onSubmit}>
          {details?.id ? "Save" : "Create"}
        </BaseButton>
      </div>

      <UserManagmentModal
        isShowing={isShowing}
        hide={toggle}
        option={status.value === "Deleted" ? "delete" : "save"}
        onSave={cancelCreateUser}
        onDeleteUser={() => onDeleteUser(details?.id)}
      />
    </div>
  );
};

export default UserDetailsForm;
