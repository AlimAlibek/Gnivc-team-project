import React from 'react';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';
import Select from '@ff/ui-kit/lib/esm/components/Select';
import TextField from '@ff/ui-kit/lib/esm/components/TextField';

import classes from './DocumentForm.module.scss';
import documentStore from '../../../../stores/documentStore';

const DocumentForm: React.FC = () => {
  // isBlocked метод, который вызывает  isDisabled из стора. Сама функция пока в юнитах лежит НЕ МЕНЯЙТЕ ЕЕ не предупредив меня, я буду ее изменять.
  // Хорошо таинственный незнакомец )))
  // Лан можно менять
  const { version, isBlocked } = documentStore;


  const disabled = isBlocked();

  return (
    <div className={classes.component}>
      <Typography className={classes.subtitle}>Аттрибуты пакета</Typography>

      <TextField
        name="floating-label"
        label="Наименование"
        disabled={isBlocked()}
        labelStyle="floating"
        value={document?.title}
        fullWidth
      />
      <div className={classes.flex}>
        <Select
          label="Контур"
          disabled={isBlocked()}
          options={[
            { key: 1, value: 'Стенд разработки', label: 'Стенд разработки' },
          ]}
          floatingLabel
          showSearch
          fullWidth
        />
      </div>
      <div className={classes.flex}>
        <Select
          label="Приоритет"
          disabled={isBlocked()}
          options={[
            { key: 1, value: 'Высокий', label: 'Высокий' },
          ]}
          floatingLabel
          showSearch
          fullWidth
        />
      </div>

      <div className={classes.flex}>
        <Select
          label="Тип пакета"
          disabled={isBlocked()}
          options={[
            { key: 1, value: 'Для согласования', label: 'Для согласования' },
          ]}
          floatingLabel
          showSearch
          style={{ width: '46%' }}
        />

        <Select
          label="Пункт ГК"
          disabled={isBlocked()}
          options={[{ key: 1, value: '3.1.2', label: '3.1.2' }]}
          floatingLabel
          showSearch
          style={{ width: '27%' }}
        />

        <TextField
          label="Код версии"
          disabled={isBlocked()}
          name="floating-label"
          labelStyle="floating"
          value={version?.version}
          size="large"
          className={classes.version}
        />
      </div>

      <Select
        label="Ответственный"
        options={[
          { key: 1, value: 'Владимир Горбунов', label: 'Владимир Горбунов' },
          { key: 2, value: 'Борис Хмельников', label: 'Борис Хмельников' },
        ]}
        fullWidth
        floatingLabel
        disabled={isBlocked()}
        showSearch
      />

      <div className={classes.flex}>
        <TextField
          name="floating-label"
          label="Роль в проекте"
          labelStyle="floating"
          className={classes.blocked}
          value="Архитектор"
          disabled
        />
        <TextField
          name="floating-label"
          label="Подразделение"
          labelStyle="floating"
          className={classes.blocked}
          value="IT-архитектуры"
          disabled
        />
      </div>
    </div>
  );
};

export default DocumentForm;
