import * as React from 'react';
import FizzBuzzMDX from '../content/05-fizzBuzz.mdx';
import ExternalUrl from '../ExternalUrl';

function Fizzbuzz() {
  return (
    <div>
      <FizzBuzzMDX />
      <ExternalUrl url="https://repl.it/@rojasleon/05-FizzBuzz" />
    </div>
  );
}
function Usage() {
  return <Fizzbuzz />;
}
Usage.title = 'Fizz Buzz';
export { Fizzbuzz, Usage as default };
