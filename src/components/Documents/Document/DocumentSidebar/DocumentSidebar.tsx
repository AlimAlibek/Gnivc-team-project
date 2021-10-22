import React, { useState } from 'react';
import Tabs from '@ff/ui-kit/lib/Tabs';
import Tab from '@ff/ui-kit/lib/Tab';

import Comments from './Comments';
import ApprovalStages from './ApprovalStages';
import classes from './DocumentSidebar.module.scss';

const DocumentSidebar: React.FC = () => {
  const [view, setView] = useState<string | undefined>('comment');

  return (
    <div className={classes.component}>
      <Tabs className={classes.tabs} fullWidth value={view} onChange={setView}>
        <Tab value="comment">Комментарии</Tab>
        <Tab value="approval">Этапы согласования</Tab>
      </Tabs>
      {view === 'comment' && <Comments />}
      {view === 'approval' && <ApprovalStages />}
    </div>
  );
};
export default DocumentSidebar;
