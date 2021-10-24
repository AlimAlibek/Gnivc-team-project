import Button from '@ff/ui-kit/lib/Button';
import React from 'react';
import documentStore from '../../../../../stores/documentStore';

const CreateNewVersion: React.FC = () => (
  <Button variant="fill" type="primary" onClick={()=>documentStore.createNewVersion()}>
    Создать новую версию
  </Button>
);

export default CreateNewVersion;
