import * as React from 'react';

export interface Props {
  jumps: number;
}

function Jump(props: Props) {
  let element = [];
  for (let i = 0; i < props.jumps; i++) {
    element.push(<br />);
  }
  return (
    <React.Fragment>
      {element.map((e, i) => (
        <span key={i}>{e}</span>
      ))}
    </React.Fragment>
  );
}
export default Jump;
