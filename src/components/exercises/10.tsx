import * as React from 'react';
import PyramidMDX from '../content/10-pyramid.mdx';
import ExternalUrl from '../ExternalUrl';

function Pyramid() {
  return (
    <div>
      <PyramidMDX />
      <ExternalUrl url='https://repl.it/@rojasleon/10-pyramid' />
    </div>
  );
}
function Usage() {
  return <Pyramid />;
}
Usage.title = 'Pyramid';
export { Pyramid, Usage as default };
