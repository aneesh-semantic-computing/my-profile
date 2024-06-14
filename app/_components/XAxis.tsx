// components/XAxis.tsx
import * as d3 from "d3";
import { useMemo } from "react";

interface XAxisProps {
  domain: [number, number];
  range: [number, number];
  axisLabel?: string;
}

export const XAxis: React.FC<XAxisProps> = ({ domain, range, axisLabel = '' }) => {
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
        d={`M ${range[0]} ${range[1]} H ${range[1]}`}
        fill="none"
        stroke="#fff"
      />
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset}, ${range[1]})`}>
          <line y2="6" stroke="#fff" />
          <text
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
      <text fill="#fff" transform={`translate(${(range[1] - range[0]) / 2}, ${range[1] + 40})`}>
        {axisLabel}
      </text>
    </>
  );
};
