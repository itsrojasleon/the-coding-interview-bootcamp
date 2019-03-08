import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
  filesAndTitles: any;
}
function Sidebar(props: Props) {
  return (
    <div className="sidebar">
      {props.filesAndTitles.map(
        ({ title, filename }: { title: string; filename: string }) => (
          <div key={filename}>
            <Link to={`/${filename}`}>{title}</Link>
          </div>
        )
      )}
    </div>
  );
}
export default Sidebar;
