import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';

import classes from './Status.module.scss';
import documentVersionStore from '../../../../stores/documentVersionStore';
import getColorAndStatus from '../../../../utils/getColorAndStatus';
import ColorAndStatus from '../../../../models/types/ColorAndStatus';
import StatusIcon from './StatusIcon';

const Status: React.FC = observer(() => {
  const [colorAndStatus, setColorAndStatus] = useState<ColorAndStatus>();
  const [statusClass, setStatusClass] = useState('');
  const { version } = documentVersionStore;

  useEffect(() => {
    version && setColorAndStatus(getColorAndStatus(version.status));
    version && setStatusClass(`status_${version.status}`);
  }, [version]);

  return (
    <>
      <div
        className={`${classes.status} ${classes.minorfont} ${classes[statusClass]}`}
      >
        <StatusIcon status={version?.status} />
        <span> { colorAndStatus?.[1] } </span>
      </div>
      <div className={classes.minorfont}>
        Начало согласования: <span className={classes.commonfont}>
          {version?.approvedStartAt}
                             </span>
      </div>
      <div className={classes.minorfont}>
        Завершение: <span className={classes.commonfont}>
          {version?.approvedEndAt}
                    </span>
      </div>
    </>
  );
});
export default Status;
