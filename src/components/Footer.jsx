import React from 'react';
import Substack from '../images/substack-icon.svg';
import Github from '../images/github-icon.svg';

function Footer() {
  return (
    <footer>
      <a href="https://substack.com/@noahkiser" target='_blank'>
        <img src={Substack} alt="substack icon" />
      </a>
      <a href="https://github.com/kisernl" target='_blank'>
        <img src={Github} alt="github icon" />
      </a>
    </footer>
  );
}

export default Footer;
