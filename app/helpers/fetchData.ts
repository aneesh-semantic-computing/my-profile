import * as d3 from "d3";
import * as fs from "fs";
import { SkillData } from "../types/Skills";
import { Profile } from "../types/Hero";
import { NavigationItem } from "../types/Navigation";
import { Testimonial } from "../types/Testimonial";

export const getHomePageContent = async (lang: string) => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api.storyblok.com/v2/cdn/stories/home-page?version=${version}&token=${token}&language=${lang}`;

  const response = await fetch(url);
  const data = await response.json();

  const { NavSection, HeroSection, TestimonialSection } = data.story.content;

  return {
    NavSection: NavSection[0] as NavigationItem,
    HeroSection: HeroSection[0] as Profile,
    TestimonialSection: TestimonialSection as Testimonial[]
  };
};

export const fetchSkills = async () => {
  const csv = fs.readFileSync(process.cwd() + '/app/data/Skills.csv', 'utf8');
  const data = await d3.csvParse(csv);
  return parseSkills(data);
}

const parseSkills = (skills: d3.DSVRowString<string>[]): SkillData[] => {
  return skills?.map((item) => ({
    Skill: item.Skill,
    Category: item.Category,
    Experience: parseFloat(item.Experience),
    Competency: parseFloat(item.Competency),
    LastUsed: parseFloat(item.LastUsed),
  })).filter((item) => item.Skill && item.Category && item.Experience && item.Competency && item.LastUsed);
};
