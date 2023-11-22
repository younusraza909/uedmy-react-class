import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as orderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
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
      { path: "/order/new", element: <CreateOrder />, action: orderAction },
      {
        path: "/order/:orderId",
        element: <Order />,
        // if we don't pass params still orderLoader function will have access to this params
        loader: ({ params }) => orderLoader(params.orderId),
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
