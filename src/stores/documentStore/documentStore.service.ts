import httpClient from '../_api';
import Status from '../../models/Status';
import Version from '../../models/Version';
import DocumentPackage from '../../models/DocumentPackage';

const service = {
  async fetchDocument(id: string): Promise<DocumentPackage> {
    const response = await httpClient.get<DocumentPackage>(`/documents/${id}`);
    return response.data;
  },

  async patchDoc(doc:DocumentPackage){
try {
    const response = await httpClient.patch(`/documents/${doc.id}`, doc);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
  },

    async postDoc(doc:DocumentPackage){
try {
    const response = await httpClient.post(`/documents/`, doc);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
  },

  isTheLastVersionFinished(versions: Version[] | undefined): boolean {
    if (!versions) return false;
    return versions[versions.length - 1].status === Status.APPROVED;
  },
};

export default service;
