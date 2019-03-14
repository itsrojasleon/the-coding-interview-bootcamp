import * as React from 'react';

export interface Props {
  children: React.ReactNode;
}
function Steps(props: Props) {
  return <p className="steps">{props.children}</p>;
}
export default Steps;
