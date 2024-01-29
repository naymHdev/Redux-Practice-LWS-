import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div className=" w-11/12 mx-auto">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;