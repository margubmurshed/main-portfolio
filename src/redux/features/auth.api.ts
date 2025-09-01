import { baseApi } from "@/redux/baseApi";
import type { ILoginInfo, IResponse, IUser } from "@/types";
import type { IUpdateUserInfo } from "@/types/auth.types";

export const authApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            login: build.mutation<IResponse<IUser>, ILoginInfo>({
                query: (userInfo) => ({
                    url: "/auth/login",
                    method: "POST",
                    data: userInfo
                }),
                invalidatesTags: ["USER"]
            }),
            getMe: build.query<IResponse<IUser>, void>({
                query: () => ({
                    url: "/user/me",
                    method: "GET"
                }),
                providesTags: ["USER"]
            }),
            getMargub: build.query<IResponse<IUser>, void>({
                query: () => ({
                    url: "/user",
                    method: "GET"
                }),
                providesTags: ["USER"]
            }),
            updateUser: build.mutation<IResponse<IUser>, IUpdateUserInfo>({
                query: (userInfo) => ({
                    url: `/user/${userInfo._id}`,
                    method: "PATCH",
                    data: userInfo
                }),
                invalidatesTags: ["USER"]
            }),
        }
    },
})

export const {
    useLoginMutation,
    useGetMeQuery,
    useUpdateUserMutation,
    useGetMargubQuery
} = authApi;