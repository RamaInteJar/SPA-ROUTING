import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyHomePage from "./pages/MyHomePage";
import Products from "./pages/ProductsPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      { path: "/", element: <MyHomePage /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
