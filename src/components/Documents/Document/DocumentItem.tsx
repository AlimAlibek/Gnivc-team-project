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
import Decide from './actionButtons/Decide';
import ApproveReturn from './actionButtons/ApproveReturn';
import ResendForApproval from './actionButtons/ResendForApproval';
import Container from '../../layouts/Container';
import isDisabled from '../../../utils/isDisabled';
import Document from '../../../models/interfaces/Document';
import documentsStore from '../../../stores/documentsStore';
import documentVersionStore from '../../../stores/documentVersionStore';
import userStore from '../../../stores/userStore';

// import allowSave from './LayoutChanger/allowSave';
import buttonChoose from './LayoutChanger/ButtonChoose';

const DocumentItem: React.FC<Document> = observer(() => {
  const { id } = useParams<{ id: string }>();
  const {
    document, error, isLoading, fetchDocument,
  } = documentsStore;
  const { selectedUser } = userStore;
  const { version } = documentVersionStore;

  useEffect(() => {
    fetchDocument(id);
  }, [id]);

  const role: string = selectedUser?.role ? selectedUser?.role : 'reader';

  const allVersion = document?.versions;

  const lastVersionStatus = allVersion
    ? allVersion[allVersion.length - 1].status
    : '';
  const blocked = isDisabled(role, lastVersionStatus);

  if (isLoading) {
    return <Typography.Title>Loading...</Typography.Title>;
  }
  if (error) {
    return <Typography.Title>{error}</Typography.Title>;
  }

  const approvingButtons = buttonChoose(version?.status, role);

  return (
    <Container>
      <div className={classes.document}>
        <div className={clsx(classes.block, classes.main)}>
          <div className={classes.container}>

            <div className={clsx(classes.row, classes.edge, classes.head)}>
              <VersionList />
              {(role === 'editor' && version?.status === 'scatch') && <SaveCancel /> }
              {(role === 'editor' && !document?.versions.find((v) => v.status !== 'approved')) && <CreateNewVersion />}
            </div>

            <div className={classes.row}>
              <Status />
            </div>

            {
              approvingButtons
              && (
              <div className={clsx(classes.row, classes.underline, classes.mrb)}>
                {
                  approvingButtons === 'Deside' ? <Decide />
                    : approvingButtons === 'ApproveReturn' ? <ApproveReturn />
                      : approvingButtons === 'Refactoring' && <ResendForApproval />
                }
              </div>
              )
            }

            <div className={classes.row}>
              <div className={classes.subtitle}>Аттрибуты пакета</div>
            </div>

            <DocumentForm />

            <div className={classes.row}>
              <div className={classes.subtitle}>Файлы</div>
            </div>
            <div className={classes.row}>
              <FilesTable />
            </div>

            {
              role === 'editor' && (
              <div className={classes.row}>
                <AddFile />
              </div>
              )
}

          </div>
        </div>

        <div className={clsx(classes.block, classes.side)}>
          <div className={classes.container}>
            <div className={clsx(classes.row, classes.head)}>
              <div className={classes.subtitle}> Коменнтарии </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default DocumentItem;
