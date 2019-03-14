import * as React from 'react';

export interface Props {
  children: React.ReactNode;
}

function Keyword(props: Props) {
  return <span className="keyword">{props.children}</span>;
}
export default Keyword;
