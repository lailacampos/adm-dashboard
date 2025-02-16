import { useLocation } from "react-router-dom";
import Paths from "../../routes/paths";
import { StatCardContainer, SalesOverviewChart } from "../../components";

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

                    {/* CHARTS */}
                    <div className="grid grid-cols-1 lg-grid-cols-2 gap-8">

                    </div>
                </main>
            </div>
        </>
    );
}

export default OverviewPage;