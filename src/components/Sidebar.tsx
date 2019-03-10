import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
  filesAndTitles: any;
}
function Sidebar(props: Props) {
  return (
    <div className="sidebar">
      <div className="links-container">
        {props.filesAndTitles.map(
          ({ title, filename }: { title: string; filename: string }) => (
            <Link className="link" key={filename} to={`/${filename}`}>
              {title}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
export default Sidebar;
