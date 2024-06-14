// components/BubbleChart.tsx
import React from "react";
import * as d3 from "d3";
import styles from "./BubbleChart.module.css";
import { SkillData } from "../types/Skills";

interface BubbleChartProps {
  data: SkillData[];
  width: number;
  height: number;
}

const BubbleChart: React.FC<BubbleChartProps> = ({ data, width, height }) => {
  const categories = [...new Set(data.map((item) => item.Category))];
  const myColor = d3.scaleOrdinal<string>().domain(categories).range(d3.schemePaired);
  const xScale = d3.scaleLinear().domain([2013, 2025]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0, 13]).range([height, 0]);
  const zScale = d3.scaleLinear().domain([0, 10]).range([3, 30]);

  return (
    <g>
      {data.map((record) => (
        <g className="container" key={record.Skill}>
          <circle
            cx={xScale(record.LastUsed)}
            cy={yScale(record.Experience)}
            r={zScale(record.Competency)}
            fill={String(myColor(record.Category))}
            fillOpacity="0.75"
            data-skill={record.Skill}
            data-competency={record.Competency}
            data-experience={record.Experience}
            data-lastused={record.LastUsed}
            data-category={record.Category}
            className={styles.bubble}
          />
          <text
            className="chartLabel"
            x={xScale(record.LastUsed)}
            y={yScale(record.Experience)}
            fill="#fff"
            fontSize={Math.floor(zScale(record.Competency) / 2.5)}
            fontWeight="500"
            dominantBaseline="middle"
            textAnchor="middle"
            data-title={`${record.Skill} (Competency: ${record.Competency} out of 10)`}
          >
            {record.Skill}
          </text>
        </g>
      ))}
    </g>
  );
};

export default BubbleChart;
