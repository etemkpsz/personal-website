import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2d3436;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  
  &:hover {
    .logo-emoji {
      transform: rotate(10deg) scale(1.1);
    }
    
    .logo-text::after {
      width: 100%;
    }
  }
`;

const LogoEmoji = styled.span`
  font-size: 1.8rem;
  transition: transform 0.3s ease;
`;

const LogoText = styled.span`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #0984e3, #00cec9);
    transition: width 0.3s ease;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #636e72;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 5px;
  transition: all 0.3s;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(9, 132, 227, 0.1);
    border-radius: 5px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: #a8e6cf;
    
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <LogoText className="logo-text">Personal Website</LogoText>
        </Logo>
        <Nav>
          <NavLink to="/">Ana Sayfa</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/hakkimda">Hakkımda</NavLink>
          <NavLink to="/iletisim">İletişim</NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 