import * as React from 'react';

export interface Props {
  children: React.ReactNode;
}

function Code(props: Props) {
  return (
    <div className="highlight">
      <pre>
        <code>{props.children}</code>
      </pre>
    </div>
  );
}
export default Code;
