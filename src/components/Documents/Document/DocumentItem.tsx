import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';
import Typography from '@ff/ui-kit/lib/Typography';

import classes from './DocumentItem.module.scss';
import Container from '../../layouts/Container';
import Access from '../../../models/Access';
import StatusEnum from '../../../models/Status';
import DocumentPackage from '../../../models/DocumentPackage';
import VersionList from './VersionList';
import SaveCancel from './HeaderButtons/SaveCancel';
import CreateNewVersion from './HeaderButtons/CrateNewVersion';
import Status from './Status';
import ActionButtons from './actionButtons/ActionButtons';
import DocumentForm from './DocumentForm/DocumentForm';
import FilesTable from './FilesTable';
import DocumentSidebar from './DocumentSidebar';
import isButtonBlocked from '../../../utils/isButtonBlocked';
import userStore from '../../../stores/userStore';
import documentStore from '../../../stores/documentStore';
import compareVersions from '../../../utils/compareVersions';

const DocumentItem: React.FC<DocumentPackage> = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { role } = userStore;
  const {
    documentPackage, isLoading, error, status, version, setLastVersion, fetchDocument, findIndex,
  } = documentStore;

  useEffect(() => {
    fetchDocument(id);
  }, [fetchDocument, id]);
  const blocked = version ? isButtonBlocked(role, version) : false;

  const indexOfActive = findIndex();

  const isVersionsDifferent = compareVersions(documentPackage, version, indexOfActive);

  const allowSave = (role === Access.EDITOR && isVersionsDifferent && !blocked);

  return (
    <Container>
      <div className={classes.component}>
        <div className={classes.data}>
          <div>
            <div className={classes.top}>
              <VersionList
                documentPackage={documentPackage}
                version={version}
                setLastVersion={setLastVersion}
              />

              {allowSave && (
                <SaveCancel />
              )}

              {role === Access.EDITOR && status === StatusEnum.APPROVED && (
                <CreateNewVersion />
              )}
            </div>

            <Status version={version} />

            {!blocked && <ActionButtons role={role} status={status} />}

            <DocumentForm />

            <FilesTable />
          </div>
        </div>
        <DocumentSidebar />
      </div>

      {isLoading && <Typography.Title>Loading...</Typography.Title>}

      {error && <Typography.Title>{error}</Typography.Title>}
    </Container>
  );
});

export default DocumentItem;
