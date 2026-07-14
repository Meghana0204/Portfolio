import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectModal from '../components/ProjectModal';

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

const ProjectFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterBtn = styled.button`
  background: ${({ $active, theme }) => ($active ? theme.gradientAccent : theme.bgGlass)};
  border: 1px solid ${({ $active, theme }) => ($active ? 'transparent' : theme.borderGlass)};
  color: ${({ $active, theme }) => ($active ? '#ffffff' : theme.textSecondary)};
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-family: 'Space Grotesk', sans-serif;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: ${({ $active, theme }) => ($active ? theme.shadowSm : 'none')};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $active, theme }) => ($active ? '' : theme.bgGlassHover)};
    color: ${({ theme }) => theme.textPrimary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.bgGlass};
  border: 1px solid ${({ theme }) => theme.borderGlass};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadowMd};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.borderGlassHover};
    box-shadow: ${({ theme }) => theme.shadowLg};
  }
`;

const ProjectMedia = styled.div`
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, ${({ theme }) => theme.bgSecondary} 0%, ${({ theme }) => theme.accentIndigoGlow} 100%);
  border-radius: 8px;
  margin-bottom: 1.25rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.borderGlass};

  svg {
    width: 50px;
    height: 50px;
    fill: ${({ theme }) => theme.textMuted};
    transition: fill 0.2s ease, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  ${ProjectCard}:hover & svg {
    fill: ${({ theme }) => theme.accentIndigo};
    transform: scale(1.15) rotate(5deg);
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

const ProjectDesc = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
  line-height: 1.5;
  flex-grow: 1;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  gap: 0.25rem;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${({ theme }) => theme.bgSecondary};
  border: 1px solid ${({ theme }) => theme.borderGlass};
  color: ${({ theme }) => theme.textPrimary};
`;

