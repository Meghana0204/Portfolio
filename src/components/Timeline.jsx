import React from 'react';
import styled from 'styled-components';

const TimelineWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding-left: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 8px;
    height: 100%;
    width: 2px;
    background: linear-gradient(to bottom, ${({ theme }) => theme.accentIndigo} 0%, ${({ theme }) => theme.accentEmerald} 80%, transparent 100%);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -2.5rem;
  top: 5px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bgPrimary};
  border: 3px solid ${({ $color, theme }) => $color || theme.accentIndigo};
  box-shadow: 0 0 10px ${({ $color, theme }) => $color || theme.accentIndigo};
  z-index: 2;
  transition: transform 0.2s ease, background 0.2s ease;

  ${TimelineItem}:hover & {
    transform: scale(1.3);
    background: ${({ theme }) => theme.textPrimary};
  }
`;

const TimelineContent = styled.div`
  background: ${({ theme }) => theme.bgGlass};
  border: 1px solid ${({ theme }) => theme.borderGlass};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadowMd};
  transition: border-color 0.2s ease;

  ${TimelineItem}:hover & {
    border-color: ${({ theme }) => theme.borderGlassHover};
  }
`;

const TimelineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const Title = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
`;

const Company = styled.span`
  color: ${({ $color }) => $color};
  font-weight: 500;
`;

const DateText = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textMuted};
  font-weight: 500;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
`;

const TimelineSkills = styled.div`
  margin-top: 1rem;
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
  background: ${({ $glowColor }) => $glowColor || 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${({ $borderColor }) => $borderColor || 'rgba(255, 255, 255, 0.08)'};
  color: ${({ $textColor }) => $textColor || '#ffffff'};
  transition: all 0.2s ease;
`;

export default function Timeline({ items }) {
  return (
    <TimelineWrapper>
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineDot $color={item.accentColor} />
          <TimelineContent>
            <TimelineHeader>
              <div>
                <Title>{item.role}</Title>
                <Company $color={item.accentColor || 'var(--accent-indigo)'}>
                  {item.company}
                </Company>
              </div>
              <DateText>{item.date}</DateText>
            </TimelineHeader>
            <Description>{item.description}</Description>
            <TimelineSkills>
              {item.skills.map((skill, sIndex) => (
                <Badge
                  key={sIndex}
                  $glowColor={item.badgeGlow}
                  $borderColor={item.accentColor}
                  $textColor={item.accentColor}
                >
                  {skill}
                </Badge>
              ))}
            </TimelineSkills>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineWrapper>
  );
}
