import * as React from 'react';
import MaxCharMDX from '../content/04-maxChar.mdx';
import ExternalUrl from '../ExternalUrl';

function MaxChar() {
  return (
    <div>
      <MaxCharMDX />
      <ExternalUrl url="https://repl.it/@rojasleon/04-MaxChar" />
    </div>
  );
}
function Usage() {
  return <MaxChar />;
}
Usage.title = 'Max char';
export { MaxChar, Usage as default };
