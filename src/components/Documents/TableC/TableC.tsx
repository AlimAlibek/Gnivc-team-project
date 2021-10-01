import { Button, Icon, Table } from "@ff/ui-kit";
import { useEffect } from "react";
import { observer } from "mobx-react";

import { columns } from "./scripts";
import classes from "./TableC.module.scss";
import DocumentsStore from "../../../stores/DocumentsStore";

const TableC: React.FC = observer(() => {
  useEffect(() => {
    DocumentsStore.fetchDocuments();
  }, []);

  if (DocumentsStore.isLoading) return <div>Loading...</div>;
  if (DocumentsStore.error) return <div>There's an error. Try again later</div>;

  return (
    <div className={classes.table}>
      <div className={classes.top}>
        <div className={classes.title}>Пакеты документов</div>
        <Button className={classes.button} variant="outline" type="primary">
          <Icon className={classes.icon} name="plus" />
          <span>Создать пакет документов</span>
        </Button>
      </div>
      <hr />
      <Table columns={columns} rows={DocumentsStore.documents} />
    </div>
  );
});

export default TableC;
