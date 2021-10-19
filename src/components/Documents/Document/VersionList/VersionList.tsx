import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import classes from './VersionList.module.scss';
import VersionSelect from './VersionSelect';
import documentStore from '../../../../stores/documentStore';

const VersionList: React.FC = observer(() => {
  const { documentPackage, version, setLastVersion } = documentStore;
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  useEffect(() => {
    setLastVersion(documentPackage?.versions);
  }, [setLastVersion, documentPackage?.versions]);

  const openSelect = () => setIsSelectOpen(true);
  const closeSelect = () => setIsSelectOpen(false);

  return (
    <div className={classes.component}>
      <div className={classes.title}>
        <i className="sr-0117-arrow-left" />
        Версия пакета
        <span className={classes.version}>№{version?.version}</span>
        {isSelectOpen ? (
          <>
            <i
              onClick={closeSelect}
              className="sr-0065-chevron-up"
              style={{ cursor: 'pointer' }}
              role="presentation"
            />
            <VersionSelect
              closeSelect={closeSelect}
              versions={documentPackage?.versions || []}
            />
            <div
              className={classes.closeArea}
              onClick={closeSelect}
              role="presentation"
            />
          </>
        ) : (
          <i
            className="sr-0007-chevron-down"
            style={{ cursor: 'pointer' }}
            onClick={openSelect}
            role="presentation"
          />
        )}
      </div>
    </div>
  );
});
export default VersionList;
