import * as d3 from "d3";
import * as fs from "fs";
import { Skill } from "../interfaces/Skills";
import { Profile } from "../interfaces/Hero";
import { NavigationItem } from "../interfaces/Navigation";
import AllTestimonials from "../interfaces/Testimonial";

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
    TestimonialSection: TestimonialSection as AllTestimonials
  };
};

export const fetchSkills = async () => {
  const csv = fs.readFileSync(process.cwd() + '/app/data/Skills.csv', 'utf8');
  const data = await d3.csvParse(csv);
  return data;
}
