import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';
import Typography from '@ff/ui-kit/lib/Typography';

import classes from './DocumentItem.module.scss';
import VersionList from './VersionList';
import Status from './Status';
import Comments from './Comments';
import NameInput from './informationFields/NameInput';
import TypeInput from './informationFields/TypeInput';
import Responsible from './informationFields/Responsible';
import ResponsibleRole from './informationFields/ResponsibleRole';
import FilesTable from './informationFields/FilesTable';
import AddFile from './actionButtons/AddFile';
import Container from '../../layouts/Container';
import isDisabled from '../../../utils/isDisabled';
import documentsStore from '../../../stores/documentsStore';
import documentVersionStore from '../../../stores/documentVersionStore';
import userStore from '../../../stores/userStore';
import Document from '../../../models/interfaces/Document';
import Access from '../../../models/enums/Access';


import allowSave from './layoutChanger/allowSave';
import buttonChoose from './layoutChanger/ButtonChoose';
import Login from '../../Login';



const DocumentItem: React.FC<Document> = observer(() => {
  const { id } = useParams<{ id: string }>();
  const {
   error, isLoading, fetchDocument,
  } = documentsStore;
  const { selectedUser } = userStore;
  const {version}=documentVersionStore


  useEffect(() => {
    fetchDocument(id);   
  }, []);

  const role = selectedUser?.role ?? Access.VIEWER;

  const versionStatus = version?.status ?? '';

  const blocked = isDisabled(role, versionStatus);

  if (isLoading) {
    return <Typography.Title>Loading...</Typography.Title>;
  }
  if (error) {
    return <Typography.Title>{error}</Typography.Title>;
  }

  return (
    
    <Container>
      <Login/>
      <div className={classes.document}>
        <div className={`${classes.block} ${classes.document__main}`}>
          <div className={classes.block__container}>
            <div
              className={`${classes.block__row} ${classes.block__row_edge} ${classes.block__row_head}`}
            >
              <VersionList />
              {allowSave(blocked, role)}
            </div>

            <div className={classes.block__row}>
              <Status />
            </div>

            <div
              className={`${classes.block__row} ${classes.block__row_underline} ${classes.block__row_mrb}`}
            >
              {buttonChoose(blocked, role, versionStatus)}
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
              <FilesTable />
            </div>

            <div className={classes.block__row}>
              <AddFile />
            </div>
          </div>
        </div>      
               <Comments/> 
      </div>
    </Container>
  );
});

export default DocumentItem;
