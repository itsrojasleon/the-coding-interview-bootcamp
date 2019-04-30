import * as React from 'react';
import ChunkMDX from '../content/06-chunkArray.mdx';
import ExternalUrl from '../ExternalUrl';

function Chunk() {
  return (
    <div>
      <ChunkMDX />
      <ExternalUrl url="https://repl.it/@rojasleon/06-ArrayChunk" />
    </div>
  );
}
function Usage() {
  return <Chunk />;
}
Usage.title = 'Chunk Array';
export { Chunk, Usage as default };
