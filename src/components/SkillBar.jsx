import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const ProgressBg = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.bgSecondary};
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.borderGlass};
`;

const ProgressBar = styled.div`
  height: 100%;
  border-radius: 10px;
  background: ${({ theme }) => theme.gradientAccent};
  width: ${({ $width }) => $width};
  transition: width 1.5s cubic-bezier(0.1, 0.8, 0.2, 1);
`;

export default function SkillBar({ name, percentage }) {
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <SkillItem>
      <SkillInfo>
        <span>{name}</span>
        <span>{percentage}</span>
      </SkillInfo>
      <ProgressBg>
        <ProgressBar $width={width} />
      </ProgressBg>
    </SkillItem>
  );
}
