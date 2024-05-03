import * as d3 from "d3";
import * as fs from "fs";
import { Skill } from "../interfaces/Skills";

export const getHomePageContent = async (lang: string) => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api.storyblok.com/v2/cdn/stories/home-page?version=${version}&token=${token}&language=${lang}`;

  const response = await fetch(url, { next: { revalidate: 100 } });
  const data = await response.json();

  const { NavSection, HeroSection } = data.story.content;

  return {
    NavSection: NavSection[0],
    HeroSection: HeroSection[0],
  };
};

export const fetchSkills = async () => {
  const csv = fs.readFileSync('./public/data/Skills.csv', 'utf8');
  const data = await d3.csvParse(csv);
  return data;
}
