import * as React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <nav className="nav">
        <Link className="title-bootcamp" to="/">
          The coding interview bootcamp
        </Link>
        <div className="links">
          <a
            href="https://github.com/rojasleon/the-coding-interview-bootcamp"
            target="_blank"
            className="link-to-github"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Header;
