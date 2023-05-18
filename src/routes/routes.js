import AddCategory from "../pages/private/categories/AddCategory";
import CategoryPage from "../pages/private/categories/CategoryPage";

export const routes = [
    {
        path:'/admin/categories',
        element:<CategoryPage/>
    },
    {
        path:'/admin/categories/add',
        element:<AddCategory/>
    }
]