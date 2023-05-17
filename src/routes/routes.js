import AddCategory from "../pages/private/AddCategory";
import CategoryPage from "../pages/private/CategoryPage";

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