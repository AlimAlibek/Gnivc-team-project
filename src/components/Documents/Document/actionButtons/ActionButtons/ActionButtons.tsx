import React from 'react';
import clsx from 'clsx';

import classes from '../../DocumentItem.module.scss';
import Decide from '../Decide';
import ApproveReturn from '../ApproveReturn';
import documentVersionStore from '../../../../../stores/userStore';
import userStore from '../../../../../stores/userStore';
import Access from '../../../../../models/enums/Access';

const ActionButtons: React.FC = () => {
  const { getRole } = userStore;
  const role = getRole();
  // Тут будет проверка на то, активный ревьюер или нет
  const isActiveRewier = (role === Access.REVIEWER);

  return (
    <div className={clsx(classes.row, classes.underline, classes.mrb)}>
      {(role === Access.EDITOR) && <Decide />}
      {(isActiveRewier) && <ApproveReturn />}
    </div>
  );
};
export default ActionButtons;
