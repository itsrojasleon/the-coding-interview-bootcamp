import * as React from 'react';
import ExternalUrl from '../ExternalUrl';
// rs = reverse String
import ReverseStringMD from '../content/01-reverseString.mdx';

function ReverseString() {
  return (
    <div>
      <ReverseStringMD />
      <ExternalUrl url="https://repl.it/@rojasleon/01-ReverseString" />
    </div>
  );
}
function Usage() {
  return <ReverseString />;
}
Usage.title = 'Reverse String';
export { ReverseString, Usage as default };
