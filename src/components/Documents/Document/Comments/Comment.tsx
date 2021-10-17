import React, { useState } from 'react';
import TextField from '@ff/ui-kit/lib/TextField';
import Button from '@ff/ui-kit/lib/Button';
import clsx from 'clsx';

import documentVersionStore from '../../../../stores/documentVersionStore';
import classes from './Comment.module.scss';
import RenderComment from './RenderComment';
import CommentType from '../../../../models/interfaces/Comment';

const Comments: React.FC = () => {
  const { version, addComent } = documentVersionStore;

  const [commentText, setComment] = useState('');

  const sendComent = () => {
    if (!commentText) { null; }
    addComent(commentText);
    setComment('');
  };

  const allComments = version ? version.comments.map((comment) => <RenderComment comment={comment} />) : 'Коментариев нет';

  return (
    <div className={clsx(classes.block, classes.side)}>
      <div className={classes.container}>
        <div className={clsx(classes.row, classes.head)}>
          <div className={classes.subtitle}> Коменнтарии </div>
        </div>
      </div>
      <div className={classes.row}>
        <TextField
          onChange={(e) => setComment(e.target.value)}
          value={commentText}
          name="large1"
          label=""
          labelStyle="left"
          placeholder="Текстовое поле"
          size="large"
        />
      </div>
      <div className={classes.row}>
        <Button onClick={sendComent} type="primary">Кнопка</Button>
      </div>
      {allComments}
    </div>
  );
};
export default Comments;
