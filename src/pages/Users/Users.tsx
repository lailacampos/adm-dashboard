import Header from '../../components/Header'
import { useSidebarItems } from "../../data/sidebarItems";

const Users = () => {

    const sidebarItems = useSidebarItems();

    return (
        <>
            <Header title={sidebarItems.users.name} />
        </>
    );
}

export default Users