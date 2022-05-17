import { UserRoles } from "types/user";

export type IUser = {
  isAuthenificated: boolean | null;
  role: UserRoles | null;
  userData: {
    id: string;
    email: string;
    countryCode: string;
    phone: string;
    lastLogged: string;
    nameTitle: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    mobilePhone: string;
    fax: string;
    country: string;
    postcode: string;
    city: string;
    addressLine1: string;
    addressLine2: string;
  };
};

export type SetUser = {
  isAuthenificated: boolean | null;
};

export type SetRole = {
  role: UserRoles | null;
};

export type SetUserData = {
  userData: {
    id: string;
    email: string;
    countryCode: string;
    phone: string;
    lastLogged: string;
    nameTitle: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    mobilePhone: string;
    fax: string;
    country: string;
    postcode: string;
    city: string;
    addressLine1: string;
    addressLine2: string;
  };
};

export type Logout = {};
