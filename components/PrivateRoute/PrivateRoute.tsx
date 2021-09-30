import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import auth from '../../stores/auth';

type PrivateRouteProps = {
  exact?: boolean;
  path: string;
  component: React.ComponentType<RouteProps>;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (auth.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))}
  />
);

export default PrivateRoute;
