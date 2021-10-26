import React, { useState } from 'react';
import Tabs from '@ff/ui-kit/lib/Tabs';
import Tab from '@ff/ui-kit/lib/Tab';

import classes from './DocumentSidebar.module.scss';
import Comments from './Comments';
import ApprovalStages from './ApprovalStages';

const DocumentSidebar: React.FC = () => {
  const [view, setView] = useState<string | number>('comment');

  return (
    <div className={classes.component}>
      <Tabs className={classes.tabs} fullWidth value={view} onChange={setView} indicatorClass={classes.indicator}>
        <Tab value="comment">Комментарии</Tab>
        <Tab value="approval">Этапы согласования</Tab>
      </Tabs>
      <div className={classes.sideBody}>
          {view === 'comment' && <Comments />}
          {view === 'approval' && <ApprovalStages />}
      </div>

    </div>
  );
};
export default DocumentSidebar;
