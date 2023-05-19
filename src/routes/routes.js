import AddCategory from "../pages/private/categories/AddCategory";
import CategoryPage from "../pages/private/categories/CategoryPage";
import LoginPage from "../pages/public/LoginPage";
import OrderPage from "../pages/private/orders/OrderPage";
import Dashboard from "../pages/private/dashboard";
import AuthProvider from "../AuthProvider";
import LoginAuth from "../pages/public/LoginAuth";

export const routes = [
  {
    path: "/admin/categories",
    element: (
      <AuthProvider>
        <CategoryPage />
      </AuthProvider>
    ),
  },
  {
    path: "/admin/categories/add",
    element: (
      <AuthProvider>
        <AddCategory />,
      </AuthProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <LoginAuth>
        <LoginPage />
      </LoginAuth>
    ),
  },
  {
    path: "/",
    element: (
      <AuthProvider>
        <Dashboard />
      </AuthProvider>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <AuthProvider>
        <OrderPage />
      </AuthProvider>
    ),
  },
];
