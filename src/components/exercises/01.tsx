import * as React from 'react';
import Code from '../markdown/Code';
import Steps from '../markdown/Steps';
import String from '../markdown/String';
import Jump from '../markdown/Jump';
import Comment from '../markdown/Comment';
import Keyword from '../markdown/Keyword';
import Parameter from '../markdown/Parameter';
import ExternalUrl from '../markdown/ExternalUrl';
import Method from '../markdown/Method';

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
          <>
            str.<Method>split</Method>(
            <String />
            ).<Method>reverse</Method>().<Method>join</Method>(
            <String />)
          </>
        </span>
        <Jump jumps={1} />
        {'}'}
      </Code>
      {/* Exercise number 2 */}
      <Code>
        <Comment>// Reverse String (2)</Comment>
        <Jump jumps={2} />
        <Keyword>function</Keyword> reverseString(
        <Parameter>str</Parameter>) {'{'}
        <Jump jumps={1} />
        <div style={{ marginLeft: 20 }}>
          <Keyword>let </Keyword>reversed = <String />
          <Jump jumps={2} />
          <Keyword>for</Keyword>(<Keyword>let </Keyword>character of{' '}
          <Parameter>str</Parameter>){`{`}
          <Jump jumps={1} />
          <span style={{ marginLeft: 20 }}>
            reversed = character + reversed
          </span>
          <Jump jumps={1} />
          {`}`}
          <Jump jumps={1} />
          <Keyword>return </Keyword>reversed
        </div>
        {'}'}
      </Code>
      {/* Exercise number 3 */}
      <Code>
        <Comment>// Reverse String (3)</Comment>
        <Jump jumps={2} />
        <Keyword>function</Keyword> reverseString(<Parameter>str</Parameter>)
        {`{`}
        <Jump jumps={1} />
        <div style={{ marginLeft: 20 }}>
          return <Parameter>str</Parameter>.<Method>split</Method>(
          <String />
          ).<Method>reduce</Method>((<Parameter>rev</Parameter>,{' '}
          <Parameter>char</Parameter>) => char + rev, <String />)
          <Jump jumps={1} />
        </div>
        {`}`}
      </Code>
      <ExternalUrl url="https://repl.it/@rojasleon/ReverseString" />
    </div>
  );
}
function Usage() {
  return <ReverseString />;
}
Usage.title = 'Reverse String';
export { ReverseString, Usage as default };
