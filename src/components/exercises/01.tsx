import * as React from 'react';
import Code from '../Code';
import Steps from '../markdown/Steps';
import String from '../markdown/String';
import Jump from '../markdown/Jump';
import Comment from '../markdown/Comment';
import Keyword from '../markdown/Keyword';
import Parameter from '../markdown/Parameter';

// Comments

function ReverseString() {
  return (
    <div>
      <Steps>
        Given a string, return a new string with the reversed order of
        characters.
      </Steps>
      {/* Exercise number 1 */}
      <Code>
        <Comment>// Reverse String (1)</Comment>
        <Jump jumps={2} />
        <Keyword>function</Keyword> reverseString(
        <Parameter>str</Parameter>) {'{'}
        <Jump jumps={1} />
        <span style={{ marginLeft: 20 }}>
          <span>return </span>
          <span>
            str.split(
            <String />
            ).reverse().join(
            <String />)
          </span>
        </span>
        <Jump jumps={1} />
        {'}'}
      </Code>
      {/* Exercise number 2 */}
    </div>
  );
}
function Usage() {
  return <ReverseString />;
}
Usage.title = 'Reverse String';
export { ReverseString, Usage as default };
