import React from 'react';

import classes from './ApprovalStages.module.scss';
import SingleStage from './SingleStage';
import Status from '../../../../../models/Status';
import documentStore from '../../../../../stores/documentStore';

const ApprovalStages: React.FC = () => {
  const { version, status } = documentStore;
  const stages = version?.approvalStages;

  // Они теряют порядок при мапе, если использовать лодаш value, так что пока руками
  if (!stages || status === Status.SCATCH) return <></>;
  const {
    dpp, uib, fku, uit,
  } = stages;
  return (
    <div className={classes.component}>
      <div className={classes.row}>
        <div className={`${classes.iconPlus} sr-0010-circle-plus`} />
        <div className={classes.linePlus} />
        <div>
          <div className={classes.grayText}>19.06.2021 в 09:43</div>
          <div className={classes.blackText}>Отправлен на согласование</div>
        </div>
      </div>
      <SingleStage stage={dpp} />
      <SingleStage stage={uib} />
      <SingleStage stage={fku} />
      <SingleStage stage={uit} />
      {status === Status.APPROVED && (
        <div className={classes.row}>
          <div className={`${classes.iconPlus} sr-0019-golf`} />
          <div>
            <div className={classes.grayText}>
              {uit.approvedDate} в {uit.approvedTime}
            </div>
            <div className={classes.blackText}>Пакет документов согласован</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ApprovalStages;

//  <div className={classes.row}>
//         <div
//           className={clsx(
//             true
//               ? `${classes.iconCheck} sr-0008-circle-check`
//               : `${classes.iconClock} sr-0012-clock`
//           )}
//         />
//         <div className={clsx(true ? classes.lineCheck : classes.lineClock)} />
//         <div>
//           {true ? (
//             <div className={classes.grayText}>19.06.2021 в 20:43</div>
//           ) : (
//             'Ожидание согласования'
//           )}
//           <div className={classes.grayText}>ГНИВЦ Сотрудник ДПП</div>
//           {true && <div className={classes.blackText}>Согласовано</div>}
//         </div>
//       </div>
//       <div className={classes.row}>
//         <div
//           className={clsx(
//             true
//               ? `${classes.iconCheck} sr-0008-circle-check`
//               : `${classes.iconClock} sr-0012-clock`
//           )}
//         />
//         <div className={clsx(true ? classes.lineCheck : classes.lineClock)} />
//         <div>
//           {true ? (
//             <div className={classes.grayText}>19.06.2021 в 20:43</div>
//           ) : (
//             'Ожидание согласования'
//           )}
//           <div className={classes.grayText}>ГНИВЦ Сотрудник УИБ</div>
//           {true && <div className={classes.blackText}>Согласовано</div>}
//         </div>
//       </div>
//       <div className={classes.row}>
//         <div
//           className={clsx(
//             true
//               ? `${classes.iconCheck} sr-0008-circle-check`
//               : `${classes.iconClock} sr-0012-clock`
//           )}
//         />
//         <div className={clsx(true ? classes.lineCheck : classes.lineClock)} />
//         <div>
//           {true ? (
//             <div className={classes.grayText}>19.06.2021 в 20:43</div>
//           ) : (
//             <div className={classes.orangeText}>Ожидание согласования</div>
//           )}
//           <div className={classes.grayText}>Сотрудник ФКУ</div>
//           {true && <div className={classes.blackText}>Согласовано</div>}
//         </div>
//       </div>
//       <div className={classes.row}>
//         <div
//           className={clsx(
//             false
//               ? `${classes.iconCheck} sr-0008-circle-check`
//               : `${classes.iconClock} sr-0012-clock`
//           )}
//         />
//         <div className={clsx(false ? classes.lineCheck : classes.lineClock)} />
//         <div>
//           {false ? (
//             <div className={classes.grayText}>19.06.2021 в 20:43</div>
//           ) : (
//             <div className={classes.orangeText}>Ожидание согласования</div>
//           )}
//           <div className={classes.grayText}>ФНС Сотрудник УИТ</div>
//           {false && <div className={classes.blackText}>Согласовано</div>}
//         </div>
//       </div>
//       <div className={classes.row}>
//         <div
//           className={clsx(
//             false
//               ? `${classes.iconCheck} sr-0008-circle-check`
//               : `${classes.iconClock} sr-0012-clock`
//           )}
//         />
//         <div className={clsx(false && classes.lineCheck)} />
//         <div>
//           {false ? (
//             <div className={classes.grayText}>19.06.2021 в 20:43</div>
//           ) : (
//             <div className={classes.orangeText}>Ожидание согласования</div>
//           )}
//           <div className={classes.grayText}>ФНС Сотрудник УИБ</div>
//           {false && <div className={classes.blackText}>Согласовано</div>}
//         </div>
//       </div>
