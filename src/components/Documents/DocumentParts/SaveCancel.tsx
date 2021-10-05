import React from 'react';
import { Button } from '@ff/ui-kit';

import classes from '../../Documents/Document/Document.module.scss';

const SaveCancel: React.FC = () => (
  <div className={classes.buttons_row}>
    <Button variant="fill" type="primary">
      Сохранить
    </Button>
    <Button variant="outline" type="primary">
      Отмена
    </Button>
  </div>
);
export default SaveCancel;
