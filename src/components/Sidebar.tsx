import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface Props {
  filesAndTitles: any;
}
function Sidebar(props: Props) {
  const activeStyle = {
    backgroundColor: 'var(--background-brown)',
    color: 'var(--text-color-2)'
  };
  return (
    <div className="sidebar">
      <div className="links-container">
        {props.filesAndTitles.map(
          ({ title, filename }: { title: string; filename: string }) => (
            <NavLink
              activeStyle={activeStyle}
              className="link"
              key={filename}
              to={`/${filename}`}
            >
              {title}
            </NavLink>
          )
        )}
      </div>
    </div>
  );
}
export default Sidebar;
