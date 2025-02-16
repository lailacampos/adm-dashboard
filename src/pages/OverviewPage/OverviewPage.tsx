import { useLocation } from "react-router-dom";
import Paths from "../../routes/paths";
import StatCardContainer from "../../components/StatCardContainer";
import React from "react";

type RouteKey = keyof typeof Paths;

const OverviewPage: React.FC = () => {

    const location = useLocation();
    const routeKey: RouteKey = (location.pathname === "/" ? "overview" :
        Object.keys(Paths).find(key => Paths[key] === location.pathname as RouteKey) || "overview"
    );

    return (
        <>
            <div className="flex-1 overflow-auto relative z-10">
                <main className="max-w-7xl mx-auto py-20 px-4 lg:px-8">
                    <StatCardContainer category={routeKey} />
                </main>
            </div>
        </>
    );
}

export default OverviewPage;