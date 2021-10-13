import React,{ useState } from "react";
import TextField from "@ff/ui-kit/lib/TextField";
import Button from "@ff/ui-kit/lib/Button";

import documentVersionStore from "../../../../stores/documentVersionStore";

import classes from "../DocumentItem.module.scss";
import CommentType from  "../../../../models/interfaces/Comment"

const Comments:React.FC = () => {
   const {version, addComent}=documentVersionStore;
 
const [comment,setComment]=useState('');

const sendComent=()=>{
  if(!comment) {null}
addComent(comment)
setComment('')
}




 const renderComents=({createdAt,time,person,data}:CommentType)=>(
  <div className={classes.block__row}>
   <div>
    {createdAt} {time} {person}
    <div>
     {data}
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
        onChange={(e)=>setComment(e.target.value)}
        value={comment}
          name="large1"
          label=""
          labelStyle="left"
          placeholder="Текстовое поле"
          size="large"
        />
      </div>
      <div className={classes.block__row}>
        <Button onClick={sendComent} type="primary">Кнопка</Button>
      </div>
     {allComents}
    </div>
  );
};
export default Comments;
