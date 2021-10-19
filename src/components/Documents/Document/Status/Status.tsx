import React from 'react';
import { observer } from 'mobx-react';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Message from '@ff/ui-kit/lib/esm/components/Message';

import classes from './Status.module.scss';
import getIcon from '../../../../utils/getIcon';
import getType from '../../../../utils/getType';
import getColorAndStatus from '../../../../utils/getColorAndStatus';
import documentStore from '../../../../stores/documentStore';

const Status: React.FC = observer(() => {
  const { version } = documentStore;

  const [color, translatedStatus] = getColorAndStatus(version?.status);
  const type = getType(color);
  const icon = getIcon(version?.status);

  return (
    <div className={classes.component}>
      <Message type={type} className={classes.message}>
        <div className={classes.content}>
          <Typography className={classes.icon} color={color}>
            {icon}
          </Typography>
          <Typography className={classes.status} color={color}>
            {translatedStatus}
          </Typography>
        </div>
      </Message>
      <Typography className={classes.creation}>
        Версия создана:
        <Typography className={classes.date}>
          {version?.approvedStartAt}
        </Typography>
      </Typography>
    </div>
  );
});
export default Status;
