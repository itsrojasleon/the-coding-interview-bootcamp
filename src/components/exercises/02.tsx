import * as React from 'react';
import Steps from '../markdown/Steps';
import Code from '../markdown/Code';
import Comment from '../markdown/Comment';
import Jump from '../markdown/Jump';
import Keyword from '../markdown/Keyword';
import Parameter from '../markdown/Parameter';
import Method from '../markdown/Method';
import String from '../markdown/String';
import MarginLeft from '../markdown/MarginLeft';
import ExternalUrl from '../markdown/ExternalUrl';

function ReverseString2() {
  return (
    <div>
      <Steps>
        Given a string, return true if the string is a palindrome or false if it
        is not. Palindromes are strings that form the same word if it is
        reversed. *Do* include spaces and punctuation in determining if the
        string is a palindrome.
      </Steps>
      {/* Exercise number 1 */}
      <Code>
        <Comment>// Polindrome 1</Comment>
        <Jump jumps={2} />
        <Keyword>function </Keyword>(<Parameter>str</Parameter>) {'{'}
        <Jump jumps={1} />
        <MarginLeft>
          return str.<Method>split</Method>(<String />
          ).<Method>every</Method>((<Parameter>char</Parameter>,{' '}
          <Parameter>i</Parameter>) => {'{'}
          <MarginLeft>return char === str[str.length - i -1]</MarginLeft>
          {'}'})
        </MarginLeft>
        {'}'}
      </Code>
      <ExternalUrl url="https://repl.it/@rojasleon/Palindrome" />
    </div>
  );
}
function Usage() {
  return <ReverseString2 />;
}
Usage.title = 'Palindrome';
export { ReverseString2, Usage as default };
