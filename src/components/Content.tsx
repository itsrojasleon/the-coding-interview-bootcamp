import * as React from 'react';

export interface HelloProps {
  children: React.ReactNode;
}

const Content = (props: HelloProps) => <div>{props.children}</div>;
export default Content;
