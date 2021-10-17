import React from 'react';
import clsx from 'clsx';

import classes from '../DocumentItem.module.scss';
import documentVersionStore from '../../../../stores/documentVersionStore';
import NameInput from './NameInput';
import Responsible from './Responsible';
import ResponsibleRole from './ResponsibleRole';
import TypeInput from './TypeInput';

const DocumentForm: React.FC = () => {
  // isBlocked метод, который вызывает  isDisabled из стора. Сама функция пока в юнитах лежит НЕ МЕНЯЙТЕ ЕЕ не предупредив меня, я буду ее изменять.
  const { isBlocked } = documentVersionStore;

  // Меняйте место вызова и способ вызова как угодно, но не саму isDisabled.  Мне кажется логично вызывать ее из стора непосредственно в самом компоненте.
  const disabled = isBlocked();

  return (
    <>

      <div className={classes.block__row}>
        <NameInput
          isDisbled={disabled}
          onChange={() => {}}
        />
      </div>

      <div className={clsx(classes.row, classes.edge)}>
        <TypeInput
          isDisbled={disabled}
          onChange={() => {}}
        />
      </div>

      <div className={classes.block__row}>
        <Responsible
          isDisbled={disabled}
          onChange={() => {}}
        />
      </div>
      <div
        className={clsx(classes.row, classes.edge, classes.mrb)}
      >
        <ResponsibleRole />
      </div>

    </>
  );
};

export default DocumentForm;
