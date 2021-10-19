import React from 'react';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';

import classes from './Header.module.scss';
import Login from '../../Login';

const Header: React.FC = () => (
  <header className={classes.component}>
    <div className={classes.content}>
      <Typography className={classes.title}>Паспорт системы </Typography>
      <Typography className={classes.name}>ППА-ВК</Typography>
    </div>
    <Login />
  </header>
);

export default Header;
