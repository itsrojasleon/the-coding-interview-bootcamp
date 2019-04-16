import * as React from 'react';
import ExternalUrl from '../ExternalUrl';

function MaxChar() {
  return (
    <div>
      <ExternalUrl url="https://repl.it/@rojasleon/MaxChar" />
    </div>
  );
}
function Usage() {
  return <MaxChar />;
}
Usage.title = 'Max char';
export { MaxChar, Usage as default };
