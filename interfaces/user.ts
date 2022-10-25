export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role?: Role;
  department?: Department;
  userInfo?: IUserInfo;
}

export interface IUserInfo {
  position: string;
  presentation: string;
  image: string;
  areaOfExpertise: string[];
  skills: string[];
  assignments: IUserAssignment;
  examenDegree: string;
}

export interface IUserAssignment {
  asgmtName: string;
  companyName: string;
  asgmtLocation: string;
  asgmtStartDate: Date;
  asgmtEndDate: Date;
  asgmtDescr: string;
}

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

export enum Department {
  ALL = "all",
  DESIGN = "design",
  FINANCE = "finance",
  MANAGMENT = "managment",
  MARKETING = "marketing",
  SALES = "sales",
  TECH = "tech",
}
