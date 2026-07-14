import React from 'react';
import styled from 'styled-components';
import Timeline from '../components/Timeline';

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

export default function Experience() {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Sysfore Technologies",
      date: "May 2026 - Present",
      description: "Currently undergoing corporate training programs focusing on enterprise architectures, manual, automation, and API testing to assure system integrations and code qualities.",
      skills: ["Java Core", "SQL Core", "Manual Testing", "Automation Testing", "API Testing"],
      accentColor: "#3b82f6",
      badgeGlow: "rgba(59, 130, 246, 0.08)",
    },
    {
      role: "QA Intern",
      company: "Amagi",
      date: "Nov 2025 - Apr 2026",
      description: "Monitored enterprise data pipelines and ERP structures. Programmed custom validation protocols to test database integrations and quality gates before deployment loops.",
      skills: ["ERP Workflows", "Enterprise Databases", "Data Validation", "System Integration"],
      accentColor: "#60a5fa",
      badgeGlow: "rgba(96, 165, 250, 0.08)",
    },
    {
      role: "ERP Systems Engineer Intern",
      company: "KMF (BAMUL)",
      date: "Oct 2025 - Nov 2025",
      description: "Assisted the Oracle Database ERP data readiness phase across Finance and Procurement. Mapped batch-level supply chain workflows for FSSC 22000 compliance, analyzed logs for 327 logistics routes, and verified DBT systems managing payments of 649.56 Lakhs daily.",
      skills: ["Oracle Database", "ERP Logistics", "FSSC 22000 Standards", "Direct Benefit Transfer (DBT)"],
      accentColor: "#a78bfa",
      badgeGlow: "rgba(167, 139, 250, 0.08)",
    },
    {
      role: "Data with Machine Learning Intern",
      company: "IBM SkillsBuild (CSRBOX)",
      date: "Oct 2024 - Nov 2024",
      description: "Designed a fraud detection system using Scikit-Learn, PyOD, and XGBoost with Flask integrations. Engineered pipelines utilizing Pandas and NumPy to clean and model transaction logs for online systems.",
      skills: ["Python", "Flask", "Scikit-Learn", "PyOD", "XGBoost", "Pandas & NumPy"],
      accentColor: "#0f766e",
      badgeGlow: "rgba(15, 118, 110, 0.08)",
    },
    {
      role: "Data Analytics Intern",
      company: "IBM SkillsBuild (CSRBOX)",
      date: "June 2024 - Aug 2024",
      description: "Engineered Tableau visual panels for global migration patterns addressing SDG 10 (Reduced Inequalities), titled 'Navigating Global Migration: Data-Driven Insights and Solutions for Equitable Development'. Delivered statistical recommendations.",
      skills: ["Tableau Visuals", "SDG 10 Analytics", "Statistical Analysis", "Data Modeling"],
      accentColor: "#6366f1",
      badgeGlow: "rgba(99, 102, 241, 0.08)",
    },
  ];

  return (
    <Section>
      <div className="container">
        <SectionTitle>Work <span>Experience</span></SectionTitle>
        <Timeline items={experiences} />
      </div>
    </Section>
  );
}
