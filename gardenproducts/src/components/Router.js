import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import AllProductsPage from "./pages/AllProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import ProductPage from "./pages/ProductPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import FavoritesPage from "./pages/FavoritesPage";
import DiscountPage from "./pages/DiscountPage";


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/about", element: <CategoriesPage /> },
      { path: "/about", element: <AllProductsPage /> },
      { path: "/contacts", element: <CategoryProductsPage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/products/:id", element: <ShoppingCartPage /> },
      { path: "/products/:id", element: <DiscountPage /> },
      { path: "/products/:id", element: <FavoritesPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);