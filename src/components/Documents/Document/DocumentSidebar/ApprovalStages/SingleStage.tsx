import React from 'react';
import clsx from 'clsx';

import ApprovalStage from '../../../../../models/ApprovalStage';
import classes from './ApprovalStages.module.scss';

interface StagesRender {
  stage: ApprovalStage
}
const RenderStage: React.FC<StagesRender> = ({ stage }) => {
  const {
    acepted, approvedDate, approvedTime, matchedRole,
  } = stage;
  const translate = new Map([
    ['dpp', 'Сотрудник ДПП'],
    ['uit', 'Сотрудник УИТ'],
    ['fku', 'Сотрудник ФКУ'],
    ['uib', 'Сотрудник УИБ'],
  ]);
  return (
    <div className={classes.row}>
      <div
        className={clsx(
          acepted
            ? `${classes.iconCheck} sr-0008-circle-check`
            : `${classes.iconClock} sr-0012-clock`,
        )}
      />
      <div className={clsx(acepted ? classes.lineCheck : classes.lineClock)} />
      <div>
        {acepted ? (
          <div className={classes.grayText}>
            {approvedDate} в {approvedTime}
          </div>
        ) : (
          'Ожидание согласования'
        )}
        <div className={classes.grayText}>{translate.get(matchedRole)}</div>
        {acepted && <div className={classes.blackText}>Согласовано</div>}
      </div>
    </div>
  );
};
export default RenderStage;
