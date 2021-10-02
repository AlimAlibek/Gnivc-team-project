import { Button } from '@ff/ui-kit';
import React from 'react';

const AddFile: React.FC = () => (
  <div className="buttons-row">
    <Button variant="outline" type="primary">
      <div className="button-with-icon">
        <i className="icon-0010-circle-plus" />
        <span>Добавить файл</span>
      </div>
    </Button>
  </div>
);

export default AddFile;
