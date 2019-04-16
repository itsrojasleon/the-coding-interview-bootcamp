import * as React from 'react';
import ExternalUrl from '../ExternalUrl';

function ReverseInt() {
  return (
    <div>
      <ExternalUrl url="https://repl.it/@rojasleon/ReverseInt" />
    </div>
  );
}
function Usage() {
  return <ReverseInt />;
}
Usage.title = 'Reverse an Int';
export { ReverseInt, Usage as default };
