import * as React from 'react';
import PalindromeMDX from '../content/02-palindrome.mdx';
import ExternalUrl from '../ExternalUrl';

function Palindrome() {
  return (
    <div>
      <PalindromeMDX />
      <ExternalUrl url="https://repl.it/@rojasleon/02-Palindrome" />
    </div>
  );
}
function Usage() {
  return <Palindrome />;
}
Usage.title = 'Palindrome';
export { Palindrome, Usage as default };
