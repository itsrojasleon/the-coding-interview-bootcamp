import * as React from 'react';

export interface Props {
  children: React.ReactNode;
}
function Method(props: Props) {
  return <span className="method">{props.children}</span>;
}
export default Method;
