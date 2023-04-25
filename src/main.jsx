import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Oders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import CheckOut from './components/CheckOut/CheckOut';
import ErrorPage from './components/ErrorPage/ErrorPage';
import SingUp from './components/SingUp/SingUp';
import AuthProviders from './components/providers/AuthProviders';
import PrivateRoutes from './routes/PrivateRoutes';


const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path:'orders',
          element: <Orders></Orders>,
          loader: cartProductsLoader
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'checkout',
          element: <PrivateRoutes><CheckOut></CheckOut> </PrivateRoutes>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'singUp',
          element: <SingUp></SingUp>
        },
        {
          path: '*',
          element: <ErrorPage></ErrorPage>
        },
      ]
    }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProviders>
     <RouterProvider router={router} />
     </AuthProviders>
  </React.StrictMode>,
)
