import Status from '../models/enums/Status';

const getTranslatedStatus = (status: Status): string => {
  switch (status) {
    case Status.SCATCH:
      return 'Черновик';
    case Status.APPROVING:
      return 'На рассмотрении';
    case Status.REFACTORING:
      return 'Возвращено на доработку';
    case Status.APPROVED:
      return 'Одобрено';
    default:
      return 'Незадокументированный статус';
  }
};

export default getTranslatedStatus;
