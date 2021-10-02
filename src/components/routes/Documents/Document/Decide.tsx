import { Button } from '@ff/ui-kit';
import React from 'react';

const Deside: React.FC = () => (
  <div className="buttons-row">
    <Button variant="fill" type="primary">
      Отправить на согласование
    </Button>
    <Button variant="outline" type="primary">
      Удалить
    </Button>
  </div>
);
export default Deside;
