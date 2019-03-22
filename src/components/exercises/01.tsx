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
import MarginLeft from '../markdown/MarginLeft';

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
        <MarginLeft>
          <span>return </span>
          <>
            str.<Method>split</Method>(
            <String />
            ).<Method>reverse</Method>().<Method>join</Method>(
            <String />)
          </>
        </MarginLeft>
        {'}'}
      </Code>
      {/* Exercise number 2 */}
      <Code>
        <Comment>// Reverse String (2)</Comment>
        <Jump jumps={2} />
        <Keyword>function</Keyword> reverseString(
        <Parameter>str</Parameter>) {'{'}
        <Jump jumps={1} />
        <MarginLeft>
          <Keyword>let </Keyword>reversed = <String />
          <Jump jumps={2} />
          <Keyword>for</Keyword>(<Keyword>let </Keyword>character of{' '}
          <Parameter>str</Parameter>){`{`}
          <Jump jumps={1} />
          <MarginLeft>reversed = character + reversed</MarginLeft>
          {`}`}
          <Jump jumps={1} />
          <Keyword>return </Keyword>reversed
        </MarginLeft>
        {'}'}
      </Code>
      {/* Exercise number 3 */}
      <Code>
        <Comment>// Reverse String (3)</Comment>
        <Jump jumps={2} />
        <Keyword>function</Keyword> reverseString(<Parameter>str</Parameter>)
        {`{`}
        <Jump jumps={1} />
        <MarginLeft>
          return <Parameter>str</Parameter>.<Method>split</Method>(
          <String />
          ).<Method>reduce</Method>((<Parameter>rev</Parameter>,{' '}
          <Parameter>char</Parameter>) => char + /> rev, <String />)
          <Jump jumps={1} />
        </MarginLeft>
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
