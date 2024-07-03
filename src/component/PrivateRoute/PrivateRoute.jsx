/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { myUser, loading } = useContext(AuthContext);

  if (loading) {
    if (!myUser) {
      return <Navigate to="/login"></Navigate>;
    } else {
      return (
        <p>
          <span className="loading loading-spinner loading-lg"></span>
        </p>
      );
    }
  }
  if (myUser) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
