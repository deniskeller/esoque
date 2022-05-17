export interface ILogin {
  error: string;
  isSuccess: boolean | null;
}

export type StartLogin = {
  email: string;
  password: string;
};
export type SetLogin = {
  error: string;
  isSuccess: boolean | null;
};
