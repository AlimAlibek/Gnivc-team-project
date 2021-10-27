import Comment from '../models/Comment';

const createComment = (text: string, name: string): Comment => ({
  text,
  person: name,
  createdAt: new Date().toLocaleDateString('ru'),
  time: new Date().toLocaleTimeString('ru'),
});

export default createComment;
