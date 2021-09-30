import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IDocument } from "../../models/interfaces/IDocument";
import $api from "../../api";

const Doc: React.FC = () => {
  const { title }: { title: string } = useParams();

  const [doc, setDoc] = useState<IDocument>();
  useEffect(() => {
    $api.get("documents").then((response) => {
      const obj = response.data.find((doc: IDocument) => title === doc.title);
      setDoc(obj);
      console.log(obj);
    });
  }, []);

  if (!doc) return <div>Loading...</div>;

  return (
    <div>
      {/* <p>{doc.versions.}</p>
      <p>{doc.begin}</p>
      <p>{doc.end}</p>
      <p>{doc.id}</p>
      <p>{doc.name}</p>
      <p>{doc.responsible}</p>
      <p>{doc.status}</p>
      <p>{doc.version}</p> */}
    </div>
  );
};

export default Doc;
