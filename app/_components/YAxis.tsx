// components/YAxis.tsx
import * as d3 from "d3";
import { useMemo } from "react";

interface YAxisProps {
  domain: [number, number];
  range: [number, number];
  axisLabel?: string;
}

export const YAxis: React.FC<YAxisProps> = ({ domain, range, axisLabel = '' }) => {
  const ticks = useMemo(() => {
    const yScale = d3.scaleLinear().domain(domain).range(range);

    const height = range[0] - range[1];
    const pixelsPerTick = 60;
    const numberOfTicksTarget = Math.max(1, Math.floor(height / pixelsPerTick));

    return yScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      yOffset: yScale(value),
    }));
  }, [domain, range]);

  return (
    <>
      <path
        d={`M 0 ${range[0]} V ${range[1]}`}
        fill="none"
        stroke="#fff"
      />
      {ticks.map(({ value, yOffset }) => (
        <g key={value} transform={`translate(0, ${yOffset})`}>
          <line x2="-6" stroke="#fff" />
          <text
            fill="#fff"
            style={{
              fontSize: "10px",
              textAnchor: "end",
              transform: "translateX(-10px) translateY(3px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}
      <text fill="#fff" transform={`translate(-30, ${(range[0] - range[1]) / 2}) rotate(-90)`}>
        {axisLabel}
      </text>
    </>
  );
};
