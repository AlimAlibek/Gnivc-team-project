import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';
import { Typography } from '@ff/ui-kit';

import classes from "./Document.module.scss";

import Version from './Version';
import SaveCancel from './SaveCancel';
import Status from './Status';
import Deside from './Decide';
import NameInput from './NameInput';
import TypeInput from './TypeInput';
import Responsible from './Responsible';
import ResponsibleRole from './ResponsibleRole';
import FilesTable from './FilesTable';
import AddFile from './AddFile';
import Container from '../../../layouts/Container';

import documentsStore from '../../../../stores/documentsStore';
import Document from '../../../../models/interfaces/Document';

const DocumentItem: React.FC = observer(() => {
  const { id }: { id: string } = useParams();

  useEffect(() => {
    documentsStore.fetchDocument(id);
  }, [id]);

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
            <div  className={`${classes.block__row} ${classes.block__row_edge} ${classes.block__row_head}`}>
              <Version />
              <SaveCancel />
            </div>

            <div className={classes.block__row}>
              <Status />
            </div>

            <div className={`${classes.block__row} ${classes.block__row_underline} ${classes.block__row_mrb}`}>
              <Deside />
            </div>

            <div className={classes.block__row}>
              <div className={classes.subtitle}>Аттрибуты пакета</div>
            </div>

            <div className={classes.block__row}>
              <NameInput />
            </div>

            <div className={`${classes.block__row} ${classes.block__row_edge}`}>
              <TypeInput />
            </div>

            <div className={classes.block__row}>
              <Responsible />
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
