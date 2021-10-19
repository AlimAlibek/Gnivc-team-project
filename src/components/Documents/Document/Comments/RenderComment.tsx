import React from 'react';
import ListItem from '@ff/ui-kit/lib/esm/components/ListItem';
import Typography from '@ff/ui-kit/lib/esm/components/Typography';

import classes from './Comment.module.scss';
import CommentType from '../../../../models/Comment';

const RenderComment: React.FC<CommentType> = ({
  createdAt,
  time,
  person,
  text,
}) => (
  <ListItem className={classes.listitem}>
    <Typography className={classes.person}>
      {person} {createdAt} в {time}
    </Typography>
    <Typography.Paragraph className={classes.content}>
      {text}
    </Typography.Paragraph>
  </ListItem>
);
export default RenderComment;
