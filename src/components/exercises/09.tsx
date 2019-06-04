import * as React from 'react';
import StepsMDX from '../content/09-steps.mdx';
import ExternalUrl from '../ExternalUrl';

function Steps() {
  return (
    <div>
      <StepsMDX />
      <ExternalUrl url='https://repl.it/@rojasleon/09-Steps' />
    </div>
  );
}
function Usage() {
  return <Steps />;
}
Usage.title = 'Steps';
export { Steps, Usage as default };
