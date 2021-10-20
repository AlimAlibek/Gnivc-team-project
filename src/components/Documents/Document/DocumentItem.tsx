import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';
import Typography from '@ff/ui-kit/lib/Typography';
import clsx from 'clsx';

import classes from './DocumentItem.module.scss';
import Container from '../../layouts/Container';
import Access from '../../../models/Access';
import StatusEnum from '../../../models/Status';
import DocumentPackage from '../../../models/DocumentPackage';
import VersionList from './VersionList';
import SaveCancel from './actionButtons/SaveCancel';
import CreateNewVersion from './actionButtons/CrateNewVersion';
import Status from './Status';
import ActionButtons from './actionButtons/ActionButtons';
import DocumentForm from './DocumentForm/DocumentForm';
import FilesTable from './FilesTable';
import AddFile from './actionButtons/AddFile';
import DocumentSidebar from './DocumentSidebar';
import userStore from '../../../stores/userStore';
import documentStore from '../../../stores/documentStore';

const DocumentItem: React.FC<DocumentPackage> = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { role } = userStore;
  const {
    isLoading, error, status, version, fetchDocument, isBlocked,
  } = documentStore;

  useEffect(() => {
    fetchDocument(id);
  }, [fetchDocument, id]);

  // const allowCreateVersions=(role === Access.EDITOR && isTheLastVersionFinished); будет в деле когда наладим сейвы
  return (
    <Container>
      <div className={classes.component}>
        <div className={clsx(classes.block, classes.main)}>
          <div className={classes.container}>
            <div className={clsx(classes.row, classes.edge, classes.head)}>
              <VersionList />
              {role === Access.EDITOR && status === StatusEnum.SCATCH && (
                <SaveCancel />
              )}

              {role === Access.EDITOR && status === StatusEnum.APPROVED && (
                <CreateNewVersion />
              )}
            </div>

            <Status />

            {!isBlocked(role) && <ActionButtons />}

            <DocumentForm />

            <FilesTable />

            {role === Access.EDITOR && <AddFile />}
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
