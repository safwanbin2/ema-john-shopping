import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { ProductsAndCartLoader } from './loaders/ProdcutsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      {
        path: '/',
        loader: ProductsAndCartLoader,
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        loader: ProductsAndCartLoader,
        element: <Orders></Orders>
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]}
  ])
  return (
    <div>
      

      <RouterProvider
        router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
