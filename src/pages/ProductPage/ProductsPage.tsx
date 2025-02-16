import Header from "../../components/Header";
import { useSidebarItems } from "../../data/sidebarItems";

const ProductsPage = () => {

    const sidebarItems = useSidebarItems();

    return (
        <>
            <Header title={sidebarItems.products.name} />
        </>
    );
}

export default ProductsPage;