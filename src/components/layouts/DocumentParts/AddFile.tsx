import { Button } from '@ff/ui-kit';
import React from 'react';

import classes from '../../Documents/Document/Document.module.scss';

const AddFile: React.FC = () => (
  <div className={classes.buttons_row}>
    <Button variant="outline" type="primary">
      <div className={classes.button_with_icon}>
        <i className="icon-0010-circle-plus" />
        <span>Добавить файл</span>
      </div>
    </Button>
  </div>
);

export default AddFile;
