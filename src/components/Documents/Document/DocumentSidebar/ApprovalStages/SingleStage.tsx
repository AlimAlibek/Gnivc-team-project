import React from 'react';

import classes from './ApprovalStages.module.scss';
import ApprovalStage from '../../../../../models/ApprovalStage';

type SingleStageProps = {
  stage: ApprovalStage;
};

const SingleStage: React.FC<SingleStageProps> = ({ stage }) => {
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
        className={
          acepted
            ? `${classes.iconCheck} sr-0008-circle-check`
            : `${classes.iconClock} sr-0012-clock`
        }
      />
      <div className={acepted ? classes.lineCheck : classes.lineClock} />
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
export default SingleStage;
