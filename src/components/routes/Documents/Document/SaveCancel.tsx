import React from 'react';
import { Button } from '@ff/ui-kit';

const SaveCancel: React.FC = () => (
  <div className="buttons-row">
    <Button variant="fill" type="primary">
      Сохранить
    </Button>
    <Button variant="outline" type="primary">
      Отмена
    </Button>
  </div>
);
export default SaveCancel;
