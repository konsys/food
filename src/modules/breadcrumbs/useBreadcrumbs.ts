import { useStore } from "effector-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { $breadcrumsStore } from "./model";

export const useBreadcrumbs = () => {
    const location = useLocation();
    const store = useStore($breadcrumsStore);

    const splitted = location.pathname.split('/');


    useEffect(() => {

        splitted.map(v => store.find)
        console.log(111111111111, splitted);
    }, [splitted, store])



    return { location }

}