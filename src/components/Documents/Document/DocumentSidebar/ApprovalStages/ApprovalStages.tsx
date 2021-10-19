import React, { useState } from 'react';
import clsx from 'clsx';

import classes from './ApprovalStages.module.scss';


const ApprovalStages: React.FC = () => {
  /* const { version, addComent } = documentVersionStore;

  const [commentText, setComment] = useState('');

  const sendComent = () => {
    if (!commentText) {
      null;
    }
    addComent(commentText);
    setComment('');
  };

  const allComments = version
    ? version.comments.map((stage) => <RenderApprovalStage stage={stage} />)
    : 'Версия пакета документов не согласована.';
 */
  return (
    <div className={clsx(classes.block, classes.side)}>
      <div className={classes.container}>
        <div className={clsx(classes.row, classes.head)}>
          <div className={classes.subtitle}> Этапы согласования </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={`${classes.iconPlus} sr-0010-circle-plus`} />
        <div className={classes.linePlus} />
        <div>
          <div className={classes.grayText}>
            {'19.06.2021'} в {'09:43'}
          </div>
          <div className={classes.blackText}>Отправлен на согласование</div>
        </div>
      </div>
      <div className={classes.row}>
        <div
          className={clsx(
            true
              ? `${classes.iconCheck} sr-0008-circle-check`
              : `${classes.iconClock} sr-0012-clock`
          )}
        />
        <div className={clsx(true ? classes.lineCheck : classes.lineClock)} />
        <div>
          {true ? (
            <div className={classes.grayText}>
              {'19.06.2021'} в {'20:43'}
            </div>
          ) : (
            'Ожидание согласования'
          )}
          <div className={classes.grayText}>ГНИВЦ Сотрудник ДПП</div>
          {true && <div className={classes.blackText}>Согласовано</div>}
        </div>
      </div>
      <div className={classes.row}>
        <div
          className={clsx(
            true
              ? `${classes.iconCheck} sr-0008-circle-check`
              : `${classes.iconClock} sr-0012-clock`
          )}
        />
        <div className={clsx(true ? classes.lineCheck : classes.lineClock)} />
        <div>
          {true ? (
            <div className={classes.grayText}>
              {'19.06.2021'} в {'20:43'}
            </div>
          ) : (
            'Ожидание согласования'
          )}
          <div className={classes.grayText}>ГНИВЦ Сотрудник УИБ</div>
          {true && <div className={classes.blackText}>Согласовано</div>}
        </div>
      </div>
      <div className={classes.row}>
        <div
          className={clsx(
            true
              ? `${classes.iconCheck} sr-0008-circle-check`
              : `${classes.iconClock} sr-0012-clock`
          )}
        />
        <div className={clsx(true ? classes.lineCheck : classes.lineClock)} />
        <div>
          {true ? (
            <div className={classes.grayText}>
              {'19.06.2021'} в {'20:43'}
            </div>
          ) : (
            <div className={classes.orangeText}>Ожидание согласования</div>
          )}
          <div className={classes.grayText}>Сотрудник ФКУ</div>
          {true && <div className={classes.blackText}>Согласовано</div>}
        </div>
      </div>
      <div className={classes.row}>
        <div
          className={clsx(
            false
              ? `${classes.iconCheck} sr-0008-circle-check`
              : `${classes.iconClock} sr-0012-clock`
          )}
        />
        <div className={clsx(false ? classes.lineCheck : classes.lineClock)} />
        <div>
          {false ? (
            <div className={classes.grayText}>
              {'19.06.2021'} в {'20:43'}
            </div>
          ) : (
            <div className={classes.orangeText}>Ожидание согласования</div>
          )}
          <div className={classes.grayText}>ФНС Сотрудник УИТ</div>
          {false && <div className={classes.blackText}>Согласовано</div>}
        </div>
      </div>
      <div className={classes.row}>
        <div
          className={clsx(
            false
              ? `${classes.iconCheck} sr-0008-circle-check`
              : `${classes.iconClock} sr-0012-clock`
          )}
        />
        <div className={clsx(false && classes.lineCheck)} />
        <div>
          {false ? (
            <div className={classes.grayText}>
              {'19.06.2021'} в {'20:43'}
            </div>
          ) : (
            <div className={classes.orangeText}>Ожидание согласования</div>
          )}
          <div className={classes.grayText}>ФНС Сотрудник УИБ</div>
          {false && <div className={classes.blackText}>Согласовано</div>}
        </div>
      </div>
      {false && (
        <div className={classes.row}>
          <div className={`${classes.iconPlus} sr-0019-golf`} />
          <div>
            <div className={classes.grayText}>
              {'13.08.2021'} в {'07:12'}
            </div>
            <div className={classes.blackText}>Пакет документов согласован</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ApprovalStages;
