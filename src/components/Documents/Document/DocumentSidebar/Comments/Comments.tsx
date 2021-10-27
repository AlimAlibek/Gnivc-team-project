import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextAreaField from '@ff/ui-kit/lib/esm/components/TextAreaField';
import Button from '@ff/ui-kit/lib/Button';
import List from '@ff/ui-kit/lib/esm/components/List';

import classes from './Comment.module.scss';
import RenderComment from './RenderComment';
import createComment from '../../../../../utils/createComment';
import userStore from '../../../../../stores/userStore';
import documentStore from '../../../../../stores/documentStore';

const Comments: React.FC = () => {
  const { name } = userStore;
  const { version, addCommentAndSave } = documentStore;
  const [comment, setComment] = useState('');

  const comments = version?.comments;

  const sendComent = () => {
    if (comment) {
     addCommentAndSave(comment);
      setComment('');
    }
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
