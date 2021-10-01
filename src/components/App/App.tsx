import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import '@ff/ui-kit/lib/styles/fns.theme.css';

import '../../styles/fonts.scss';
import Home from '../routes/Home';
import classes from './App.module.scss';
import Doc from '../Documents/Document/Document';

const NotFound = React.lazy(() => import('../routes/NotFound'));

const App: React.FC = () => (
  <div className={classes.component}>
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/documents" />} />
      <Route exact path="/documents" component={Home} />
      <Route exact path="/documents/:id" component={Doc} />
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default App;
