"use client";
import React from "react";
import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5wc from "@amcharts/amcharts5/wc";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Material from "@amcharts/amcharts5/themes/Material";
import Container from "./Container";
import styles from "./TagCloud.module.css";

type Props = {
  data: any;
};

const TagCloud = ({ data }: Props) => {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");
    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_Material.new(root),
    ]);
    let series = root.container.children.push(
      am5wc.WordCloud.new(root, {
        calculateAggregates: true,
        categoryField: "skill",
        valueField: "value",
      })
    );

    series.data.setAll(data);

    series.set("heatRules", [
      {
        target: series.labels.template,
        dataField: "value",
        min: am5.color("#CC00CC"),
        max: am5.color("#0000CC"),
        key: "fill",
      },
    ]);
    series.labels.template.set(
      "tooltipText",
      "{category} - Years of experiance: [bold]{value}[/]"
    );
    series.labels.template.setAll({
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5,
      fontFamily: "Courier New",
      cursorOverStyle: "pointer",
      setStateOnChildren: true,
      interactive: true,
    });
    series.labels.template.states.create("hover", {
      fill: am5.color(0xffffff),
    });
    return () => {
      root.dispose();
    };
  }, [data]);
  return (
    <Container className="flex flex-wrap md:pt-28 pb-18">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
          Skills
        </h2>
        <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Below visualisations are to showcase my skillsets. 
          These are developed using NextJS, TypeScript, AmCharts and D3.
        </p>
      </div>
      </div>
      <div id="chartdiv" className={styles.chartdiv}></div>
    </Container>
  );
};

export default TagCloud;