const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.borderGlass};
`;

const ProjectLink = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.accentIndigo};
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: "hirease",
      title: "HirEase",
      subtitle: "Unified AI recruitment engine with automated parsing & playgrounds",
      category: "fullstack",
      timeline: "May 2025 - Present",
      publication: "IEEE Published",
      role: "Lead Full-Stack Developer",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Convex", "Clerk", "WebSockets", "CodeMirror"],
      desc: "An AI-powered recruitment platform designed to streamline hiring cycles. It integrates real-time multi-user live coding workspaces using WebSockets, automated resume parsing pipelines, GitHub analytical trackers, and Zoom API loops for seamless scheduling.",
      highlights: [
        "Engineered real-time collaborative coding rooms with WebSockets, CodeMirror, and AI-based code evaluation.",
        "Integrated Convex and Clerk for modern data subscription schemas and secure customer authentication.",
        "Streamlined interview setups utilizing Google Calendar and Zoom API hooks.",
        "Published research findings in IEEE detailing evaluation optimizations."
      ],
      svg: `<svg viewBox="0 0 100 100"><path d="M20,30 L80,30 L80,70 L20,70 Z M30,30 L30,20 Q50,10 70,20 L70,30" stroke="currentColor" stroke-width="4" fill="none"/></svg>`
    },
    {
      id: "sherpa",
      title: "Sherpa",
      subtitle: "Safety-first navigation routing tool backed by spatial calculations",
      category: "ai-data",
      timeline: "Oct 2024 - Apr 2025",
      publication: "IEEE Published",
      role: "Geospatial Lead Developer",
      tech: ["TypeScript", "Google Maps API", "Firebase", "Chart.js", "Material-UI"],
      desc: "Sherpa is an interactive route planner that calculates safe travel paths by analyzing localized crime density indices. It renders incident heatmaps and offers community-sourced incident logging in real-time.",
      highlights: [
        "Formulated safety index routing edges using Google Maps API overlays.",
        "Implemented interactive crime density heatmaps with Firebase Realtime Database.",
        "Built administrative analytics dashboards using Chart.js to examine safety trends.",
        "Published co-authored paper on safety navigation algorithms in IEEE."
      ],
      svg: `<svg viewBox="0 0 100 100"><path d="M50,15 L80,80 L20,80 Z M50,15 L50,80" stroke="currentColor" stroke-width="4" fill="none"/></svg>`
    },
    {
      id: "chatbot",
      title: "AI Asset Transfer Chatbot",
      subtitle: "Secure conversational cryptocurrency wallet executor",
      category: "ai-data",
      timeline: "Jun 2024 - Oct 2024",
      role: "Web3 Integration Engineer",
      tech: ["Python", "Flask", "MongoDB", "OpenAI GPT", "Web3.py", "Ethereum Blockchain"],
      desc: "Developed a conversational Telegram bot integrating LLM intent extraction to sign blockchain transactions. Users can check wallet balances, fetch prices, submit token transfers, and stake tokens using natural chat commands.",
      highlights: [
        "Integrated OpenAI GPT models to translate loose conversational commands to exact transaction payloads.",
        "Wrote Web3.py execution helper wrappers to sign and broadcast transaction arrays securely on Ethereum.",
        "Formulated validation loops to prevent accidental wallet drainages and gas estimation spikes."
      ],
      svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="35" stroke="currentColor" stroke-width="4" fill="none"/><path d="M35,45 Q50,60 65,45" stroke="currentColor" stroke-width="4" fill="none"/></svg>`
    },
    {
      id: "zbot",
      title: "Zbot",
      subtitle: "GenZ conversational interface optimized for modern communication patterns",
      category: "ai-data",
      timeline: "Dec 2024 - Jan 2025",
      role: "AI Interface Architect",
      tech: ["React", "Next.js", "MongoDB", "OpenAI GPT API", "NLP Engine"],
      desc: "Zbot is a conversational interface optimized to match Generation Z dialogue trends. It utilizes OpenAI GPT models to offer contextual, prompt-less dialogue support, tracking conversation contexts automatically.",
      highlights: [
        "Designed UI framework optimized for rapid conversation loops using Next.js.",
        "Configured OpenAI GPT integrations managing context memory without requiring explicit prompt cues.",
        "Implemented schema models in MongoDB to parse and save user messaging histories."
      ],
      svg: `<svg viewBox="0 0 100 100"><rect x="30" y="35" width="40" height="35" rx="10" stroke="currentColor" stroke-width="4" fill="none"/><circle cx="42" cy="48" r="3" fill="currentColor"/><circle cx="58" cy="48" r="3" fill="currentColor"/><path d="M 45 58 Q 50 62 55 58" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/><line x1="50" y1="35" x2="50" y2="25" stroke="currentColor" stroke-width="4"/><circle cx="50" cy="23" r="4" fill="currentColor"/></svg>`
    },
    {
      id: "entrack",
      title: "enTrack",
      subtitle: "Carbon footprint dashboard mapping real-time emission analytics",
      category: "fullstack",
      timeline: "Nov 2024 - Dec 2024",
      role: "Lead Full-Stack Developer",
      tech: ["HTML/CSS", "JavaScript", "PHP", "MongoDB"],
      desc: "Created a tracker application enabling users to log activities and visualize their carbon footprints. Features data loading panels and secure session management.",
      highlights: [
        "Built responsive charts graphing emission breakdowns.",
        "Programmed RESTful API endpoints in PHP to handle transaction records.",
        "Implemented secure cookie-based session keys and hashing models."
      ],
      svg: `<svg viewBox="0 0 100 100"><path d="M 50 15 C 75 35, 75 65, 50 85 C 25 65, 25 35, 50 15 Z" stroke="currentColor" stroke-width="4" fill="none"/><path d="M 50 15 L 50 85" stroke="currentColor" stroke-width="3"/><path d="M 50 40 Q 65 35 65 35" stroke="currentColor" stroke-width="3"/><path d="M 50 55 Q 35 50 35 50" stroke="currentColor" stroke-width="3"/></svg>`
    },
    {
      id: "datapipe",
      title: "Candidate Data Transformer",
      subtitle: "Structured & unstructured candidate data extraction and merging pipeline",
      category: "ai-data",
      timeline: "Aug 2024 - Oct 2024",
      role: "Python Data Engineer",
      tech: ["Python", "Pandas", "PyMuPDF (fitz)", "phonenumbers", "JSON Validation"],
      desc: "A candidate data transformation pipeline designed to parse structured CSV datasets and unstructured PDF resume files. It consolidates entries into a canonical candidate profile, normalizes fields (like E.164 phone formats), calculates data confidence scores, logs provenance, and outputs validated, runtime-configurable JSON representations.",
      highlights: [
        "Designed parallel parser streams for structured CSV tables and raw text extracted from PDF resumes.",
        "Implemented a smart Merge Engine tracking fields provenance and confidence metrics.",
        "Programmed phone normalizers using E.164 rules and built schema-driven email validators.",
        "Designed a JSON runtime config wrapper to dynamically include/exclude keys or rename outputs without changing code."
      ],
      svg: `<svg viewBox="0 0 100 100"><path d="M20,25 L45,25 L45,45 L20,45 Z M55,25 L80,25 L80,45 L55,45 Z M37,55 L63,55 L63,75 L37,75 Z" stroke="currentColor" stroke-width="4" fill="none"/><path d="M32,45 L32,55 M67,45 L67,55" stroke="currentColor" stroke-width="3"/></svg>`
    }
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Section>
      <div className="container">
        <SectionTitle>My <span>Projects</span></SectionTitle>
        
        <ProjectFilters>
          <FilterBtn $active={filter === 'all'} onClick={() => setFilter('all')}>All Projects</FilterBtn>
          <FilterBtn $active={filter === 'fullstack'} onClick={() => setFilter('fullstack')}>Full-Stack</FilterBtn>
          <FilterBtn $active={filter === 'ai-data'} onClick={() => setFilter('ai-data')}>AI & Data</FilterBtn>
        </ProjectFilters>

        <ProjectsGrid>
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} onClick={() => handleCardClick(p)}>
              <ProjectMedia dangerouslySetInnerHTML={{ __html: p.svg }} />
              <ProjectInfo>
                <ProjectTitle>{p.title}</ProjectTitle>
                <ProjectDesc>{p.subtitle}</ProjectDesc>
                <ProjectTags>
                  {p.tech.slice(0, 3).map((t, idx) => (
                    <Badge key={idx}>{t}</Badge>
                  ))}
                </ProjectTags>
              </ProjectInfo>
              <ProjectFooter>
                <ProjectLink>Learn More <i className="fas fa-chevron-right"></i></ProjectLink>
                <Badge>{p.publication || 'Active'}</Badge>
              </ProjectFooter>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </Section>
  );
}
