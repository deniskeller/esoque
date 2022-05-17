import { ISignup } from "@store/signup/types";

export const parseCookie = (
  cookie: string | undefined,
  key: string
): string => {
  let result = "";
  if (!cookie || !key) {
    return result;
  }

  const arrKeys = cookie.split(";");
  console.log(arrKeys, "arrKeys");
  const searchCurrentKey = arrKeys.filter((el) => {
    if (el.includes(key)) {
      return el;
    }
  });
  console.log(searchCurrentKey, "searchCurrentKey");
  if (searchCurrentKey.length) {
    result = searchCurrentKey[0].split("=")[1];
  }

  return result;
};

export type UserFormatData = {
  email: string;
  password: string;
  countryCode: string;
  phone: string;
  lastLogged?: string;
  nameTitle: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  mobilePhone?: string;
  fax?: string;
  country: string;
  postcode: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
};

export const formatUserData = (userData: ISignup) => {
  const data: UserFormatData = {
    email: userData.email.value,
    password: userData.password.value,
    countryCode: userData.phone.countryCode,
    phone: userData.phone.phone,
    nameTitle: userData.pesonalData.title,
    firstName: userData.pesonalData.firstName,
    lastName: userData.pesonalData.lastName,
    birthDate: userData.pesonalData.birthday,
    country: userData.bussiness.country,
    postcode: userData.personalAddress.postcode,
    city: userData.personalAddress.city,
    addressLine1: userData.personalAddress.address,
    addressLine2: userData.personalAddress.addressTwo,
  };

  return data;
};

export type BusinessFormatData = {
  country: string;
  name?: string;
  registrationNumber?: string;
  importationDate?: string;
  type?: string;
  owner?: string;
};

export const formatBusinessData = (userData: ISignup, owner: string) => {
  const data: BusinessFormatData = {
    country: userData.bussiness.country,
    name: userData.bussiness.legalName,
    registrationNumber: userData.bussiness.registNumber,
    importationDate: userData.bussiness.date,
    type: userData.bussiness.businessType,
    owner: owner,
  };

  return data;
};

// ENV
export const API_URL = process.env.API_URL;
export const IMG_STORAGE = process.env.IMG_STORAGE;
export const DEV = process.env.DEV;
export const REACT_APP_GOOGLE_MAPS_API_KEY =
  process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
