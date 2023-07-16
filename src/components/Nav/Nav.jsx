import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <>
      <nav>
        <a
          href="#top"
          onClick={() => setActiveNav('#top')}
          className={activeNav === '#top' ? 'active' : ''}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          <BiBook />
        </a>
        <a
          href="#suggestion"
          onClick={() => setActiveNav('#suggestion')}
          className={activeNav === '#suggestion' ? 'active' : ''}
        >
          <RiServiceLine />
        </a>
        <a
          href="#testimonials"
          onClick={() => setActiveNav('#testimonials')}
          className={activeNav === '#testimonials' ? 'active' : ''}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </>
  );
};

export default Nav;
