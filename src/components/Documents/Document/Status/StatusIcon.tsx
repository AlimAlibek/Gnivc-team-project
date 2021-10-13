import React from 'react';

type IconProps = {
  status: string | undefined;
};
const StatusIcon: React.FC<IconProps> = ({ status }) => {
  let el = <i className="sr-0018-forbid-2" />;
  switch (status) {
    case 'approving':
    case 'refactoring':
      el = <i className="sr-0093-refresh-alert " />;
      break;
    case 'approved':
      el = <i className="sr-0008-circle-check" />;
      break;
    default: break;
  }
  return el;
};

export default StatusIcon;
