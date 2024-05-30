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
      { path: "/categories", element: <CategoriesPage /> },
      { path: "/all_products", element: <AllProductsPage /> },
      { path: "/products", element: <CategoryProductsPage /> },
      { path: "/products/product_item", element: <ProductPage /> },
      { path: "/shopping_cart", element: <ShoppingCartPage /> },
      { path: "/all_sales", element: <DiscountPage /> },
      { path: "/favorite_products", element: <FavoritesPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);