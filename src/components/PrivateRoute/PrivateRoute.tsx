import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

type PrivateRouteProps = {
  exact?: boolean;
  path: string;
  component: React.ComponentType<RouteProps>;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => (
  <div></div>
  // <Route
  //   {...rest}
  //   render={(props) =>
  //     auth.isAuthenticated ? (
  //       <Component {...props} />
  //     ) : (
  //       <Redirect
  //         to={{
  //           pathname: "/login",
  //           state: { from: props.location },
  //         }}
  //       />
  //     )
  //   }
  // />
);

export default PrivateRoute;
