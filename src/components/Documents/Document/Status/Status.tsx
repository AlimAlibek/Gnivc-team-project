import React from 'react';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Message from '@ff/ui-kit/lib/esm/components/Message';

import classes from './Status.module.scss';
import getIcon from '../../../../utils/getIcon';
import getType from '../../../../utils/getType';
import getColorAndStatus from '../../../../utils/getColorAndStatus';
import Version from '../../../../models/Version';

type StatusProps = {
  version?: Version;
};

const Status: React.FC<StatusProps> = ({ version }) => {
  const [color, translatedStatus] = getColorAndStatus(version?.status);
  const type = getType(color);
  const icon = getIcon(version?.status);

  return (
    <div className={classes.component}>
      <Message type={type} className={classes.message}>
        <div className={classes.content}>
          {/* prettier-ignore */}
          <Typography className={classes.icon} color={color}>{icon}</Typography>
          {/* prettier-ignore */}
          <Typography className={classes.status} color={color}>{translatedStatus}</Typography>
        </div>
      </Message>
      <Typography className={classes.creation}>
        Версия создана:
        {/* prettier-ignore */}
        <Typography className={classes.date}>{version?.approvedStartAt}</Typography>
      </Typography>
    </div>
  );
};
export default Status;
