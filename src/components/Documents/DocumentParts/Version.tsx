import React from 'react';

import classes from '../Document/DocumentItem.module.scss';

const Version: React.FC = () => (

  <div className={classes.version}>

    <div className={`${classes.version__title} ${classes.block__row}`}>
      <i className="icon-0117-arrow-left" />
      <span>Версия пакета №{1} </span>
      <i className="icon-0007-chevron-down" />
    </div>
    {
        // здесь будет кастомный селект с версиями
      }
  </div>

);
export default Version;
