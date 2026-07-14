import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.bgSecondary};
  border-top: 1px solid ${({ theme }) => theme.borderGlass};
  padding: 3rem 0;
  text-align: center;
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.9rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const FooterNav = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.textSecondary};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accentIndigo};
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container className="container">
        <FooterNav>
          <li><FooterLink to="/">Home</FooterLink></li>
          <li><FooterLink to="/about">About</FooterLink></li>
          <li><FooterLink to="/experience">Experience</FooterLink></li>
          <li><FooterLink to="/projects">Projects</FooterLink></li>
          <li><FooterLink to="/contact">Contact</FooterLink></li>
        </FooterNav>
        <p>&copy; 2026 Meghana Pradeep. All Rights Reserved. Built with Visual Excellence & React.</p>
      </Container>
    </FooterWrapper>
  );
}
