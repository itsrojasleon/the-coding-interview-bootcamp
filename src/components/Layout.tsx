import * as React from 'react';

export interface Props {
  children: React.ReactNode;
  title: string;
}
function Layout(props: Props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
}
export default Layout;
