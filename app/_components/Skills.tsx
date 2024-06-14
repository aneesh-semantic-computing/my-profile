// components/Skills.tsx
import React from "react";
import Container from "./Container";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";
import BubbleChart from "./BubbleChart";
import dynamic from "next/dynamic";
import { SkillData } from "../types/Skills";

// Dynamically import the client-side tooltip component
const BubbleChartTooltip = dynamic(() => import('./BubbleChartTooltip'), { ssr: false });

interface SkillsProps {
  skills: SkillData[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const margin = { top: 20, right: 20, bottom: 50, left: 50 };
  const width = 700 - margin.left - margin.right;
  const height = 700 - margin.top - margin.bottom;

  if (!skills || skills.length === 0) {
    return <div>No data available</div>;
  }

  const parsedData = skills.map((skill) => ({
    ...skill,
    Experience: skill.Experience,
    Competency: skill.Competency,
    LastUsed: skill.LastUsed,
  }));

  return (
    <Container className="flex flex-wrap items-center justify-center">
      <svg
        viewBox={`0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: 'auto' }}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <XAxis domain={[2013, 2025]} range={[0, width]} axisLabel="Last used" />
          <YAxis domain={[0, 13]} range={[height, 0]} axisLabel="Experience" />
          <BubbleChart data={parsedData} width={width} height={height} />
        </g>
      </svg>
      <BubbleChartTooltip />
    </Container>
  );
};

export default Skills;
