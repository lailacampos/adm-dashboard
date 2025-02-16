import Header from "../../components/Header";
import { SIDEBAR_ITEMS_PT_BR } from "../../data/sidebarItems";

const ProductsPage = () => {
    return (
        <>
            <Header title={SIDEBAR_ITEMS_PT_BR.products.name} />
        </>
    );
}

export default ProductsPage;