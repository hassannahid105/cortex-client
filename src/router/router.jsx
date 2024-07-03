import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import AllProducts from "../pages/AllProducts/AllProducts";
import ProductDetails from "../component/ProductDetails/ProductDetails";
import Update from "../pages/Update/Update";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import httpUrl from "../component/http/http";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: async () => await fetch(`${httpUrl}/myCart`),
      },
      {
        path: "/allproduct/:name",
        element: <AllProducts></AllProducts>,
        loader: async ({ params }) =>
          await fetch(`${httpUrl}/products/${params.name}`),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`${httpUrl}/product/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`${httpUrl}/product/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);
export default router;
