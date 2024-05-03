import React from "react";
import * as d3 from "d3";
import {scaleLinear, scaleBand, max, format} from 'd3';
import { fetchSkills } from "../helpers/fetchData";
import Container from "./Container";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";
import BubbleChart from "./BubbleChart";

const Skills = async (data:any) => {
  const margin = { top: 10, right: 20, bottom: 30, left: 50 };
  const width = 800 - margin.left - margin.right;
  const height = 750 - margin.top - margin.bottom;
  const xLabelHeight = 50;

  const xVal = (d:any) => d.LastUsed;
  const yVal = (d:any) => d.Experience
//   console.log(data.skills);
  const lastUsed = data.skills?.map((skill:any) => skill?.LastUsed);
  const xMin = Math.min(...lastUsed);
  const xMax = Math.max(...lastUsed);
//   console.log(data.skills.map(yVal));

  return (
    <Container className="flex flex-wrap pt-28 pb-18">
      <svg
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom + xLabelHeight}
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
