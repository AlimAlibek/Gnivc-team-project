import Version from '../../models/interfaces/Version';

const service = {
  setVersion(number: string | number | undefined, versions: Version[] | undefined) {
    if (number && versions) {
      return versions.find((v) => v.version === number.toString());
    }
  },
};

export default service;
