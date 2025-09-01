import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { IBlog, IBlogPayload } from "@/types/blog.types";

export const blogApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            addBlog: build.mutation<IResponse<IBlog>, IBlogPayload>({
                query: (blogInfo) => ({
                    url: "/blog",
                    method: "POST",
                    data: blogInfo
                }),
                invalidatesTags: ["BLOG"]
            }),
            getBlogs: build.query<IResponse<IBlog[]>, unknown>({
                query: (params) => ({
                    url: "/blog",
                    method: "GET",
                    params
                }),
                providesTags: ["BLOG"]
            }),
            updateBlog: build.mutation<IResponse<IBlog>, Partial<IBlog>>({
                query: (userInfo) => ({
                    url: `/user/${userInfo._id}`,
                    method: "PATCH",
                    data: userInfo
                }),
                invalidatesTags: ["BLOG"]
            }),
        }
    },
})

export const {
    useAddBlogMutation,
    useGetBlogsQuery,
    useUpdateBlogMutation
} = blogApi;