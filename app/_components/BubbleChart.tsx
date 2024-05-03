'use client';
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BubbleChart = ({ data }:any) => {
  const myColor = d3
    .scaleOrdinal()
    .domain([
      "Environment",
      "Language",
      "Framework",
      "Library",
      "API Standard",
      "Database",
      "Tool",
      "Platform",
    ])
    .range(d3.schemePaired);
  const xScale = d3.scaleLinear().domain([2013, 2025]).range([10, 750]);
  const yScale = d3
    .scaleLinear()
    .domain([13, 0])
    .range([0, 725]);
  const z = d3.scaleLinear().domain([0, 13]).range([10, 30]);
  const tooltipRef = useRef()

  useEffect(() => {

  }, [])

  return (
    <>
      {data.map((record:any) => (
        <>
          {/* <div ref={tooltipRef} style={{visibility: 'hidden', position: 'absolute'}}>{record.Skill}</div> */}
          <circle
            key={record.Skill}
            cx={xScale(record.LastUsed)}
            cy={yScale(record.Experience)}
            r={z(record.Competency ** 3 / 100)}
            fill={String(myColor(record.Category))}
            fill-opacity='0.75'
          >
            <title>{`${record.Skill} (Competency: ${record.Competency} out of 10)`}</title>
          </circle>
        </>
      ))}
      {/* <circle cx="100" cy="100" r="50" fill={String(myColor("Environment"))}></circle>
        <circle cx="300" cy="100" r="20" fill={String(myColor("Language"))}></circle>
        <circle cx="50" cy="600" r="30" fill={String(myColor("Framework"))}></circle>
        <circle cx="400" cy="500" r="60" fill={String(myColor("Library"))}></circle> */}
    </>
  );
};

export default BubbleChart;
