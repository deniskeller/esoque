export type UserManagmentData = {
  count: number;
  data: UserData[];
  field: null | undefined;
  limit: number;
  order: string;
  page: number;
  skip: number;
  totalPage: number;
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
