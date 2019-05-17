import * as React from 'react';
import AnagramsMDX from '../content/07-anagrams.mdx';
import ExternalUrl from '../ExternalUrl';

function Anagrams() {
  return (
    <div>
      <AnagramsMDX />
      <ExternalUrl url="https://repl.it/@rojasleon/07-Anagrams" />
    </div>
  );
}
function Usage() {
  return <Anagrams />;
}
Usage.title = 'Anagrams';
export { Anagrams, Usage as default };
