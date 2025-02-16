import { Outlet } from "react-router-dom";
import ThemeSwitcher from "../components/ThemeSwitcher";

const MainLayout = () => {
    return (
        <div className="p-6 flex h-screen overflow-hidden
            bg-gray-100 text-gray-900
            dark:bg-gray-900 dark:text-gray-100">
            <ThemeSwitcher />
            <Outlet />
        </div>
    );
};

export default MainLayout;