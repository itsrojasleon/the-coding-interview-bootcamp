import * as React from 'react';
import Steps from '../markdown/Steps';
import Code from '../markdown/Code';
import Jump from '../markdown/Jump';
import Keyword from '../markdown/Keyword';
import Parameter from '../markdown/Parameter';
import Method from '../markdown/Method';
import String from '../markdown/String';
import MarginLeft from '../markdown/MarginLeft';
import ExternalUrl from '../markdown/ExternalUrl';

function MaxChar() {
  return (
    <div>
      <Steps>
        Given a string, return the character that is mostcommonly used in the
        string.
      </Steps>
      <Code>
        <Keyword>function</Keyword>(<Parameter>str</Parameter>){'{'}
        <MarginLeft>
          <Keyword>const</Keyword> charMap = {'{}'}
          <Jump jumps={1} />
          <Keyword>let</Keyword> max = 0
          <Jump jumps={1} />
          <Keyword>let</Keyword> maxChar = <String />
          <Jump jumps={2} />
          <Keyword>for</Keyword> (<Keyword>let</Keyword> char of str){'{'}
          <MarginLeft>charMap[char] = charMap[char] + 1 || 1</MarginLeft>
          {'}'}
          <Jump jumps={1} />
          <Keyword>for</Keyword> (<Keyword>let</Keyword> char in charMap){'{'}
          <MarginLeft>
            <Keyword>if</Keyword> (charMap[char] > max) {'{'}
            <MarginLeft>
              max = charMap[char]
              <Jump jumps={1} />
              maxChar = char
            </MarginLeft>
            {'}'}
          </MarginLeft>
          {'}'}
          <Jump jumps={1} />
          <Keyword>return</Keyword> maxChar
        </MarginLeft>
        {'}'}
      </Code>
      <ExternalUrl url="https://repl.it/@rojasleon/MaxChar" />
    </div>
  );
}
function Usage() {
  return <MaxChar />;
}
Usage.title = 'Max char';
export { MaxChar, Usage as default };
