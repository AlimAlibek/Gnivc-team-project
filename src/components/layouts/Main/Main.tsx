import React from 'react';

import classes from './Main.module.scss';

const Main: React.FC = (props) => (
  <main className={classes.component}>
    {props.children}
  </main>
);

export default Main;
