import * as React from 'react';
import ExternalUrl from '../ExternalUrl';

function Palindrome() {
  return (
    <div>
      <ExternalUrl url="https://repl.it/@rojasleon/Palindrome" />
    </div>
  );
}
function Usage() {
  return <Palindrome />;
}
Usage.title = 'Palindrome';
export { Palindrome, Usage as default };
