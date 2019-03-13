import * as React from 'react';
import Code from '../Code';

function ReverseString() {
  return (
    <div>
      <Code>
        <span>function reverseString(str) {}</span>
      </Code>
    </div>
  );
}
function Usage() {
  return <ReverseString />;
}
Usage.title = 'Reverse String 1';
export { ReverseString, Usage as default };
