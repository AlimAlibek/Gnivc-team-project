import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';
import Typography from '@ff/ui-kit/lib/Typography';
import clsx from 'clsx';

import classes from './DocumentItem.module.scss';
import VersionList from './VersionList';
import Status from './Status';
import DocumentForm from './DocumentForm/DocumentForm';
import FilesTable from './FilesTable';
import AddFile from './actionButtons/AddFile';
import CreateNewVersion from './actionButtons/CrateNewVersion';
import SaveCancel from './actionButtons/SaveCancel';
import Container from '../../layouts/Container';
import documentsStore from '../../../stores/documentsStore';
import documentVersionStore from '../../../stores/documentVersionStore';
import userStore from '../../../stores/userStore';
import Document from '../../../models/interfaces/Document';
import Access from '../../../models/enums/Access';
import StatusEnum from '../../../models/enums/Status';
import ActionButtons from './actionButtons/ActionButtons';
import Comments from './Comments';
import ApprovalStages from './ApprovalStages';
import Login from '../../Login';

const DocumentItem: React.FC<Document> = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { error, isLoading, fetchDocument, document, hasUnfinishedVersions } =
    documentsStore;
  const { getRole } = userStore;
  const { getStatus, isBlocked } = documentVersionStore;

  useEffect(() => {
    fetchDocument(id);
  }, []);

  const role = getRole();

  const status = getStatus();

  const allowSave = role === Access.EDITOR && status === StatusEnum.SCATCH;
  // const allowCreateVersions=(role === Access.EDITOR && hasUnfinishedVersions()); будет в деле когда наладим сейвы
  const allowCreateVersions =
    role === Access.EDITOR && status === StatusEnum.APPROVED;
  const blocked = isBlocked();

  return (
    <Container>
      <Login />
      <div className={classes.document}>
        <div className={clsx(classes.block, classes.main)}>
          <div className={classes.container}>
            <div className={clsx(classes.row, classes.edge, classes.head)}>
              <VersionList />
              {/* Старые условия я вынес наверх, так вроде более читаемо. */}
              {allowSave && <SaveCancel />}

              {allowCreateVersions && <CreateNewVersion />}
            </div>

            <div className={classes.row}>
              <Status />
            </div>

            {!blocked && <ActionButtons />}

            <div className={classes.block__row}>
              <div className={classes.subtitle}>Аттрибуты пакета</div>
            </div>

            <DocumentForm />

            <div className={classes.row}>
              <div className={classes.subtitle}>Файлы</div>
            </div>
            <div className={classes.row}>
              <FilesTable />
            </div>

            {role === Access.EDITOR && (
              <div className={classes.row}>
                <AddFile />
              </div>
            )}
          </div>
        </div>
        <Comments />
        <ApprovalStages />
      </div>
      {isLoading && <Typography.Title>Loading...</Typography.Title>}

      {error && <Typography.Title>{error}</Typography.Title>}
    </Container>
  );
});

export default DocumentItem;
