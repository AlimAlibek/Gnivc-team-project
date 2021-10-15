import Button from '@ff/ui-kit/lib/Button';
import React from 'react';

import classes from '../../DocumentItem.module.scss';

const Decide: React.FC = () => (
  <div className={classes.buttonsRow}>
    <Button variant="fill" type="primary">
      Отправить на согласование
    </Button>
    <Button variant="outline" type="primary">
      Удалить
    </Button>
  </div>
);
export default Decide;
