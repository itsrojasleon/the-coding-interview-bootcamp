import * as React from 'react';

export interface Props {
  children: React.ReactNode;
}

function MarginLeft(props: Props) {
  return <div className="margin-left">{props.children}</div>;
}
export default MarginLeft;
