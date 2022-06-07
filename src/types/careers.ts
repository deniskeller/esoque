
export interface IVacancy {
  uid: string,
  position: string,
  aboutRole: string,
  whatBeDoing: string,
  whatNeed: string,
  date: string,
  status: string,
  responsesCount: number,
  responses?: IVacancyResponse[]
}
export interface IVacancyResponse {
  uid: string,
  fullName: string,
  phone: string,
  email: string,
  linkedProfile: string,
  textarea: string,
  position: string,
  attachment: string,
  date: string,
  readed: boolean
}
export interface IApplyVacancy {
  fullName: string,
  phone: string,
  email: string,
  linkedProfile?: string,
  textarea?: string,
  attachment?: any,
  position: string
}