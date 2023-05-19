import AddCategory from "../pages/private/categories/AddCategory";
import CategoryPage from "../pages/private/categories/CategoryPage";
import LoginPage from "../pages/public/LoginPage";
import OrderPage from "../pages/private/orders/OrderPage";
import Dashboard from "../pages/private/dashboard";

export const routes = [
    {
        path:'/admin/categories',
        element:<CategoryPage/>
    },
    {
        path:'/admin/categories/add',
        element:<AddCategory/>
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/',
        element:<Dashboard/>
    }
    ,
    {
        path:'/admin/orders',
        element:<OrderPage/>
    }
]