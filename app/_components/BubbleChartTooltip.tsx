// components/BubbleChartTooltip.tsx
'use client';
import React, { useEffect, useRef } from "react";

const BubbleChartTooltip: React.FC = () => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "circle") {
        const tooltip = tooltipRef.current;
        if (tooltip) {
          tooltip.style.display = "block";
          tooltip.style.left = `${event.pageX + 10}px`;
          tooltip.style.top = `${event.pageY - 30}px`;

          const skill = target.getAttribute("data-skill");
          const competency = target.getAttribute("data-competency");
          const experience = target.getAttribute("data-experience");
          const lastUsed = target.getAttribute("data-lastused");

          tooltip.innerHTML = `
            <div><strong>Skill:</strong> ${skill}</div>
            <div><strong>Competency:</strong> ${competency} out of 10</div>
            <div><strong>Experience:</strong> ${experience} years</div>
            <div><strong>Last Used:</strong> ${lastUsed}</div>
          `;
        }
      }
    };

    const handleMouseOut = () => {
      const tooltip = tooltipRef.current;
      if (tooltip) {
        tooltip.style.display = "none";
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={tooltipRef}
      style={{
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "#fff",
        padding: "5px",
        borderRadius: "3px",
        pointerEvents: "none",
        display: "none",
      }}
    ></div>
  );
};

export default BubbleChartTooltip;
