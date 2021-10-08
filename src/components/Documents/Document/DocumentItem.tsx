import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';
import Typography from '@ff/ui-kit/lib/Typography';

import classes from './DocumentItem.module.scss';
// import Version from './Version';
import VersionList from './VersionList';
import Status from './Status';
import NameInput from './informationFields/NameInput';
import TypeInput from './informationFields/TypeInput';
import Responsible from './informationFields/Responsible';
import ResponsibleRole from './informationFields/ResponsibleRole';
import FilesTable from './informationFields/FilesTable';
import AddFile from './actionButtons/AddFile';
import Container from '../../layouts/Container';
import isDisabled from '../../../utils/isDisabled';
import documentsStore from '../../../stores/documentsStore';
import Document from '../../../models/interfaces/Document';
import userStore from '../../../stores/userStore';
import allowSave from './LayoutChanger/allowSave';
import buttonChoose from './LayoutChanger/ButtonChoose';

const DocumentItem: React.FC<Document> = observer(() => {
  const { id } = useParams<{ id: string }>();
  const {
    document, error, isLoading, fetchDocument,
  } = documentsStore;
  const { selectedUser } = userStore;

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

  return (
    <Container>
      <div className={classes.document}>
        <div className={`${classes.block} ${classes.document__main}`}>
          <div className={classes.block__container}>
            <div
              className={`${classes.block__row} ${classes.block__row_edge} ${classes.block__row_head}`}
            >
              {/* <Version /> */}
              <VersionList />
              {allowSave(blocked, role)}
            </div>

            <div className={classes.block__row}>
              <Status />
            </div>

            <div
              className={`${classes.block__row} ${classes.block__row_underline} ${classes.block__row_mrb}`}
            >
              {buttonChoose(blocked, role)}
            </div>

            <div className={classes.block__row}>
              <div className={classes.subtitle}>Аттрибуты пакета</div>
            </div>

            <div className={classes.block__row}>
              <NameInput isDisbled={blocked} />
            </div>

            <div className={`${classes.block__row} ${classes.block__row_edge}`}>
              <TypeInput isDisbled={blocked} />
            </div>

            <div className={classes.block__row}>
              <Responsible isDisbled={blocked} />
            </div>
            <div
              className={`${classes.block__row} ${classes.block__row_edge} ${classes.block__row_mrb}`}
            >
              <ResponsibleRole />
            </div>

            <div className={classes.block__row}>
              <div className={classes.subtitle}>Файлы</div>
            </div>
            <div className={classes.block__row}>
              <FilesTable
                files={[
                  {
                    name: 'nvs-scheme.vsd',
                    fileType: 'Схема',
                    packageVersion: '1',
                    uploadedAt: '20.03.2020',
                  },
                ]}
              />
            </div>

            <div className={classes.block__row}>
              <AddFile />
            </div>
          </div>
        </div>

        <div className={`${classes.block} ${classes.document__side}`}>
          <div className={classes.block__container}>
            <div className={`${classes.block__row} ${classes.block__row_head}`}>
              <div className={classes.subtitle}> Коменнтарии </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default DocumentItem;
