import Header from "../../components/Header"
import { SIDEBAR_ITEMS_PT_BR } from "../../data/sidebarItems";

const Settings = () => {
    return (
        <>
            <Header title={SIDEBAR_ITEMS_PT_BR.settings.name} />
        </>
    );
}

export default Settings