import Header from "../../components/Header";
import { useSidebarItems } from "../../data/sidebarItems";

const OverviewPage = () => {

    const sidebarItems = useSidebarItems();

    return (
        <>
            <Header title={sidebarItems.overview.name} />
        </>
    );
}

export default OverviewPage;