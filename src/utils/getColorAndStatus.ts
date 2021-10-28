import Status from '../models/Status';
import ColorAndStatus from '../models/ColorAndStatus';

const getColorAndStatus = (status: Status | undefined): ColorAndStatus => {
  switch (status) {
    case Status.SCATCH:
      return ['#94979E', 'Черновик'];
    case Status.APPROVING:
      return ['#FFBF00', 'На рассмотрении'];
    case Status.REFACTORING:
      return ['#FFBF00', 'Возвращено на доработку'];
    case Status.APPROVED:
      return ['#40BF54', 'Одобрено'];
    default:
      return ['#CC0000', 'Незадокументированный статус'];
  }
};

export default getColorAndStatus;
