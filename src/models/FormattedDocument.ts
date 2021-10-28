interface FormattedDocument {
  id: string;
  name: {
    id: string;
    label: string;
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
}

export default FormattedDocument;
