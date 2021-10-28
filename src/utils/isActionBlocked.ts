import Version from '../models/Version';

const isActionBlocked = ({
  label, gk, priority, packageType, contour, versionCode,
}: Version): boolean => !(label && gk && priority && packageType && contour && versionCode);
export default isActionBlocked;
