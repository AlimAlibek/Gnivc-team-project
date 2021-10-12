import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';

import documentsStore from '../../../../stores/documentsStore';
import documentVersionStore from '../../../../stores/documentVersionStore';
import classes from './VersionList.module.scss';
import VersionSelect from './VersionSelect';

const VersionList: React.FC = observer(() => {


  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const openSelect = () => {
    setIsSelectOpen(true);
  };

  const closeSelect = () => {
    setIsSelectOpen(false);
  };

  return (
    <div className={classes.version}>

      <div className={classes.version__title}>
        <i className="icon-0117-arrow-left" />
        <span>Версия пакета №{documentVersionStore.version?.version} </span>
        {
          isSelectOpen
            ? (
              <>
                <i
                  onClick={closeSelect}
                  className="icon-0065-chevron-up"
                  style={{ cursor: 'pointer' }}
                />
                <VersionSelect
                  closeSelect={closeSelect}
                  versions={documentsStore.document?.versions || []}
                />
                <div className={classes.closeArea} onClick={closeSelect} />
              </>
            )
            : (
              <i
                onClick={openSelect}
                className="icon-0007-chevron-down"
                style={{ cursor: 'pointer' }}
              />
            )
}
      </div>
    </div>
  );
});
export default VersionList;
