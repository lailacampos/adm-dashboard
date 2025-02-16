import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden
            bg-gray-50 text-gray-800
            dark:bg-gray-900 dark:text-gray-100">
                <div className="fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br
                        dark:from-gray-950 dark:via-gray-800 dark:to-gray-950 dark:opacity-80" />
                    <div className="absolute inset-0 backdrop-blur-sm" />
                </div>
            <Navbar />
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default MainLayout;