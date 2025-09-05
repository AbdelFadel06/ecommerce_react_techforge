import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function PublicRoute() {
  const { isConnected } = useAuth();

  if (isConnected) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}
