import * as React from 'react';
import CapitalizeMDX from '../content/08-capitalize.mdx';
import ExternalUrl from '../ExternalUrl';

function Capitalize() {
  return (
    <div>
      <CapitalizeMDX />
      <ExternalUrl url="https://repl.it/@rojasleon/08-Capitalize" />
    </div>
  );
}
function Usage() {
  return <Capitalize />;
}
Usage.title = 'Capitalize';
export { Capitalize, Usage as default };
