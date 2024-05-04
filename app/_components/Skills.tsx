'use client';
import React from "react";
import Container from "./Container";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";
import BubbleChart from "./BubbleChart";

const Skills = (data:any) => {
  const margin = { top: 10, right: 20, bottom: 30, left: 50 };
  const width = 800 - margin.left - margin.right;
  const height = 750 - margin.top - margin.bottom;
  const xLabelHeight = 100;

  const lastUsed = data.skills?.map((skill:any) => skill?.LastUsed);
  const xMin = Math.min(...lastUsed);
  const xMax = Math.max(...lastUsed);

  return (
    <Container className="flex flex-wrap md:pt-28 pb-18">
      <svg
        viewBox={`0 0 ${width+xLabelHeight} ${height+xLabelHeight}`}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
            <XAxis domain={[2013, 2025]} range={[10, width]} axisLabel="Last used" />
            <YAxis domain={[13, 0]} range={[0, width - 6]} axisLabel="Experience"  />
            <BubbleChart data={data.skills} />
        </g>
      </svg>
    </Container>
  );
};

export default Skills;
