import { TextField } from '@ff/ui-kit';
import React from 'react';

const ResponsibleRole: React.FC = () => (
  <>
    <TextField
      name="floating-label"
      label="Роль в проекте"
      labelStyle="floating"
      disabled
      className="field-width_50"
    />
    <TextField
      name="floating-label"
      label="Подразделение"
      labelStyle="floating"
      disabled
      className="field-width_50"
    />
  </>
);
export default ResponsibleRole;
