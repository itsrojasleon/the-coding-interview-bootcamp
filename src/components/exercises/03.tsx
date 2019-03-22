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

function ReverseInt() {
  return (
    <div>
      <Steps>
        Given an integer, return an integer that is the reverse ordering of
        numbers.
      </Steps>
      <Code>
        <Keyword>function </Keyword>reverseInt(<Parameter>int</Parameter>){'{'}
        <MarginLeft>
          <Keyword>const </Keyword>reversed = int.<Method>toString</Method>().
          <Method>split</Method>(<String />
          ).<Method>reverse</Method>().
          <Method>join</Method>(
          <String />)
          <Jump jumps={1} />
          return <Method>parseInt</Method>(reversed) * Math.
          <Method>sign</Method>(int)
        </MarginLeft>
        {'}'}
      </Code>
    </div>
  );
}
function Usage() {
  return <ReverseInt />;
}
Usage.title = 'Reverse an Int';
export { ReverseInt, Usage as default };
