import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const floatContainer = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-6px); }
`;

const cursorBlink = keyframes`
  50% { border-color: transparent; }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0 4rem;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 8rem 0 4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Subtitle = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  color: ${({ theme }) => theme.accentIndigo};
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  color: ${({ theme }) => theme.textPrimary};

  span.name {
    background: ${({ theme }) => theme.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const TypedContainer = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textSecondary};
  min-height: 2.8rem;

  span.cursor {
    border-right: 3px solid ${({ theme }) => theme.accentIndigo};
    padding-right: 5px;
    animation: ${cursorBlink} 0.8s infinite;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.1rem;
  max-width: 600px;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  background: ${({ $indigo, $emerald, theme }) => 
    $indigo ? theme.accentIndigoGlow : $emerald ? theme.accentEmeraldGlow : theme.bgSecondary};
  border: 1px solid ${({ $indigo, $emerald, theme }) => 
    $indigo ? theme.accentIndigo : $emerald ? theme.accentEmerald : theme.borderGlass};
  color: ${({ $indigo, $emerald, theme }) => 
    $indigo ? theme.accentIndigo : $emerald ? theme.accentEmerald : theme.textPrimary};
  margin: 0.25rem;
`;

const CTAs = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled(Link)`
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
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
  border: none;
  
  background: ${({ $primary, theme }) => ($primary ? theme.gradientBtn : 'transparent')};
  color: ${({ $primary, theme }) => ($primary ? theme.textPrimary : 'inherit')};
  border: ${({ $primary, theme }) => ($primary ? 'none' : `2px solid ${theme.borderGlassHover}`)};
  box-shadow: ${({ $primary }) => ($primary ? '0 4px 12px rgba(59, 130, 246, 0.25)' : 'none')};

  &:hover {
    transform: translateY(-2px);
    background: ${({ $primary, theme }) => ($primary ? '' : theme.bgGlassHover)};
    border-color: ${({ $primary, theme }) => ($primary ? '' : theme.textPrimary)};
    filter: ${({ $primary }) => ($primary ? 'brightness(1.05)' : 'none')};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Visual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvatarContainer = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.bgGlass} 0%, ${({ theme }) => theme.bgSecondary} 100%);
  border: 1px solid ${({ theme }) => theme.borderGlassHover};
  box-shadow: ${({ theme }) => theme.shadowLg};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${floatContainer} 5s ease-in-out infinite alternate;
`;

const Avatar = styled.div`
  width: 270px;
  height: 270px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bgSecondary};
  border: 1px solid ${({ theme }) => theme.borderGlass};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StatsBar = styled.div`
  background: ${({ theme }) => theme.bgSecondary};
  border-top: 1px solid ${({ theme }) => theme.borderGlass};
  border-bottom: 1px solid ${({ theme }) => theme.borderGlass};
  padding: 2.5rem 0;
  position: relative;
  z-index: 10;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StatNum = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  background: ${({ theme }) => theme.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.div`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 500;
`;

export default function Home() {
  const roles = ["Software Developer", "Data Science Student", "Full-Stack Developer", "GenAI Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      speed = 500;
    }

    const timeout = setTimeout(() => {
      setTypedText(
        isDeleting
          ? currentRole.substring(0, charIndex - 1)
          : currentRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <>
      <HeroSection>
        <Grid className="container">
          <Content>
            <Subtitle>Welcome to my space</Subtitle>
            <Title>Hi, I'm <span className="name">Meghana</span></Title>
            <TypedContainer>
              I'm a <span className="text">{typedText}</span>
              <span className="cursor"></span>
            </TypedContainer>
            <Desc>
              A Software Developer (2026 Batch) specializing in full-stack engineering, React frontend systems, and data analytics. Powered by curiosity and a commitment to writing clean, maintainable code.
            </Desc>
            <BadgeContainer>
              <Badge $indigo><i className="fas fa-award"></i> Top 50 Performer GenAI Exchange</Badge>
              <Badge $emerald><i className="fas fa-graduation-cap"></i> BE CSE (Data Science) Student</Badge>
              <Badge><i className="fas fa-clock"></i> Open to Remote Jobs Only</Badge>
            </BadgeContainer>
            <CTAs>
              <Button to="/projects" $primary="true">
                View Projects <i className="fas fa-arrow-right"></i>
              </Button>
              <Button to="/contact">
                Get in Touch <i className="fas fa-paper-plane"></i>
              </Button>
            </CTAs>
          </Content>
          
          <Visual>
            <AvatarContainer>
              <Avatar>
                {/* 3D Generated Developer Girl Portrait */}
                <img src={`${import.meta.env.BASE_URL}avatar.jpg`} alt="Meghana Pradeep - 3D Developer Girl Avatar" />
              </Avatar>
            </AvatarContainer>
          </Visual>
        </Grid>
      </HeroSection>

      <StatsBar>
        <StatsGrid className="container">
          <StatItem>
            <StatNum>5</StatNum>
            <StatLabel>Internships Completed</StatLabel>
          </StatItem>
          <StatItem>
            <StatNum>8.3</StatNum>
            <StatLabel>BE CSE Cumulative GPA</StatLabel>
          </StatItem>
          <StatItem>
            <StatNum>6</StatNum>
            <StatLabel>Core Tech Projects</StatLabel>
          </StatItem>
          <StatItem>
            <StatNum>2</StatNum>
            <StatLabel>IEEE Publications</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsBar>
    </>
  );
}
