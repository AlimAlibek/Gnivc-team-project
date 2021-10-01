import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@ff/ui-kit';

import Status from '../../../models/enums/Status';
import { IVersion } from '../../../models/interfaces/IVersion';
import { IDocument } from '../../../models/interfaces/IDocument';
import documentsStore from '../../../stores/DocumentsStore';

const getTitle = (id: string, documents: Array<IDocument>): string | undefined => (
  documents.find((document) => id === document.id)?.title
);

const getLastVersion = (versions: Array<IVersion>): IVersion => versions[versions.length - 1];

export const getStatus = (status: Status): JSX.Element => {
  switch (status) {
    case Status.APPROVED:
      return <Typography color="lightgreen">Согласовано</Typography>;
    case Status.SCATCH:
      return <Typography color="grey">Черновик</Typography>;
    case Status.APPROVING:
      return <Typography color="orange">На согласовании</Typography>;
    case Status.REFACTORING:
      return <Typography color="orange">Возвращено на доработку</Typography>;
    default:
      return <Typography color="red">Неизвестный статус</Typography>;
  }
};

export const columns = [
  {
    title: 'Название',
    key: '1',
    dataKey: 'id',
    render: (id: string): JSX.Element => (
      <Link to={`/documents/${id}`}>
        {getTitle(id, [...documentsStore.documents])}
      </Link>
    ),
  },
  {
    title: 'Статус',
    key: '2',
    dataKey: 'versions',
    render: (versions: Array<IVersion>): JSX.Element => getStatus(versions[versions.length - 1].status),
  },
  {
    title: 'Ответственный',
    key: '3',
    dataKey: 'versions',
    render: (versions: Array<IVersion>): JSX.Element => (
      <p>{getLastVersion(versions).responsiblePerson}</p>
    ),
  },
  {
    title: 'Версия',
    key: '4',
    dataKey: 'versions',
    render: (versions: Array<IVersion>): JSX.Element => (
      <p>{getLastVersion(versions).version}</p>
    ),
  },
  {
    title: 'Добавлен',
    key: '5',
    dataKey: 'versions',
    render: (versions: Array<IVersion>): JSX.Element => (
      <p>{getLastVersion(versions).createdAt}</p>
    ),
  },
  {
    title: 'Начало согласования',
    key: '6',
    dataKey: 'versions',
    render: (versions: Array<IVersion>): JSX.Element => (
      <p>{getLastVersion(versions).approvedStartAt}</p>
    ),
  },
  {
    title: 'Завершение согласования',
    key: '7',
    dataKey: 'versions',
    render: (versions: Array<IVersion>): JSX.Element => (
      <p>{getLastVersion(versions).approvedEndAt}</p>
    ),
  },
];
