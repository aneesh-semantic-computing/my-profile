import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./BubbleChart.module.css";

const BubbleChart = ({ data }: any) => {
  const categories = [
    ...new Set<string>(data.map((item: any) => item.Category)),
  ];
  const myColor = d3.scaleOrdinal().domain(categories).range(d3.schemePaired);
  const xScale = d3.scaleLinear().domain([2013, 2025]).range([10, 750]);
  const yScale = d3.scaleLinear().domain([13, 0]).range([0, 725]);
  const z = d3.scaleLinear().domain([0, 13]).range([10, 30]);

  return (
    <>
      {data.map((record: any) => (
        <g className="container" key={record.Skill}>
          <circle
            cx={xScale(record.LastUsed)}
            cy={yScale(record.Experience)}
            r={z(record.Competency ** 3 / 100)}
            fill={String(myColor(record.Category))}
            fillOpacity="0.75"
            data-title={`${record.Skill} (Competency: ${record.Competency} out of 10)`}
            className={`${styles.bubble}`}
          >
            {/* <title>{`${record.Skill} (Competency: ${record.Competency} out of 10)`}</title> */}
          </circle>
          <text
            className="chartLabel"
            x={xScale(record.LastUsed)}
            y={yScale(record.Experience)}
            fill="#fff"
            fontSize={Math.floor(z(record.Competency ** 3 / 100) / 3)}
            fontWeight="500"
            dominantBaseline="middle"
            textAnchor="middle"
            data-title={`${record.Skill} (Competency: ${record.Competency} out of 10)`}
          >{record.Skill}</text>
        </g>
      ))}
    </>
  );
};

export default BubbleChart;
