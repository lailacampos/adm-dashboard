import Header from '../../components/Header'
import { SIDEBAR_ITEMS_PT_BR } from '../../data/sidebarItems';

const Users = () => {
    return (
        <>
            <Header title={SIDEBAR_ITEMS_PT_BR.users.name} />
        </>
    );
}

export default Users