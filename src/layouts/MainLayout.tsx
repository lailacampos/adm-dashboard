import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="p-6 flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
            <Outlet />
        </div>
    );
};

export default MainLayout;