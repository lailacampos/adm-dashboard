import Header from "../../components/Header";
import { SIDEBAR_ITEMS_PT_BR } from "../../data/sidebarItems";

const OverviewPage = () => {
    return (
        <>
            <Header title={SIDEBAR_ITEMS_PT_BR.overview.name} />
        </>
    );
}

export default OverviewPage;