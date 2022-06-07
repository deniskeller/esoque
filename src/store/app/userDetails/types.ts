export interface IUserDetails {
  details: UserData;

  success: boolean;
  fieldErrors: {
    email: string;
    phone: string;
  };

  currentFirm: {
    title: string;
    value: string;
  };
}

export type ISetEmailError = {
  errors?: {
    phone?: string;
    email?: string;
  };
};
export type ISetSuccess = {
  success: boolean;
};

export type ISetUserDetails = {
  details: UserData;
};

export type UserData = {
  id: string;
  title: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  lastLogged: string;
  email: string;
  countryCode: string;
  telephoneNumber: string;

  status: boolean;
  firm: string;
  firmName: string;
  canManageUsers: boolean;

  permission: string;
};
export type ISetCuurentFirm = {
  currentFirm: CurrentFirm;
};

export type CurrentFirm = {
  title: string;
  value: string;
};

export type IGetUserDetails = {
  cookie: string;
  id: string | string[];
  firm?: string | string[];
};

export type IGetFirmData = {
  cookie: string;
  firm: string | string[];
};

export type IFirms = {
  firmName: string;
  firmList: { title: string; value: string }[] | [];
};

export type IUserDetailsData = {
  title: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  telephoneNumber: string;
  permission: string;
  canManageUsers: boolean;
  firm?: string;

  status?: string;
};

export type ISendUserDetails = IUserDetailsData;

export type IUpdateUserDetials = {
  details: ISendUserDetails;
  id: string;
};

// export type ISendUserDetails = UserData;
