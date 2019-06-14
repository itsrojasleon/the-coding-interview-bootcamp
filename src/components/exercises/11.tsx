import * as React from 'react';
import VowelsMDX from '../content/11-vowels.mdx';
import ExternalUrl from '../ExternalUrl';

function Vowels() {
  return (
    <div>
      <VowelsMDX />
      <ExternalUrl url='https://repl.it/@rojasleon/11-Vowels' />
    </div>
  );
}
function Usage() {
  return <Vowels />;
}
Usage.title = 'Vowels';
export { Vowels, Usage as default };
