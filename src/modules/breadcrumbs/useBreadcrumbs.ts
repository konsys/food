import { useLocation } from "react-router-dom";

const breadcrumbs = {

}
export const useBreadcrumbs = () => {
    const location = useLocation();
    console.log(11111111111, location.pathname.split('/'))
    return { location }
}