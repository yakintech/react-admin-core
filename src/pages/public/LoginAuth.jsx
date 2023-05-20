import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

function LoginAuth({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return <Navigate to="/" />;
}

export default LoginAuth;
