import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

// in react-router@6 implementation is changed now you can fetch data and render
// instead of render and fetch

// here children means the app layout will be shown in every route because it is layout and than in that we are showing different route
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // This will work as wild card
    // If any error happens while loading or invalida route
    // Following page will be shown
    // now in order to show it error will bubble up so it will show error screen with out app layout
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/cart/new", element: <CreateOrder /> },
      { path: "/order/:orderId", element: <Order /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
