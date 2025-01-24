import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>
    );
}