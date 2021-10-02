import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Sidebar, SystemName } from '@ff/ui-kit';
import '@ff/ui-kit/lib/styles/fns.theme.css';

import '../../styles/fonts.scss';
import classes from './App.module.scss';
import logo from './assets/gnivc-logo.png';
import Main from '../layouts/Main';
import Documents from '../routes/Documents/Documents';
import Document from '../routes/Documents/Document';

const NotFound = React.lazy(() => import('../routes/NotFound'));

const App: React.FC = () => (
  <div className={classes.component}>
    <Main>
      <Sidebar>
        <SystemName logo={logo} />
      </Sidebar>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/documents" />} />
        <Route exact path="/documents" component={Documents} />
        <Route exact path="/documents/:id" component={Document} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Main>
  </div>
);

export default App;
