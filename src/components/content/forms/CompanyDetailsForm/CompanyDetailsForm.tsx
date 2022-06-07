import React, { useEffect } from "react";

import { CompanyManagementModal, LabelWrapper, TitleLine } from "@content/index";

import styles from "./CompanyDetailsForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { EsoqueState } from "@store/store";
import { BaseButton, BaseDatePicker, BaseInputApp, BaseSearchSelectApp, BaseSelectApp } from "@base/index";

import { countries } from "@utils/countries";

import { validateFields } from "@utils/validateInputs";
import { IBusiness } from "@store/app/companyDetails/types";
import { actions } from "@store/app/companyDetails/reducer";
import useModal from "@hooks/useModal";
import { useRouter } from "next/router";

const mockBusinessType = [
  { title: "Trade", value: "Trade" },
  { title: "Services", value: "Services" },
  { title: "Production", value: "Production" },
];

type Inputs = {
  [key: string]: { [key: string]: string };
};

type Props = {};

const CompanyDetailsForm: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { business, success, errors } = useSelector((state: EsoqueState) => state.companyDetails);
  const { id } = useSelector((state: EsoqueState) => state.user.userData);

  const { isShowing, toggle } = useModal();

  const redirectUser = () => {
    router.push("/app/company_management");
  };

  const [inputs, setInputs] = React.useState<Inputs>({
    name: { value: business?.name, error: "", type: "string" },
    registrationNumber: { value: business?.registrationNumber, error: "", type: "string" },
    country: { value: business?.country, error: "", type: "string" },
    address: { value: business?.address, error: "", type: "string" },
    importationDate: { value: business?.importationDate, error: "", type: "date" },
    type: { value: business?.type, error: "", type: "string" },
  });

  // Handlers
  const onChangeInputs = (name: string, value: string) => {
    const newInputs = { ...inputs };
    if (inputs[name].error) {
      dispatch(actions.setErrors({ errors: { ...errors, [name]: "" } }));
    }
    newInputs[name].value = value;
    newInputs[name].error = "";
    setInputs(newInputs);
  };

  const onSubmit = () => {
    const { newObj, errors } = validateFields(inputs);

    if (!errors) {
      const newBusiness: IBusiness = {
        country: newObj.country.value,
        name: newObj.name.value,
        registrationNumber: newObj.registrationNumber.value,
        importationDate: newObj.importationDate.value,
        type: newObj.type.value,
        address: newObj.address.value,
      };

      if (business.id) {
        // update business
        dispatch(actions.sendBusiness({ business: newBusiness, id: business.id }));
      } else {
        // create business
        newBusiness.owner = id;
        newBusiness.principial = id;
        dispatch(actions.sendBusiness({ business: newBusiness }));
      }
    }

    setInputs(newObj);
  };

  useEffect(() => {
    if (errors) {
      setInputs((prev) => ({
        ...prev,
        name: { ...prev.name, error: errors.name },
        registrationNumber: { ...prev.registrationNumber, error: errors.registrationNumber },
        importationDate: { ...prev.importationDate, error: errors.importationDate },
      }));
    }
  }, [errors]);

  React.useEffect(() => {
    if (success) {
      // Open modal
      toggle();
    }
  }, [success]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.requareText}>
        <span>Required fields are marked with *</span>
      </div>
      <TitleLine type="yellow" text="Company Detail" className={styles.rowTitle} />

      <div className={styles.userForm}>
        <div className={styles.lineInputs}>
          <LabelWrapper className={styles.input} label="LEGAL NAME" isRequared={true}>
            <BaseInputApp
              inputSize={"Medium"}
              error={Boolean(inputs.name.error)}
              type={"text"}
              value={inputs.name.value}
              name={"legalName"}
              placeholder="Legal name"
              onChange={(val: string) => onChangeInputs("name", val)}
            />
          </LabelWrapper>

          <LabelWrapper className={styles.input} label="REGISTRATION NUMBER" isRequared={true}>
            <BaseInputApp
              inputSize={"Medium"}
              error={Boolean(inputs.registrationNumber.error)}
              type={"text"}
              value={inputs.registrationNumber.value}
              name="registrationNumber"
              placeholder="Registration number"
              onChange={(val: string) => onChangeInputs("registrationNumber", val)}
            />
          </LabelWrapper>
        </div>
        <div className={styles.lineInputs}>
          <LabelWrapper className={styles.input} label="COUNTRY OF INCORPORATION" isRequared={true}>
            <BaseSearchSelectApp
              error={Boolean(inputs.country.error)}
              placeholder="Country of incorporation"
              type={"text"}
              onChange={(val: string) => onChangeInputs("country", val)}
              options={countries}
              inputSize="Medium"
              selectedValue={inputs.country.value}
            />
          </LabelWrapper>

          <LabelWrapper className={styles.input} label="ADDRESS" isRequared={true}>
            <BaseInputApp
              inputSize={"Medium"}
              type={"text"}
              value={inputs.address.value}
              name="address"
              placeholder="Address"
              error={Boolean(inputs.address.error)}
              onChange={(val: string) => onChangeInputs("address", val)}
            />
          </LabelWrapper>
        </div>
        <div className={styles.lineInputs}>
          <LabelWrapper className={styles.input} label="INCORPORATION DATE" isRequared={true}>
            <BaseDatePicker
              inputSize="Medium"
              name="importationDate"
              error={Boolean(inputs.importationDate.error)}
              placeholder="Incorporation date"
              onChange={(val: string) => onChangeInputs("importationDate", val)}
              value={inputs.importationDate.value}
            />
          </LabelWrapper>

          <LabelWrapper className={styles.input} label="BUSINESS TYPE" isRequared={true}>
            <BaseSelectApp
              selectedValue={inputs.type.value}
              placeholder="Business type"
              inputSize="Medium"
              onChange={(val: string) => onChangeInputs("type", val)}
              options={mockBusinessType}
              error={Boolean(inputs.type.error)}
            />
          </LabelWrapper>
        </div>
      </div>
      <div className={styles.groupBtn}>
        <BaseButton className={styles.btnCancel} type="success_black" onClick={redirectUser}>
          Cancel
        </BaseButton>
        <BaseButton className={styles.btnSave} onClick={onSubmit}>
          {business.id ? "Save" : "Add Company"}
        </BaseButton>
      </div>

      <CompanyManagementModal isShowing={isShowing} hide={toggle} onClick={redirectUser} />
    </div>
  );
};

export default CompanyDetailsForm;
