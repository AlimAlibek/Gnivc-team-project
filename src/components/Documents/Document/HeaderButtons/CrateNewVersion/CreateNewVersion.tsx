import Button from '@ff/ui-kit/lib/Button';
import { observer } from 'mobx-react-lite';
import React from 'react';

import documentStore from '../../../../../stores/documentStore';
import userStore from '../../../../../stores/userStore';

const CreateNewVersion: React.FC = observer(() => {
  const { createNewVersion } = documentStore;
  const { name, userName } = userStore;
  return (
    <Button
      variant="fill"
      type="primary"
      onClick={() => createNewVersion(name, userName)}
    >
      Создать новую версию
    </Button>
  );
});

export default CreateNewVersion;
