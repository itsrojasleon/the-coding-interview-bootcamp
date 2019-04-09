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
      <Code>S+</Code>
    </div>
  );
}
function Usage() {
  return <MaxChar />;
}
Usage.title = 'Max char';
export { MaxChar, Usage as default };
