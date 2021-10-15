import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';

import documentsStore from '../../../../stores/documentsStore';
import documentVersionStore from '../../../../stores/documentVersionStore';
import classes from './VersionList.module.scss';
import VersionSelect from './VersionSelect';

const VersionList: React.FC = observer(() => {
  const { document } = documentsStore;
  const { version, setLastVersion } = documentVersionStore;

  useEffect(() => {
    setLastVersion(document?.versions);
  }, []);

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
        <span> <i className="sr-0117-arrow-left" /> </span>
        <span>Версия пакета №{version?.version} </span>
        {
          isSelectOpen
            ? (
              <>
                <i
                  onClick={closeSelect}
                  className="sr-0065-chevron-up"
                  style={{ cursor: 'pointer' }}
                  role="presentation"
                />
                <VersionSelect
                  closeSelect={closeSelect}
                  versions={document?.versions || []}
                />
                <div className={classes.closeArea} onClick={closeSelect} role="presentation" />
              </>
            )
            : (
              <i
                onClick={openSelect}
                className="sr-0007-chevron-down"
                style={{ cursor: 'pointer' }}
                role="presentation"
              />
            )
}
      </div>
    </div>
  );
});
export default VersionList;
