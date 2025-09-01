import FullPageLoader from "@/components/FullPageLoader";
import { useGetMeQuery } from "@/redux/features/auth.api";
import type { ComponentType } from "react";
import { Navigate, useLocation } from "react-router";

export const withAuth = (Component: ComponentType) => {
    return () => {
        const { data, isLoading } = useGetMeQuery(undefined);
        const location = useLocation();

        const email = data?.data.email;

        if (isLoading) {
            return <FullPageLoader />;
        }

        if (!email) {
            return <Navigate to="/login" state={location.pathname} replace />;
        }

        return <Component />;
    };
}