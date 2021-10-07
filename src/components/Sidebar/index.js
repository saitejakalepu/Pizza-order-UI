import {React,useState,useEffect} from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';



const Sidebar = ({ handleMouseOver , handleMouseOut ,isOpen }) => {

  const [windowSize, setWindowSize] = useState();
  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowSize)


  return (
    <SidebarContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} isOpen={isOpen} >
      {windowSize< 400 &&
 <Icon onClick={handleMouseOut}>
 <CloseIcon />
</Icon>
      }
     
      <SidebarMenu>
        <SidebarLink to='/'>Pizzas</SidebarLink>
        <SidebarLink to='/'>Desserts</SidebarLink>
        <SidebarLink to='/'>Contact Us</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
