import React from 'react';
import Button from '@ff/ui-kit/lib/Button';

import classes from '../../DocumentItem.module.scss';

const SaveCancel: React.FC = () => (
  <div className={classes.buttonsRow}>
    <Button variant="fill" type="primary">
      Сохранить
    </Button>
    <Button variant="outline" type="primary">
      Отмена
    </Button>
  </div>
);
export default SaveCancel;
