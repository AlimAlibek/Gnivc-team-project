import getColorAndStatus from './getColorAndStatus';
import Document from '../models/interfaces/Document';
import FormattedDocument from '../models/interfaces/FormattedDocument';

const formatDocuments = (documents: Document[]): FormattedDocument[] =>
  documents.map(({ id, title, versions }) => {
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
export default formatDocuments;
