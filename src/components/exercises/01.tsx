import * as React from 'react';
import ExternalUrl from '../ExternalUrl';
// rs = reverse String
import RS from '../markdown/reverseString.mdx';

function ReverseString() {
  return (
    <div>
      <RS />
      <ExternalUrl url="https://repl.it/@rojasleon/ReverseString" />
    </div>
  );
}
function Usage() {
  return <ReverseString />;
}
Usage.title = 'Reverse String';
export { ReverseString, Usage as default };
