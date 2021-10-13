import TextField from '@ff/ui-kit/lib/TextField';
import React from 'react';

import classes from '../../DocumentItem.module.scss';

const ResponsibleRole: React.FC = () => (
  <>
    <TextField
      name="floating-label"
      label="Роль в проекте"
      labelStyle="floating"
      disabled
      className={classes.field_width_50}
    />
    <TextField
      name="floating-label"
      label="Подразделение"
      labelStyle="floating"
      disabled
      className={classes.field_width_50}
    />
  </>
);
export default ResponsibleRole;
