import React from "react";
import { Route, Switch } from "react-router-dom";
import "@ff/ui-kit/lib/styles/fns.theme.css";

import Home from "../routes/Home";
import classes from "./App.module.scss";
import "../../styles/fonts.scss";
import Doc from "../Documents/Doc";

const NotFound = React.lazy(() => import("../routes/NotFound"));

const App: React.FC = () => (
  <div className={classes.component}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/documents/:title" component={Doc} />
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default App;
