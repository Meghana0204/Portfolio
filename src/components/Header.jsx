import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${({ $isScrolled }) => ($isScrolled ? '0.8rem 0' : '1.5rem 0')};
  background: ${({ $isScrolled, theme }) => ($isScrolled ? theme.bgGlass : 'transparent')};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(12px)' : 'none')};
  -webkit-backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(12px)' : 'none')};
  border-bottom: 1px solid ${({ $isScrolled, theme }) => ($isScrolled ? theme.borderGlass : 'transparent')};
  box-shadow: ${({ $isScrolled, theme }) => ($isScrolled ? theme.shadowMd : 'none')};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: ${({ theme }) => theme.textPrimary};
  
  span {
    background: ${({ theme }) => theme.gradientText};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    width: 280px;
    height: 100vh;
    background: ${({ theme }) => theme.bgSecondary};
    border-left: 1px solid ${({ theme }) => theme.borderGlass};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 2rem;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 10000;
  }
`;

const NavLinksList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  position: relative;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.textPrimary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.gradientAccent};
    transition: width 0.2s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bgGlass};
  border: 1px solid ${({ theme }) => theme.borderGlass};
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.1rem;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.2s ease;

  &:hover {
    transform: rotate(20deg) scale(1.1);
    background: ${({ theme }) => theme.bgGlassHover};
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textPrimary};
  z-index: 10001;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Header({ currentTheme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <HeaderWrapper $isScrolled={isScrolled}>
      <NavContainer className="container">
        <Logo to="/" onClick={closeMenu}>
          <span>&lt;Meghana</span>.Pradeep/&gt;
        </Logo>
        
        <Nav $isOpen={isOpen}>
          <NavLinksList>
            <li>
              <StyledNavLink to="/" end onClick={closeMenu}>Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/about" onClick={closeMenu}>About</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/experience" onClick={closeMenu}>Experience</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/projects" onClick={closeMenu}>Projects</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/contact" onClick={closeMenu}>Contact</StyledNavLink>
            </li>
          </NavLinksList>
        </Nav>
        
        <Controls>
          <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
            {currentTheme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </ThemeToggle>
          <MenuToggle onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </MenuToggle>
        </Controls>
      </NavContainer>
    </HeaderWrapper>
  );
}
