import * as React from 'react';
import ReverseIntMDX from '../content/03-reverseInt.mdx';
import ExternalUrl from '../ExternalUrl';

function ReverseInt() {
  return (
    <div>
      <ReverseIntMDX />
      <ExternalUrl url="https://repl.it/@rojasleon/03-ReverseInt" />
    </div>
  );
}
function Usage() {
  return <ReverseInt />;
}
Usage.title = 'Reverse an Int';
export { ReverseInt, Usage as default };
