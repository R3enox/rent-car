import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import * as ROUTES from './constans/constans';

const HomePage = lazy(() => import('pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage.jsx'));
const FavoritesPage = lazy(() =>
  import('pages/FavoritesPage/FavoritesPage.jsx')
);

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: ROUTES.CATALOG_ROUTE,
    element: <CatalogPage />,
  },
  {
    path: ROUTES.FAVORITES_ROUTE,
    element: <FavoritesPage />,
  },
];

function App() {
  return (
    <SharedLayout>
      <Suspense fallback={null}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </SharedLayout>
  );
}
export default App;
