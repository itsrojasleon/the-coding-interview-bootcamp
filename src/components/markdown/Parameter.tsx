import * as React from 'react';

export interface Props {
  children: React.ReactNode;
}

function Parameter(props: Props) {
  return <span className="parameter">{props.children}</span>;
}
export default Parameter;
