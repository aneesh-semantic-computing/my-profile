// 'use client';
import * as d3 from "d3";
import { useMemo } from "react";

export const XAxis = ({ domain = [0, 100], range = [10, 290], axisLabel= '' }) => {
    const xLabelHeight = 50;
  const ticks = useMemo(() => {
    const xScale = d3.scaleLinear().domain(domain).range(range);

    const width = range[1] - range[0];
    const pixelsPerTick = 60;
    const numberOfTicksTarget = Math.max(1, Math.floor(width / pixelsPerTick));

    return xScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      xOffset: xScale(value),
    }));
  }, [domain, range]);

  return (
    <>
      <path
        d={["M", range[0], range[1], "v", -6, "H", range[1], "v", 6].join(" ")}
        fill="none"
        stroke="#fff"
      />
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset}, ${range[1]-5})`}>
          <line y2="6" stroke="#fff" />
          <text
            key={value}
            fill="#fff"
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}
      <text fill="#fff" transform={`translate(${range[1]/2}, ${range[1]+xLabelHeight})`}>{axisLabel}</text>
    </>
  );
};