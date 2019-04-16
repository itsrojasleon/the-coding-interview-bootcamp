import * as React from 'react';

function Header() {
  return (
    <div role="banner" className="header">
      <h1>The coding interview bootcamp</h1>
      <div className="links">
        <a
          href="https://github.com/rojasleon/the-coding-interview-bootcamp"
          target="_blank"
          className="link-to-github"
        >
          <i className="fab fa-github" />
        </a>
      </div>
    </div>
  );
}
export default Header;
