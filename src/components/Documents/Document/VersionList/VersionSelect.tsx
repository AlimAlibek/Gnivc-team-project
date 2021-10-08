import React from 'react';

import classes from './VersionList.module.scss';
import Version from '../../../../models/interfaces/Version';
import documentVersionStore from '../../../../stores/documentVersionStore';

import getColorAndStatus from '../../../../utils/getColorAndStatus';

type Props = {
  versions: Version[] | [],
  closeSelect: any;
};
const VersionSelect: React.FC<Props> = ({ versions, closeSelect }) => {
  const handleItemClick = (version: Version) => {
    documentVersionStore.setVersion(version.version, versions);
    closeSelect();
  };

  return (
    <div className={`${classes.version__select} ${classes.select}`}>
      {
        versions.length
        && versions.map((version: Version) => (
          <div
            className={`${classes.select__item} ${classes.selectItem} `}
            onClick={() => handleItemClick(version)}
            key={version.version}
          >
            <div className={classes.selectItem__section}>
              <div className={classes.selectItem__title}>
                версия пакета №{version.version}
                <i className="icon-0122-pencil" />
                <span className={classes.selectItem__minorFont}>
                  {version.comments.length}
                </span>
              </div>
              <div className={classes.selectItem__minorFont}>
                {version.createdAt}
              </div>
            </div>
            <div className={classes.selectItem__section}>
              <div
                className={classes.selectItem__minorFont}
                style={{ color: `${getColorAndStatus(version.status)[0]}` }}
              >
                {getColorAndStatus(version.status)[1]}
              </div>

            </div>

          </div>
        ))
      }
    </div>
  );
};

export default VersionSelect;
