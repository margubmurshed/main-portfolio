export interface ILoginInfo {
    email: string;
    password: string;
}

export interface IUpdateUserInfo {
    _id: string,
    name?: string
    email?: string
    password?: string
    designation: string;
    picture: string;
}


export interface User {
  _id: string
  name: string
  email: string
  designation: string;
  picture: string;
}