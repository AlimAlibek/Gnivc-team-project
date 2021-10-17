import React from 'react';

import classes from '../Comment.module.scss';
import CommentType from '../../../../../models/interfaces/Comment';

interface CommentCard {
  comment: CommentType;
}

const RenderComment: React.FC<CommentCard> = ({ comment }) => {
  const {
    createdAt, time, person, text,
  } = comment;
  return (
    <div className={classes.row}>
      <div>
       {person} {createdAt} в {time} 
        <div>{text}</div>
      </div>
    </div>
  );
};
export default RenderComment;
