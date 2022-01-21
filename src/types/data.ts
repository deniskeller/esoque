export interface IPersonalData {
  sex: string;
  firstName: string;
  lastName: string;
  date: number;
}

export interface IPersonalAdress {
  country: string;
  postcode: '';
  city: string;
  adress1: string;
  adress2: string;
}

export interface IBusiness {
  countryOfIncorporation: string;
  legalName: string;
  registerNumber: number;
  incorporationDate: number;
  businessType: string;
}

export interface IValues {
  email: string;
  phone: number;
  password: string;
  personalData: IPersonalData;
  personalAdress: IPersonalAdress;
  business: IBusiness;
}
