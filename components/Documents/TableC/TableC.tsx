import { Button, Icon, Table } from "@ff/ui-kit";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $api from "../../../api";
import { Status } from "../../../models/enums/Status";
import { IDocument } from "../../../models/interfaces/IDocument";
import { IVersion } from "../../../models/interfaces/IVersion";
import classes from "./TableC.module.scss";

const columns = [
  {
    title: "Название",
    key: "1",
    dataKey: "title",
    render: (title: string) => <Link to={`/documents/${title}`}>{title}</Link>,
  },
  {
    title: "Статус",
    key: "2",
    dataKey: "versions",
    render: (versions: Array<IVersion>) => (
      <p
        style={
          versions[versions.length - 1].status === Status.Reconciled
            ? { color: "lightGreen" }
            : versions[versions.length - 1].status === Status.Scatch
            ? { color: "gray" }
            : { color: "orange" }
        }
      >
        {versions[versions.length - 1].status}
      </p>
    ),
  },
  {
    title: "Ответственный",
    key: "3",
    dataKey: "versions",
    render: (versions: Array<IVersion>) => (
      <p>{versions[versions.length - 1].responsiblePerson}</p>
    ),
  },
  {
    title: "Версия",
    key: "4",
    dataKey: "versions",
    render: (versions: Array<IVersion>) => (
      <p>{versions[versions.length - 1].version}</p>
    ),
  },
  {
    title: "Добавлен",
    key: "5",
    dataKey: "versions",
    render: (versions: Array<IVersion>) => (
      <p>{versions[versions.length - 1].createdAt}</p>
    ),
  },
  {
    title: "Начало согласования",
    key: "6",
    dataKey: "versions",
    render: (versions: Array<IVersion>) => (
      <p>{versions[versions.length - 1].approvedStartAt}</p>
    ),
  },
  {
    title: "Завершение согласования",
    key: "7",
    dataKey: "versions",
    render: (versions: Array<IVersion>) => (
      <p>{versions[versions.length - 1].approvedEndAt}</p>
    ),
  },
];
const TableC: React.FC = () => {
  const [docs, setDocs] = useState<Array<IDocument>>([]);
  useEffect(() => {
    $api.get("documents").then((data) => setDocs(data.data));
  }, []);

  return (
    <div className={classes.table}>
      <div className={classes.top}>
        <div className={classes.title}>Пакеты документов</div>
        <Button className={classes.button} variant="outline" type="primary">
          <Icon className={classes.icon} name="plus" />{" "}
          <span>Создать пакет документов</span>
        </Button>
      </div>
      <hr />
      <Table columns={columns} rows={docs} />
    </div>
  );
};

export default TableC;
