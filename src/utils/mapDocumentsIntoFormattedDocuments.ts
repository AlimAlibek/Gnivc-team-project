import DocumentPackage from '../models/DocumentPackage';
import FormattedDocument from '../models/FormattedDocument';
import getColorAndStatus from './getColorAndStatus';

const mapDocumentsIntoFormattedDocuments = (
  documents: DocumentPackage[],
): FormattedDocument[] => documents.map(({ id, versions }) => {
  const {
    status,
    responsiblePerson,
    version,
    label,
    createdAt,
    approvedStartAt,
    approvedEndAt,
  } = versions[versions.length - 1];
  const [color, translatedStatus] = getColorAndStatus(status);
  return {
    id,
    name: { id, label },
    colorAndStatus: { color, translatedStatus },
    responsiblePerson,
    version,
    createdAt,
    approvedStartAt,
    approvedEndAt,
  };
});
export default mapDocumentsIntoFormattedDocuments;
