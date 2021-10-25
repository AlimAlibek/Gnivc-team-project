import React from 'react';
import Button from '@ff/ui-kit/lib/Button';

import classes from './AddFile.module.scss';

const AddFile: React.FC<{ onClick: () => void }> = ({ onClick }) =>

  (
    <div className={classes.addFile}>
      <Button onClick={onClick} variant="outline" type="primary">
        <div className={classes.button} role="application">
          <i className="sr-0010-circle-plus" />
          <span>Добавить файл</span>
        </div>
      </Button>
    </div>
  );
  
export default AddFile;
