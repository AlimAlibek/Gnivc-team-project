import React, { useEffect, useState } from 'react';
import List from '@ff/ui-kit/lib/esm/components/List';
import { useHistory } from 'react-router';

import classes from './VersionList.module.scss';
import RenderVersion from './RenderVersion';
import DocumentPackage from '../../../../models/DocumentPackage';
import Version from '../../../../models/Version';

type VersionListProps = {
  documentPackage?: DocumentPackage;
  version?: Version;
  setLastVersion: (versions: Version[] | undefined) => void;
};

const VersionList: React.FC<VersionListProps> = ({
  documentPackage,
  version,
  setLastVersion,
}) => {
  const history = useHistory();

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  useEffect(() => {
    setLastVersion(documentPackage?.versions);
  }, [setLastVersion, documentPackage?.versions]);

  const openSelect = () => setIsSelectOpen(true);
  const closeSelect = () => setIsSelectOpen(false);

  return (
    <div className={classes.component}>
      <div className={classes.title}>
        <i
          onClick={() => history.push('/home')}
          className="sr-0117-arrow-left"
          style={{ cursor: 'pointer' }}
          aria-hidden="true"
        />
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
            <List className={classes.select}>
              {documentPackage?.versions.map((versionItem) => (
                <RenderVersion
                  closeSelect={closeSelect}
                  version={versionItem}
                  key={versionItem.version}
                />
              ))}
            </List>
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
};
export default VersionList;
