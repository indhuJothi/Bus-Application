import React from "react";
import { Route, Redirect } from "react-router-dom";

function isLogin() {
  if (localStorage.getItem("name")) {
    return true;
  }
}

console.log(isLogin);
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
