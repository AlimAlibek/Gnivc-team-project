import React from 'react';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Icon from '@ff/ui-kit/lib/esm/components/Icon';

import classes from './VersionList.module.scss';
import Version from '../../../../models/Version';
import getColorAndStatus from '../../../../utils/getColorAndStatus';
import documentStore from '../../../../stores/documentStore';

type Props = {
  versions: Version[];
  closeSelect: () => void;
};

const VersionSelect: React.FC<Props> = ({ versions, closeSelect }) => {
  const { setVersion } = documentStore;
  const handleItemClick = (version: Version) => {
    setVersion(version);
    closeSelect();
  };

  return (
    <div className={classes.select}>
      {versions.length && (
        <ul className={classes.list}>
          {versions.map((version: Version) => (
            <li
              className={classes.li}
              onClick={() => handleItemClick(version)}
              role="presentation"
              key={version.version}
            >
              <div className={classes.option}>
                <div>
                  <Typography className={classes.package}>
                    Версия пакета №{version.version}
                  </Typography>
                  <Icon className={classes.icon} name="chat_left_text" />
                  <Typography className={classes.date}>
                    {version.comments.length}
                  </Typography>
                </div>
                <Typography className={classes.date}>
                  {version.createdAt}
                </Typography>
              </div>

              <Typography
                className={classes.status}
                color={getColorAndStatus(version.status)[0]}
              >
                {getColorAndStatus(version.status)[1]}
              </Typography>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VersionSelect;
