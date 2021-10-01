import { Link } from "react-router-dom";
import { Typography } from "@ff/ui-kit";

import { Status } from "../../../models/enums/Status";
import { IVersion } from "../../../models/interfaces/IVersion";
import { IDocument } from "../../../models/interfaces/IDocument";
import DocumentsStore from "../../../stores/DocumentsStore";

const getTitle = (id: string, arr: Array<IDocument>): string | undefined =>
  arr.find((document) => id === document.id)?.title;

const getLastVersion = (arr: Array<IVersion>): IVersion => arr[arr.length - 1];

export const getStatus = (status: Status): JSX.Element => {
  switch (status) {
    case Status.Approved:
      return <Typography color="lightgreen">Согласовано</Typography>;
    case Status.Scatch:
      return <Typography color="grey">Черновик</Typography>;
    case Status.Approving:
      return <Typography color="orange">На согласовании</Typography>;
    case Status.Refactoring:
      return <Typography color="orange">Возвращено на доработку</Typography>;
    default:
      return <Typography color="red">Неизвестный статус</Typography>;
  }
};

export const columns = [
  {
    title: "Название",
    key: "1",
    dataKey: "id",
    render: (id: string) => (
      <Link to={`/documents/${id}`}>
        {getTitle(id, [...DocumentsStore.documents])}
      </Link>
    ),
  },
  {
    title: "Статус",
    key: "2",
    dataKey: "versions",
    render: (versions: Array<IVersion>) =>
      getStatus(versions[versions.length - 1].status),
  },
  {
    title: "Ответственный",
    key: "3",
    dataKey: "versions",
    render: (versions: Array<IVersion>) => (
      <p>{getLastVersion(versions).responsiblePerson}</p>
    ),
  },
  {
    title: "Версия",
    key: "4",
    dataKey: "versions",
    render: (versions: Array<IVersion>) => (
      <p>{getLastVersion(versions).version}</p>
    ),
  },
  {
    title: "Добавлен",
    key: "5",
    dataKey: "versions",
    render: (versions: Array<IVersion>) => (
      <p>{getLastVersion(versions).createdAt}</p>
    ),
  },
  {
    title: "Начало согласования",
    key: "6",
    dataKey: "versions",
    render: (versions: Array<IVersion>) => (
      <p>{getLastVersion(versions).approvedStartAt}</p>
    ),
  },
  {
    title: "Завершение согласования",
    key: "7",
    dataKey: "versions",
    render: (versions: Array<IVersion>) => (
      <p>{getLastVersion(versions).approvedEndAt}</p>
    ),
  },
];
