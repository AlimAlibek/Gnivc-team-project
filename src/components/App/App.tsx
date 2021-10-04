import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Sidebar, SystemName } from '@ff/ui-kit';

import '@ff/ui-kit/lib/styles/fns.theme.css';
import Starter from '../routes/OpenScreen';
import '../../styles/fonts.scss';
import classes from './App.module.scss';
import logo from './assets/gnivc-logo.png';
import Main from '../layouts/Main';
import DocumentItem from '../Documents/Document';

const NotFound = React.lazy(() => import('../routes/NotFound'));

const App: React.FC = () => (
  <div className={classes.component}>
    <Main>
      <Sidebar>
        <SystemName logo={logo} />
      </Sidebar>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/documents" />} />
        <Route exact path="/documents" component={Starter} />
        <Route exact path="/documents/:id" component={DocumentItem} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Main>
  </div>
);

export default App;
