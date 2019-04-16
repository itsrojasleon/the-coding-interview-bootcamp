import * as React from 'react';

export interface Props {
  url: string;
}

function ExternalUrl(props: Props) {
  return (
    <a className="external-url" target="_blank" href={props.url}>
      <i className="fas fa-external-link-alt" />
    </a>
  );
}
export default ExternalUrl;
