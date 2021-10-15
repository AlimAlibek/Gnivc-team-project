import React from 'react';
import Button from '@ff/ui-kit/lib/Button';

import classes from '../../DocumentItem.module.scss';

const ApproveReturn: React.FC = () => (
  <div className={classes.buttonsRow}>
    <Button variant="fill" type="primary">
      Согласовать
    </Button>
    <Button variant="outline" type="primary">
      Вернуть на доработку
    </Button>
  </div>
);
export default ApproveReturn;
