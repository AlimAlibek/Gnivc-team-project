import React from 'react';

import Status from '../models/Status';

const getIcon = (status: Status | undefined): JSX.Element => {
  switch (status) {
    case Status.APPROVING:
    case Status.REFACTORING:
      return <i className="sr-0093-refresh-alert " />;
    case Status.APPROVED:
      return <i className="sr-0008-circle-check" />;
    default:
      return <i className="sr-0018-forbid-2" />;
  }
};

export default getIcon;
