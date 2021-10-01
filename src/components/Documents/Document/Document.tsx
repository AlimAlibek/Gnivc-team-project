import { observer } from "mobx-react";
import { useEffect } from "react";
import { useParams } from "react-router";

import { getStatus } from "../TableC/scripts";
import DocumentsStore from "../../../stores/DocumentsStore";

const Doc: React.FC = observer(() => {
  const { id }: { id: string } = useParams();
  useEffect(() => {
    DocumentsStore.fetchDocument(id);
  }, []);

  if (DocumentsStore.isLoading) return <div>Loading...</div>;
  if (DocumentsStore.error)
    return <div> There's an error. Perhaps this document does not exist</div>;

  return (
    //Здесь будет свёрстанная страница. Код снизу создан только для теста
    <section>
      <p>Наименование: {DocumentsStore.document?.title}</p>
      <hr />
      {DocumentsStore.document?.versions.map((version) => (
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
