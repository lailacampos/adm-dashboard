import Header from "../../components/Header"
import { useSidebarItems } from "../../data/sidebarItems";

const Analytics = () => {

    const sidebarItems = useSidebarItems();

    return (
        <>
            <Header title={sidebarItems.analytics.name} />
        </>
    );
}

export default Analytics