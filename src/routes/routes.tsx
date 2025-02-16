import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Paths from './paths';
import MainLayout from '../layouts/MainLayout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import OverviewPage from '../pages/OverviewPage/OverviewPage';
import ProductsPage from '../pages/ProductPage/ProductsPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={Paths.home} element={<OverviewPage />} />
                    <Route path={Paths.products} element={<ProductsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;