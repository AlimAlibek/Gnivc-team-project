import React, { useState } from 'react';
import TextAreaField from '@ff/ui-kit/lib/esm/components/TextAreaField';
import Button from '@ff/ui-kit/lib/Button';
import List from '@ff/ui-kit/lib/esm/components/List';
import { v4 as uuidv4 } from 'uuid';

import RenderComment from './RenderComment';
import documentStore from '../../../../../stores/documentStore';
import classes from './Comment.module.scss';
import userStore from '../../../../../stores/userStore';
import Comment from '../../../../../models/Comment';

const Comments: React.FC = () => {
  const { version, addComent } = documentStore;
  const comments = version?.comments;
  const [comment, setComment] = useState('');
  const sendComent = () => {
    if (!comment) {
      return;
    }
    addComent(comment);
    setComment('');
  };
  return (
    <>
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

    </>
  );
};
export default Comments;
