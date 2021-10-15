import Version from '../../models/interfaces/Version';

const service = {
  setVersion(number: string, versions: Version[]) {
    return versions.find((v) => v.version === number) || null;
  },

};

export default service;
