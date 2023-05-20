import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

function AuthProvider({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default AuthProvider;
