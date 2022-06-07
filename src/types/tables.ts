export type UserManagmentData = {
  count: number;
  data: UserData[];
  field: null | undefined;
  limit: number;
  order: string;
  page: number;
  skip: number;
  totalPage: number;
  availablePages: Array<number | string>;
};

export type Pagination = {};

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
};

export type BussinessData = {
  country: string;
  id: string;
  importationDate: string;
  name: string;
  owner: string;
  principial: UserData;
  registrationNumber: string;
  type: string;
};

export type IncorporationData = {
  session_id: string;
  js: string;
  cn: string;
  userLink: string;
  status: string;
  created_at: string;
  orderList: string;
  email: string;
};
