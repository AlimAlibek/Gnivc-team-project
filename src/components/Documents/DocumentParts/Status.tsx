import React from 'react';

import classes from '../../Documents/Document/DocumentItem.module.scss';

const Status: React.FC = () => (
  <>
    <div className={`${classes.status} ${classes.status_draft}  ${classes.minorfont}`}>
      <i className="icon-0018-forbid-2" />
      <span>Черновик</span>
    </div>
    <div className={classes.minorfont}>
      Начало согласования: <span>--</span>
    </div>
    <div className={classes.minorfont}>
      Завершение: <span>--</span>
    </div>
  </>
);
export default Status;
