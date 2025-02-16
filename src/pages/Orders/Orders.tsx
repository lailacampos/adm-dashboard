import Header from "../../components/Header"
import { useSidebarItems } from "../../data/sidebarItems";

const Orders = () => {

    const sidebarItems = useSidebarItems();

    return (
        <>
            <Header title={sidebarItems.orders.name} />
        </>
    );
}

export default Orders