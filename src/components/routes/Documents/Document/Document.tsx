import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';
import { Typography } from '@ff/ui-kit';

import './Document.scss';
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
import IDocument from '../../../../models/interfaces/IDocument';

const Document: React.FC = observer(() => {
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
      <div className="document">
        <div className="block document__main-block">
          <div className="block__container">
            <div className="block__row block__row_edge block__row_head">
              <Version />
              <SaveCancel />
            </div>

            <div className="block__row">
              <Status />
            </div>
            
            <div className="block__row block__row_underline block__row_mrb">
              <Deside />
            </div>

            <div className="block__row">
              <div className="sub-title">Аттрибуты пакета</div>
            </div>

            <div className="block__row">
              <NameInput />
            </div>

            <div className="block__row block__row_edge">
              <TypeInput />
            </div>

            <div className="block__row">
              <Responsible />
            </div>
            <div className="block__row block__row_edge block__row_mrb">
              <ResponsibleRole />
            </div>

            <div className="block__row">
              <div className="sub-title">Файлы</div>
            </div>
            <div className="block__row">
              <FilesTable files={[
                {
                  name: "nvs-scheme.vsd",
                  fileType: "Схема",
                  packageVersion: "1",
                  uploadedAt: "20.03.2020"
                }
              ]} />
            </div>

            <div className="block__row">
              <AddFile />
            </div>
          </div>
        </div>

        <div className="block document__side-block">
          <div className="block__container">
            <div className="block__row block__row_head">
              <div className="sub-title">Коменнтарии</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default Document;
