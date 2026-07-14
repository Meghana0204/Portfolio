import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 2000;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity 0.4s ease;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.bgSecondary};
  border: 1px solid ${({ theme }) => theme.borderGlass};
  border-radius: 24px;
  max-width: 700px;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 2.5rem;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadowLg};
  transform: ${({ $isOpen }) => ($isOpen ? 'scale(1)' : 'scale(0.9)')};
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const MediaBox = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, ${({ theme }) => theme.bgGlass} 0%, ${({ theme }) => theme.accentIndigoGlow} 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.borderGlass};
  flex-shrink: 0;

  svg {
    width: 40px;
    height: 40px;
    fill: ${({ theme }) => theme.accentIndigo};
  }
`;

const HeaderText = styled.div`
  h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: ${({ theme }) => theme.textPrimary};
  }
  p {
    color: ${({ theme }) => theme.accentViolet};
    font-weight: 500;
    font-size: 0.95rem;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  background: ${({ theme }) => theme.bgGlass};
  border: 1px solid ${({ theme }) => theme.borderGlass};
  border-radius: 16px;
  padding: 1.25rem;
`;

const MetaItem = styled.div`
  h5 {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 0.95rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textPrimary};
  }
`;

const SectionTitle = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const HighlightsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;

  li {
    display: flex;
    align-items: flex-start;
    
    i {
      color: ${({ theme }) => theme.accentIndigo};
      margin-right: 0.5rem;
      margin-top: 0.25rem;
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  background: ${({ theme }) => theme.accentEmeraldGlow};
  border: 1px solid ${({ theme }) => theme.accentEmerald};
  color: ${({ theme }) => theme.accentEmerald};
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.2s ease, filter 0.2s ease;
  border: none;
  
  background: ${({ $primary, theme }) => ($primary ? theme.gradientBtn : 'transparent')};
  color: ${({ $primary, theme }) => ($primary ? '#ffffff' : theme.textPrimary)};
  border: ${({ $primary, theme }) => ($primary ? 'none' : `2px solid ${theme.borderGlassHover}`)};
  box-shadow: ${({ $primary }) => ($primary ? '0 4px 15px rgba(99, 102, 241, 0.4)' : 'none')};

  &:hover {
    transform: translateY(-2px);
    background: ${({ $primary, theme }) => ($primary ? '' : theme.bgGlassHover)};
    border-color: ${({ $primary, theme }) => ($primary ? '' : theme.textPrimary)};
    filter: ${({ $primary }) => ($primary ? 'brightness(1.1)' : 'none')};
  }
`;

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay $isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalContent $isOpen={isOpen}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        
        <Header>
          <MediaBox dangerouslySetInnerHTML={{ __html: project.svg }} />
          <HeaderText>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
          </HeaderText>
        </Header>

        <Body>
          <MetaGrid>
            <MetaItem>
              <h5>Role</h5>
              <p>{project.role}</p>
            </MetaItem>
            <MetaItem>
              <h5>Timeline</h5>
              <p>{project.timeline}</p>
            </MetaItem>
            <MetaItem>
              <h5>Category</h5>
              <p>{project.category}</p>
            </MetaItem>
            <MetaItem>
              <h5>Status</h5>
              <p>{project.publication || 'Active Project'}</p>
            </MetaItem>
          </MetaGrid>

          <div>
            <SectionTitle>Overview</SectionTitle>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{project.desc}</p>
          </div>

          <div>
            <SectionTitle>Key Achievements</SectionTitle>
            <HighlightsList>
              {project.highlights.map((h, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle"></i>
                  <span>{h}</span>
                </li>
              ))}
            </HighlightsList>
          </div>

          <div>
            <SectionTitle>Technologies</SectionTitle>
            <TagsContainer>
              {project.tech.map((t, i) => (
                <Badge key={i}>{t}</Badge>
              ))}
            </TagsContainer>
          </div>

          <LinksContainer>
            <Button
              href="#"
              $primary
              onClick={(e) => {
                e.preventDefault();
                alert('Demo running locally or on external servers. Real repository available in GitHub profile.');
              }}
            >
              <i className="fas fa-external-link-alt"></i> Live Demo
            </Button>
            <Button href="https://github.com/Meghana0204" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Source Code
            </Button>
          </LinksContainer>
        </Body>
      </ModalContent>
    </ModalOverlay>
  );
}
