import * as React from 'react';

export interface HelloProps {
  children: React.ReactNode;
}

const Content = (props: HelloProps) => (
  <div className="content">{props.children}</div>
);
export default Content;
