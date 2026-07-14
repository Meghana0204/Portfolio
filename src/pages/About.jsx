import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 8rem 0 6rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  span {
    background: ${({ theme }) => theme.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.gradientAccent};
    margin: 0.75rem auto 0;
    border-radius: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    font-size: 1.05rem;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const EduCard = styled.div`
  border-left: 3px solid ${({ theme }) => theme.accentIndigo};
  padding-left: 1.5rem;
  margin-top: 1rem;

  h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const EduMeta = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.accentViolet};
  margin: 0.25rem 0 0.5rem;
  font-weight: 500;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.bgGlass};
  border: 1px solid ${({ theme }) => theme.borderGlass};
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: ${({ theme }) => theme.shadowMd};
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.borderGlassHover};
    box-shadow: ${({ theme }) => theme.shadowLg};
  }

  h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.15rem;
    font-weight: 600;
    color: ${({ theme }) => theme.textPrimary};
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${({ $emerald, theme }) => ($emerald ? theme.accentEmeraldGlow : theme.accentIndigoGlow)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({ $emerald, theme }) => ($emerald ? theme.accentEmerald : theme.accentIndigo)};
`;

export default function About() {
  return (
    <Section>
      <div className="container">
        <SectionTitle>About <span>Me</span></SectionTitle>
        <Grid>
          <Details>
            <p>
              I am an energetic and detail-oriented Software Developer (2026 Batch) pursuing my BE in Computer Science and Engineering (Data Science) with a GPA of 8.3. Over the past couple of years, I have actively shaped my programming abilities through a diverse series of internships and complex personal projects.
            </p>
            <p>
              My focus areas bridge frontend brilliance (via modern React applications) and robust backend logic (utilizing Python/Flask and Node.js). I have also refined my QA capabilities in automation, manual, and API testing to ensure end-to-end stability in whatever I build.
            </p>
            <EduCard>
              <h3>BE in Computer Science & Engineering (Data Science)</h3>
              <EduMeta>Bangalore Institute of Technology | Dec 2023 - Sept 2026</EduMeta>
              <p><strong>GPA:</strong> 8.3 / 10.0</p>
            </EduCard>
          </Details>
          
          <CardsGrid>
            <FeatureCard>
              <IconBox><i className="fab fa-react"></i></IconBox>
              <h4>Frontend Expert</h4>
              <p>Crafting sleek, high-fidelity responsive user interfaces with React and Javascript.</p>
            </FeatureCard>
            <FeatureCard>
              <IconBox $emerald="true"><i className="fas fa-server"></i></IconBox>
              <h4>Backend Engineering</h4>
              <p>Building scalable REST APIs using Python, Flask, Node.js and managing databases.</p>
            </FeatureCard>
            <FeatureCard>
              <IconBox><i className="fas fa-vial"></i></IconBox>
              <h4>QA & API Testing</h4>
              <p>Ensuring system stability via rigorous manual, automation, and unit testing protocols.</p>
            </FeatureCard>
            <FeatureCard>
              <IconBox $emerald="true"><i className="fas fa-brain"></i></IconBox>
              <h4>GenAI Developer</h4>
              <p>Leveraging Large Language Models and building AI agents & chatbots.</p>
            </FeatureCard>
          </CardsGrid>
        </Grid>
      </div>
    </Section>
  );
}
