export type {
    ILoginInfo,
} from "./auth.types";

export interface IResponse<T> {
    statusCode: number,
    success: boolean,
    message: string,
    data: T
}

export interface IAllDataResponse<T> extends IResponse<T> {
    meta: {
        total: number;
        page: number;
        limit:  number;
        totalPages: number;
    }
}

export interface IUser {
    _id: string,
    name: string;
    email: string;
    password?: string;
    designation: string;
    picture?: string;
}
