import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute() {
  const { isConnected } = useAuth();
  const location = useLocation();

  if (!isConnected) {
    // Renvoie vers le login, en gardant la cible pour y retourner après login
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
