import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@ff/ui-kit';

import Version from '../../../models/interfaces/Version';
import documentsStore from '../../../stores/documentsStore/documentsStore';
import ColorAndStatus from '../../../models/types/ColorAndStatus';

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
    render: (versions: Version[]): JSX.Element => {
      const statusOfTheLastVersion =
        documentsStore.findLastVersion(versions).status;
      const [color, status]: ColorAndStatus = documentsStore.findStatus(
        statusOfTheLastVersion
      );
      return <Typography color={color}>{status}</Typography>;
    },
  },
  {
    title: 'Ответственный',
    key: '3',
    dataKey: 'versions',
    render: (versions: Version[]): JSX.Element => (
      <p>{documentsStore.findLastVersion(versions).responsiblePerson}</p>
    ),
  },
  {
    title: 'Версия',
    key: '4',
    dataKey: 'versions',
    render: (versions: Version[]): JSX.Element => (
      <p>{documentsStore.findLastVersion(versions).version}</p>
    ),
  },
  {
    title: 'Добавлен',
    key: '5',
    dataKey: 'versions',
    render: (versions: Version[]): JSX.Element => (
      <p>{documentsStore.findLastVersion(versions).createdAt}</p>
    ),
  },
  {
    title: 'Начало согласования',
    key: '6',
    dataKey: 'versions',
    render: (versions: Version[]): JSX.Element => (
      <p>{documentsStore.findLastVersion(versions).approvedStartAt}</p>
    ),
  },
  {
    title: 'Завершение согласования',
    key: '7',
    dataKey: 'versions',
    render: (versions: Version[]): JSX.Element => (
      <p>{documentsStore.findLastVersion(versions).approvedEndAt}</p>
    ),
  },
];

export default columns;
