import DocumentPackage from '../models/DocumentPackage';
import Version from '../models/Version';

const compareVersions = (
  doc: DocumentPackage | undefined,
  version: Version | undefined,
  index: number | undefined,
): boolean => {
  if (doc && version && index!==undefined) return !(JSON.stringify(doc.versions[index]) === JSON.stringify(version));
  return false;
};
export default compareVersions;
