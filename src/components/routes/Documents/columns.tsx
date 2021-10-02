import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@ff/ui-kit';

import IVersion from '../../../models/interfaces/IVersion';
import documentsStore from '../../../stores/documentsStore/documentsStore';
import TColorAndStatus from '../../../models/types/TColorAndStatus';

const columns = [
  {
    title: 'Название',
    key: '1',
    dataKey: 'id',
    render: (id: string): JSX.Element => (
      <Link to={`/documents/${id}`}>
        {documentsStore.findTitle(id, [...documentsStore.documents])}
      </Link>
    ),
  },
  {
    title: 'Статус',
    key: '2',
    dataKey: 'versions',
    render: (versions: IVersion[]): JSX.Element => {
      const statusOfTheLastVersion = documentsStore.findLastVersion(versions).status;
      const [color, status]: TColorAndStatus = documentsStore.findStatus(
        statusOfTheLastVersion,
      );
      return <Typography color={color}>{status}</Typography>;
    },
  },
  {
    title: 'Ответственный',
    key: '3',
    dataKey: 'versions',
    render: (versions: IVersion[]): JSX.Element => (
      <p>{documentsStore.findLastVersion(versions).responsiblePerson}</p>
    ),
  },
  {
    title: 'Версия',
    key: '4',
    dataKey: 'versions',
    render: (versions: IVersion[]): JSX.Element => (
      <p>{documentsStore.findLastVersion(versions).version}</p>
    ),
  },
  {
    title: 'Добавлен',
    key: '5',
    dataKey: 'versions',
    render: (versions: IVersion[]): JSX.Element => (
      <p>{documentsStore.findLastVersion(versions).createdAt}</p>
    ),
  },
  {
    title: 'Начало согласования',
    key: '6',
    dataKey: 'versions',
    render: (versions: IVersion[]): JSX.Element => (
      <p>{documentsStore.findLastVersion(versions).approvedStartAt}</p>
    ),
  },
  {
    title: 'Завершение согласования',
    key: '7',
    dataKey: 'versions',
    render: (versions: IVersion[]): JSX.Element => (
      <p>{documentsStore.findLastVersion(versions).approvedEndAt}</p>
    ),
  },
];

export default columns;
