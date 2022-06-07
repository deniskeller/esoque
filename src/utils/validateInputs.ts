import { isBoolean } from "lodash";
import { getAge } from "./getAge";

export const validatePassword = (password: string, inputs: ValidateInputs) => {
  let newInputs = { ...inputs };

  const digit = /\d/;
  const uppercase = /[A-Z]/;
  const lowercase = /[a-z]/;
  const minLength = /.{8,}/;
  const special = /[!@#\$%\^&\*\(\)\,\.\+\-\?\=\/\`\~\:\'\;\"\>\<]/;

  newInputs.digit = digit.test(password);
  newInputs.uppercase = uppercase.test(password);
  newInputs.lowercase = lowercase.test(password);
  newInputs.minLength = minLength.test(password);
  newInputs.special = special.test(password);

  return newInputs;
};

export const checkValidValues = (arrValues: CheckValidValues) => {
  return arrValues.includes(false);
};

export const dateMask = (birtday: string) => {
  const date = birtday;
  let value = "";
  let res = "";

  if (date.length) {
    value = date.split("/").join("").replace(/\D+/g, "");
    res = value;
    if (value.length === 2 || value.length === 3) {
      res = value.slice(0, 2) + "/" + value.slice(2);
    }
    if (value.length >= 4) {
      res = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4, 8);
    }
  } else {
    res = value;
  }

  return res;
};

export const checkValidAge = (birtday: string) => {
  const curBirthday = birtday.split("/").reverse().join("-");
  let [yyyy] = curBirthday.split("-");

  const age = getAge(curBirthday);

  if (yyyy?.length !== 4 || isNaN(age)) {
    return false;
  }

  return age > 100 || age < 18 ? false : true;
};

export const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    );
};

export const validateEmailCode = (code: string) => {
  var numberReg = new RegExp("^[0-9]*$");

  return numberReg.test(code);
};

export const isBeforeToday = (date: string) => {
  const curDate = date.split("/").reverse().join("-");

  if (date.length < 10) {
    return false;
  }

  const [yyyy] = curDate.split("-");
  if (+yyyy < 1900) {
    return false;
  }

  return new Date(curDate).valueOf() < new Date().valueOf();
};

export const validateFields = (inputs: ValidateFields) => {
  const newObj = { ...inputs };
  const inputsName = Object.keys(newObj);
  let errors = 0;

  inputsName.forEach((name) => {
    const current = newObj[name];
    let isValid;

    switch (name) {
      case "addressTwo":
        return;
      case "birthday":
        isValid = checkValidAge(newObj[name].value);
        break;
      case "IncorporationDate":
        isValid = isBeforeToday(newObj[name].value);
        break;
      default:
        isValid = validateInput(current.value, current.type);
    }

    if (isValid) {
      newObj[name].error = "";
    } else {
      switch (name) {
        case "birthday":
          newObj[name].error = "Your age must be over 18 years old";
          break;
        case "IncorporationDate":
          newObj[name].error = "invalid date entered";
          break;
        case "code": {
          newObj[name].error = "Code can only be numbers";
          break;
        }
        default:
          newObj[name].error = "Error";
      }

      errors++;
    }
  });

  return { newObj, errors };
};

export const validateInput = (value: string, type: string) => {
  const validation: Validation = {
    string: /[a-zA-Z0-9]/,
    number: /^\d+$/,
    phone: /^[0-9]{4,16}$/,
    phoneCode: /[0-9\-\+\ \.]/,
    date: /[0-9\-\+\ \.]/,
    email:
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
  };

  return validation[type].test(value);
};

type ValidateInputs = {
  [key: string]: boolean;
};

type ValidateFields = {
  [key: string]: {
    [key: string]: string;
  };
};

type Validation = {
  [key: string]: RegExp;
};

type Inputs = {
  [key: string]: {
    [key: string]: string;
  };
};

type CheckValidValues = boolean[];
