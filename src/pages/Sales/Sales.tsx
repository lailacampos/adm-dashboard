import Header from "../../components/Header"
import { useSidebarItems } from "../../data/sidebarItems";

const Sales = () => {

    const sidebarItems = useSidebarItems();

    return (
        <>
            <Header title={sidebarItems.sales.name} />
        </>
    );
}

export default Sales