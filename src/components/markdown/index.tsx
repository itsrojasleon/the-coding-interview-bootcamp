import * as React from 'react';
import './styles.css';

export interface Props {
  props: React.ReactNode;
}

const Pre = (props: Props) => {
  return <div className="pre" {...props} />;
};
export { Pre };
