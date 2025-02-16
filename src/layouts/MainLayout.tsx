import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { useSidebarItems } from "../data/sidebarItems";
import Paths from "../routes/paths";
import React from "react";

const MainLayout: React.FC = () => {

    const location = useLocation();
    const SIDEBAR_ITEMS = useSidebarItems();

    type RouteKey = keyof typeof SIDEBAR_ITEMS;

    const routeKey: RouteKey = (location.pathname === "/" ? "overview" :
        Object.keys(Paths).find(key => Paths[key] === location.pathname) as RouteKey || "overview"
    );

    return (
        <div className="flex h-screen overflow-hidden
            bg-gray-50 text-gray-800
            dark:bg-gray-900 dark:text-gray-100">
                <div className="fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br
                        dark:from-gray-950 dark:via-gray-800 dark:to-gray-950 dark:opacity-80" />
                    <div className="absolute inset-0 backdrop-blur-sm" />
                </div>
                
            <Sidebar />
            <Header title={ SIDEBAR_ITEMS[routeKey]?.name || "Dashboard" } />
            <Outlet />
        </div>
    );
};

export default MainLayout;