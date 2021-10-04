import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';
import { Typography } from '@ff/ui-kit';

import classes from './Document.module.scss';
import Version from '../../layouts/DocumentParts/Version';
import Status from '../../layouts/DocumentParts/Status';
import NameInput from '../../layouts/DocumentParts/NameInput';
import TypeInput from '../../layouts/DocumentParts/TypeInput';
import Responsible from '../../layouts/DocumentParts/Responsible';
import ResponsibleRole from '../../layouts/DocumentParts/ResponsibleRole';
import FilesTable from '../../layouts/DocumentParts/FilesTable';
import AddFile from '../../layouts/DocumentParts/AddFile';
import Container from '../../layouts/Container';
import isDisabled from '../../../utils/isDisabled';
import documentsStore from '../../../stores/documentsStore';
import Document from '../../../models/interfaces/Document';
import userStore from '../../../stores/userStore';
import allowSave from './LayoutChanger/allowSave';
import buttonChoose from './LayoutChanger/ButtonChoose';

const DocumentItem: React.FC <Document> = observer(() => {
  const { id }: { id: string } = useParams();

  useEffect(() => {
    documentsStore.fetchDocument(id);
  }, [id]);
  const role: string = userStore.selectedUser?.role ? userStore.selectedUser?.role : 'reader';
  // Не знаю насколько стоит это менять, если честно.
  const allVersion = documentsStore.document?.versions;
  // Так как версия может быть андефайнд, пока так. На следующем этапе идет проверка, так что не знаю надо менять или нет
  const lastVersionStatus = allVersion ? allVersion[allVersion.length - 1].status : '';
  const editStatus = isDisabled(role, lastVersionStatus);

  if (documentsStore.isLoading) {
    return <Typography.Title>Loading...</Typography.Title>;
  }
  if (documentsStore.error) {
    return <Typography.Title>{documentsStore.error}</Typography.Title>;
  }

  return (
    <Container>
      <div className={classes.document}>
        <div className={`${classes.block} ${classes.document__main}`}>
          <div className={classes.block__container}>
            <div className={`${classes.block__row} ${classes.block__row_edge} ${classes.block__row_head}`}>
              <Version />
              {allowSave(editStatus, role)}
            </div>

            <div className={classes.block__row}>
              <Status />
            </div>

            <div className={`${classes.block__row} ${classes.block__row_underline} ${classes.block__row_mrb}`}>
              {buttonChoose(editStatus, role)}
            </div>

            <div className={classes.block__row}>
              <div className={classes.subtitle}>Аттрибуты пакета</div>
            </div>

            <div className={classes.block__row}>
              <NameInput isDisbled={editStatus} />
            </div>

            <div className={`${classes.block__row} ${classes.block__row_edge}`}>
              <TypeInput isDisbled={editStatus} />
            </div>

            <div className={classes.block__row}>
              <Responsible isDisbled={editStatus} />
            </div>
            <div className={`${classes.block__row} ${classes.block__row_edge} ${classes.block__row_mrb}`}>
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
