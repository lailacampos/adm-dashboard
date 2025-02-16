import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Paths from './paths';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import OverviewPage from '../pages/OverviewPage/OverviewPage';
import ProductPage from '../pages/ProductPage/ProductPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path={Paths.home} element={<OverviewPage />} />
                <Route path={Paths.products} element={<ProductPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;