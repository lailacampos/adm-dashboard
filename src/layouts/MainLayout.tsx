import { Outlet } from "react-router-dom";
import ThemeSwitcher from "../components/ThemeSwitcher";

const MainLayout = () => {
    return (
        <div className="p-6 flex h-screen overflow-hidden
            bg-gray-100 text-gray-900
            dark:bg-gray-900 dark:text-gray-100">
                <div className="fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br
                        dark:from-gray-950 dark:via-gray-800 dark:to-gray-950 dark:opacity-80" />
                    <div className="absolute inset-0 backdrop-blur-sm" />
                </div>
            <ThemeSwitcher />
            <Outlet />
        </div>
    );
};

export default MainLayout;