import React from "react";
import { useAuth } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // get the user info from AuthContext
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
