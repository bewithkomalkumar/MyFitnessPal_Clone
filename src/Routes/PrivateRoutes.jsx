import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const [login, setlogin] = useState(false);
  const userID = localStorage.getItem("fitUserID");

  useEffect(() => {
    if (userID) {
      setlogin(true);
    }
  }, [userID]);

  if (userID) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoutes;
