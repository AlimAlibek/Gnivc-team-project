import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';

import { getStatus } from '../TableComponent/scripts';
import documentsStore from '../../../stores/DocumentsStore';

const Doc: React.FC = observer(() => {
  const { id }: { id: string } = useParams();
  useEffect(() => {
    documentsStore.fetchDocument(id);
  }, [id]);

  if (documentsStore.isLoading) {
    return (<div>Loading...</div>);
  }
  if (documentsStore.error) {
    return (<div> There&apos;s an error. Perhaps this document does not exist</div>);
  }

  return (
    // Здесь будет свёрстанная страница. Код снизу создан только для теста
    <section>
      <p>Наименование: {documentsStore.document?.title}</p>
      <hr />
      {documentsStore.document?.versions.map((version) => (
        <article key={version.version}>
          <p>Версия: {version.version}</p>
          <p>Тип пакета: {version.type}</p>
          {getStatus(version.status)}
          <p>Ответственный: {version.responsiblePerson}</p>
          <p>Создано: {version.createdAt}</p>
          <p>ApprovedStartAt: {version.approvedStartAt}</p>
          <p>ApprovedEndAt: {version.approvedEndAt}</p>
          <p>Согласующая сторона: {version.approvingPerson}</p>
          <hr />
        </article>
      ))}
    </section>
  );
});

export default Doc;
