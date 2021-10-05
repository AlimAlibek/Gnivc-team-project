import { Button } from '@ff/ui-kit';
import React from 'react';

import classes from '../Document/Document.module.scss';;

const Deside: React.FC = () => (
  <div className={classes.buttons_row}>
    <Button variant="fill" type="primary">
      Отправить на согласование
    </Button>
    <Button variant="outline" type="primary">
      Удалить
    </Button>
  </div>
);
export default Deside;
