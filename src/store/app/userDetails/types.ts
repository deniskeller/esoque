export interface IUserDetails {
  details: UserData;
  currentFirm: {
    title: string;
    value: string;
  };
}

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
  dataEntry: boolean;
  submitter: boolean;
  readOnly: boolean;
  status: boolean;
  firm: string;
  firmName: string;
  canManageUsers: boolean;
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
};

export type ISendUserDetails = IUserDetailsData;

// export type ISendUserDetails = UserData;
