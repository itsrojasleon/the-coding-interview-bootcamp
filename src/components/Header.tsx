import * as React from 'react';

function Header() {
  return (
    <div className="header">
      <nav className="nav">
        <h1 className="title-bootcamp">The coding interview bootcamp</h1>
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
