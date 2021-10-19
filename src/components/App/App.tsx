import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Sidebar from '@ff/ui-kit/lib/Sidebar';
import SystemName from '@ff/ui-kit/lib/SystemName';
import '@ff/ui-kit/lib/styles/fns.theme.css';
import Tabs from '@ff/ui-kit/lib/Tabs';
import Tab from '@ff/ui-kit/lib/Tabs';

import classes from './App.module.scss';
import '../../styles/fonts.scss';
import Header from '../layouts/Header';
import Main from '../layouts/Main';
import Home from '../routes/Home';
import DocumentItem from '../Documents/Document';
import logo from './assets/gnivc-logo.png';

const NotFound = React.lazy(() => import('../routes/NotFound'));

const App: React.FC = () => (
  <div className={classes.component}>
    <Header />
    <Main>
      <Sidebar>
        <SystemName logo={logo} />
      </Sidebar>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/documents/:id" component={DocumentItem} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Main>
  </div>
);

export default App;
