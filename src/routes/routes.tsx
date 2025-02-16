import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Paths from './paths';
import MainLayout from '../layouts/MainLayout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import OverviewPage from '../pages/OverviewPage/OverviewPage';
import ProductPage from '../pages/ProductPage/ProductPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={Paths.home} element={<OverviewPage />} />
                    <Route path={Paths.products} element={<ProductPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;