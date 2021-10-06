import React from 'react';
import { Button } from '@ff/ui-kit';

const ApproveReturn: React.FC = () => (
  <div className="buttons-row">
    <Button variant="fill" type="primary">
      Согласовать
    </Button>
    <Button variant="outline" type="primary">
      Вернуть на доработку
    </Button>
  </div>
);
export default ApproveReturn;
