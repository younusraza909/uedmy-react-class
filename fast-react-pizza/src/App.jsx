import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';

// in react-router@6 implementation is changed now you can fetch data and render
// instead of render and fetch
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  { path: '/cart', element: <Cart /> },
  { path: '/cart/new', element: <CreateOrder /> },
  { path: '/order/:orderId', element: <Order /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
