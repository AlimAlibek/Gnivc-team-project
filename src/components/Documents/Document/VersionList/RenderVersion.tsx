import React from 'react';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Icon from '@ff/ui-kit/lib/esm/components/Icon';
import ListItem from '@ff/ui-kit/lib/esm/components/ListItem';

import classes from './VersionList.module.scss';
import Version from '../../../../models/Version';
import getColorAndStatus from '../../../../utils/getColorAndStatus';
import documentStore from '../../../../stores/documentStore';

type RenderVersionProps = {
  version: Version;
  closeSelect: () => void;
};

// prettier-ignore
const RenderVersion: React.FC<RenderVersionProps> = ({ version, closeSelect }) => {
  const { setVersion } = documentStore;
  const {
    status, version: number, comments, createdAt,
  } = version;
  const [color, translatedStatus] = getColorAndStatus(status);

  const handleItemClick = (versionArg: Version) => {
    setVersion(versionArg);
    closeSelect();
  };

  return (
    <ListItem className={classes.li} key={number}>
      <div onClick={() => handleItemClick(version)} aria-hidden="true">
        <div className={classes.option}>
          <div>
            {/* prettier-ignore */}
            <Typography className={classes.package}>Версия пакета №{number}</Typography>
           <div onClick={()=>window.history.back()}> <Icon className={classes.icon} name="chat_left_text" /> </div>
            <Typography className={classes.date}>{comments.length}</Typography>
          </div>
          <Typography className={classes.date}>{createdAt}</Typography>
        </div>
        {/* prettier-ignore */}
        <Typography className={classes.status} color={color}>{translatedStatus}</Typography>
      </div>
    </ListItem>
  );
};

export default RenderVersion;
