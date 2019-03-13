import * as React from 'react';
import Code from '../Code';

function ReverseString() {
  return (
    <div>
      <Code>
        <span className="comment">// Reverse String (1)</span>
        <br />
        <br />
        <span className="keyword">function</span> reverseString(
        <span className="parameter">str</span>) {'{'}
        <br />
        <span style={{ marginLeft: 20 }}>
          <span>return </span>
          <span>str.split('').reverse().join('')</span>
        </span>
        <br />
        {'}'}
      </Code>
    </div>
  );
}
function Usage() {
  return <ReverseString />;
}
Usage.title = 'Reverse String';
export { ReverseString, Usage as default };
