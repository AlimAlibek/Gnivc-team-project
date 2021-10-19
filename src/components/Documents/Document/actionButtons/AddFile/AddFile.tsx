import Button from '@ff/ui-kit/lib/Button';
import React from 'react';

import classes from '../../DocumentItem.module.scss';

const AddFile: React.FC = () => (
  <div className={classes.row}>
    <Button variant="outline" type="primary">
      <div className={classes.buttonWithIcon}>
        <i className="sr-0010-circle-plus" />
        <span>Добавить файл</span>
      </div>
    </Button>
  </div>
);

export default AddFile;
