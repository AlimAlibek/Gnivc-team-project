import React from 'react';

const Status: React.FC = () => (
  <>
    <div className={`status status_${'draft'} minor-font`}>
      <i className="icon-0018-forbid-2" />
      <span>Черновик</span>
    </div>
    <div className="minor-font">
      Начало согласования: <span>--</span>
    </div>
    <div className="minor-font">
      Завершение: <span>--</span>
    </div>
  </>
);
export default Status;
