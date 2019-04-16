import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

export interface Props {
  props: React.ReactNode;
  children: string;
}
const exampleCode = `
  <div>
    <a href="..">
      <span>
        <strong>Sara Vieira</strong>
        <small class="time">
          Aug 23
        </small>
      </span>
    </a>
  </div>
`;

const CodeBlock = (props: Props) => {
  console.log(vsDark);
  return (
    <Highlight
      theme={vsDark}
      {...defaultProps}
      code={exampleCode}
      language="markup"
      // code={props.children}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
export { CodeBlock };
