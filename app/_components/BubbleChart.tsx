"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./BubbleChart.module.css";

const BubbleChart = ({ data }: any) => {
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
  const yScale = d3.scaleLinear().domain([13, 0]).range([0, 725]);
  const z = d3.scaleLinear().domain([0, 13]).range([10, 30]);
  const tooltipRef = useRef();

  useEffect(() => {}, []);

  return (
    <>
      {data.map((record: any) => (
        <circle
          key={record.Skill}
          cx={xScale(record.LastUsed)}
          cy={yScale(record.Experience)}
          r={z(record.Competency ** 3 / 100)}
          fill={String(myColor(record.Category))}
          fillOpacity="0.75"
          className={`${styles.bubble} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300`}
        >
          <title
            key={record.Skill}
          >{`${record.Skill} (Competency: ${record.Competency} out of 10)`}</title>
        </circle>
      ))}
    </>
  );
};

export default BubbleChart;
