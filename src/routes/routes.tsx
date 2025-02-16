import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Paths from './paths';
import MainLayout from '../layouts/MainLayout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import OverviewPage from '../pages/OverviewPage/OverviewPage';
import ProductsPage from '../pages/ProductPage/ProductsPage';
import Users from '../pages/Users/Users';
import Sales from '../pages/Sales/Sales';
import Orders from '../pages/Orders/Orders';
import Analytics from '../pages/Analytics/Analytics';
import Settings from '../pages/Settings/Settings';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={Paths.home} element={<OverviewPage />} />
                    <Route path={Paths.products} element={<ProductsPage />} />
                    <Route path={Paths.users} element={<Users />} />
                    <Route path={Paths.sales} element={<Sales />} />
                    <Route path={Paths.orders} element={<Orders />} />
                    <Route path={Paths.analytics} element={<Analytics />} />
                    <Route path={Paths.settings} element={<Settings />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;