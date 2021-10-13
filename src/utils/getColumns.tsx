import React from 'react';
import { Link } from 'react-router-dom';
import { ColDef } from '@ff/ui-kit/lib/esm/components/Table/tableTypes';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';

const getColumns = (): ColDef[] => [
  {
    title: 'Название',
    key: '1',
    dataKey: 'name',
    render: ({ id, title }: { id: string; title: string }): JSX.Element => (
      <Link to={`/documents/${id}`}>{title}</Link>
    ),
  },
  {
    title: 'Статус',
    key: '2',
    dataKey: 'colorAndStatus',
    // prettier-ignore
    render: ({ color, translatedStatus }: { color: string; translatedStatus: string }): JSX.Element => (
      <Typography color={color}>{translatedStatus}</Typography>
    ),
  },
  {
    title: 'Ответственный',
    key: '3',
    dataKey: 'responsiblePerson',
    render: (responsiblePerson: string): JSX.Element => (
      <Typography>{responsiblePerson}</Typography>
    ),
  },
  {
    title: 'Версия',
    key: '4',
    dataKey: 'version',
    render: (version: string): JSX.Element => (
      <Typography>{version}</Typography>
    ),
  },
  {
    title: 'Добавлен',
    key: '5',
    dataKey: 'createdAt',
    render: (createdAt: string): JSX.Element => (
      <Typography>{createdAt}</Typography>
    ),
  },
  {
    title: 'Начало согласования',
    key: '6',
    dataKey: 'approvedStartAt',
    render: (approvedStartAt: string): JSX.Element => (
      <Typography>{approvedStartAt}</Typography>
    ),
  },
  {
    title: 'Завершение согласования',
    key: '7',
    dataKey: 'approvedEndAt',
    render: (approvedEndAt: string): JSX.Element => (
      <Typography>{approvedEndAt}</Typography>
    ),
  },
];
export default getColumns;
