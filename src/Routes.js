import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product-list",
    element: <ProductList/>,
  },
  {
    path: "/product-details/:productId" ,
    element: <ProductDetails/>,
  }


]);
export default Routes;
