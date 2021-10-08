import getColorAndStatus from './getColorAndStatus';
import Document from '../models/interfaces/Document';

type RowForTable = {
  id: string;
  name: {
    id: string;
    title: string;
  };
  colorAndStatus: {
    color: string;
    translatedStatus: string;
  };
  responsiblePerson: string;
  version: string;
  createdAt: string;
  approvedStartAt: string;
  approvedEndAt: string;
};

const getRows = (documents: Document[]): RowForTable[] => documents.map(({ id, title, versions }) => {
  const {
    status,
    responsiblePerson,
    version,
    createdAt,
    approvedStartAt,
    approvedEndAt,
  } = versions[versions.length - 1];
  const [color, translatedStatus] = getColorAndStatus(status);
  return {
    id,
    name: { id, title },
    colorAndStatus: { color, translatedStatus },
    responsiblePerson,
    version,
    createdAt,
    approvedStartAt,
    approvedEndAt,
  };
});
export default getRows;
