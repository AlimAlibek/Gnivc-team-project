import TextField from "@ff/ui-kit/lib/TextField";
import Button from "@ff/ui-kit/lib/Button";
import documentVersionStore from "../../../../stores/documentVersionStore";
import classes from "../DocumentItem.module.scss";
import CommentType from  "../../../../models/interfaces/Comment"
const Comments = () => {
 const {version}=documentVersionStore


 const renderComents=(props:CommentType)=>(
  <div className={classes.block__row}>
   <div>
    {props.createdAt} {props.time} {props.person}
    <div>
     {props.data}
    </div>
   </div>
  </div>)

  const allComents=version? version.comments.map(coment=>renderComents(coment)):"Коментариев нет"
   

 
 
  return (
    <div className={`${classes.block} ${classes.document__side}`}>
      <div className={classes.block__container}>
        <div className={`${classes.block__row} ${classes.block__row_head}`}>
          <div className={classes.subtitle}> Коменнтарии </div>
        </div>
      </div>
      <div className={classes.block__row}>
        <TextField
          name="small1"
          label=""
          labelStyle="left"
          placeholder="Текстовое поле"
          size="large"
        />
      </div>
      <div className={classes.block__row}>
        <Button type="primary">Кнопка</Button>
      </div>
     {allComents}
    </div>
  );
};
export default Comments;
