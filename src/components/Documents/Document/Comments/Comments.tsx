import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextAreaField from '@ff/ui-kit/lib/esm/components/TextAreaField';
import Button from '@ff/ui-kit/lib/Button';
import List from '@ff/ui-kit/lib/esm/components/List';

import classes from './Comment.module.scss';
import RenderComment from './RenderComment';
import Comment from '../../../../models/Comment';
import documentStore from '../../../../stores/documentStore';
import userStore from '../../../../stores/userStore';

type CommentsProps = {
  comments: Comment[] | undefined;
};

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  const { addComent } = documentStore;
  const { name } = userStore;

  const [comment, setComment] = useState('');

  const sendComent = () => {
    if (!comment) {
      return;
    }
    addComent(name, comment);
    setComment('');
  };

  return (
    <div className={classes.component}>
      <h3 className={classes.subtitle}> Комментарии </h3>
      <TextAreaField
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        placeholder="Комментарий"
        size="large"
        fullWidth
        className={classes.textarea}
      />
      <Button onClick={sendComent} type="primary" className={classes.button}>
        Отправить
      </Button>
      {comments?.length ? (
        <List>
          {comments.map((commentData) => (
            <RenderComment key={uuidv4()} {...commentData} />
          ))}
        </List>
      ) : (
        <p>Комментариев нет</p>
      )}
    </div>
  );
};
export default Comments;
