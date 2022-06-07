export interface ICompanyDetails {
  success: boolean;
  business: IBusiness;
  errors: {
    name: string;
    registrationNumber: string;
    importationDate: string;
  };
}
export type IGetBusiness = {};

export type ISetBusiness = {
  business: IBusiness;
};

export type ISendBusiness = {
  business: IBusiness;
  id?: string;
};

export type ISetSuccess = {
  success: boolean;
};

export type ISetError = {
  errors?: {
    id?: string;
    country?: string;
    name?: string;
    registrationNumber?: string;
    importationDate?: string;
    type?: string;
    owner?: string;
    principial?: string;
    address?: string;
  };
};

export type IBusiness = {
  id?: string;
  country: string;
  name: string;
  registrationNumber: string;
  importationDate: string;
  type: string;
  owner?: string;
  principial?: string;
  address: string;
};
