import { useLocation } from "react-router-dom";

export const useBreadcrumbs = () => {
    const location = useLocation();
    return { location }
}