import Header from "../../components/Header"
import { useSidebarItems } from "../../data/sidebarItems";

const Settings = () => {

    const sidebarItems = useSidebarItems();

    return (
        <>
            <Header title={sidebarItems.settings.name} />
        </>
    );
}

export default Settings