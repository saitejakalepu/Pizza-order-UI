import React from 'react';
import { Nav, NavIcon, Bars } from './NavbarElements';

const Navbar = React.memo(({ handleMouseOver }) => {
  return (
    <>
      <Nav>
        <NavIcon onMouseOver={handleMouseOver}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
});


export default Navbar;
