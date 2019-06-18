import * as React from 'react';
import MatrixMDX from '../content/12-matrix.mdx';
import ExternalUrl from '../ExternalUrl';

function Matrix() {
  return (
    <div>
      <MatrixMDX />
      <ExternalUrl url='https://repl.it/@rojasleon/12-Matrix' />
    </div>
  );
}
function Usage() {
  return <Matrix />;
}
Usage.title = 'Matrix';
export { Matrix, Usage as default };
