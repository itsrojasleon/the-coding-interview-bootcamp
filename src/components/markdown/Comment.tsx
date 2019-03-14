import * as React from 'react';

export interface Props {
  children: React.ReactNode;
}
function Comment(props: Props) {
  return <span className="comment">{props.children}</span>;
}
export default Comment;
