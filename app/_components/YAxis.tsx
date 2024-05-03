import * as d3 from "d3";
import { transform } from "next/dist/build/swc";
import { useMemo } from "react";

export const YAxis = ({ domain = [0, 100], range = [10, 290], axisLabel= '' }) => {
  const ticks = useMemo(() => {
    const yScale = d3.scaleLinear().domain(domain).range(range);

    const height = range[1] - range[0];
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
        d={["M", 10, range[0], "v", 0, "V", range[1], "v", 0].join(" ")}
        fill="none"
        stroke="#fff"
      />
      {ticks.map(({ value, yOffset }) => (
        <g key={value} transform={`translate(0, ${yOffset})`}>
          <line x2="10" stroke="#fff" />
          <text
            key={value}
            fill="#fff"
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateX(-10px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}
      <text fill="#fff" transform="translate(-25, 380) rotate(270)">{axisLabel}</text>
    </>
  );
};

