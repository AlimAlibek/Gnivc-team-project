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
import SaveCancel from './HeaderButtons/SaveCancel';
import CreateNewVersion from './HeaderButtons/CrateNewVersion';
import Status from './Status';
import ActionButtons from './actionButtons/ActionButtons';
import DocumentForm from './DocumentForm/DocumentForm';
import FilesTable from './FilesTable';
import AddFile from './FilesTable/AddFile';
import DocumentSidebar from './DocumentSidebar';
import userStore from '../../../stores/userStore';
import documentStore from '../../../stores/documentStore';
import isButtonBlocked from '../../../utils/isButtonBlocked';

const DocumentItem: React.FC<DocumentPackage> = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { role } = userStore;
  const {
    isLoading, error, status, fetchDocument, version,
  } = documentStore;

  useEffect(() => {
    fetchDocument(id);
  }, [fetchDocument, id]);

  // const allowCreateVersions=(role === Access.EDITOR && isTheLastVersionFinished); будет в деле когда наладим сейвы

  const blocked = version ? isButtonBlocked(role, version) : false;
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

            {!blocked && <ActionButtons />}

            <DocumentForm />

            <FilesTable />

            {!blocked && <AddFile />}
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
