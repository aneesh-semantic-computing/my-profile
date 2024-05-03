import React from "react";
import Navbar from "../_components/Navbar";
import Hero from "../_components/Hero";
import Skills from "../_components/Skills";
import { fetchSkills, getHomePageContent } from "../helpers/fetchData";
import SkillMatrix from "../_components/SkillMatrix";

type Params = {
    params: {
        locale: string;
    }
}

const HomePage = async ({ params: { locale } }: Params) => {
  const content = await getHomePageContent(locale);
  const skills = await fetchSkills();
  return (
    <>
      <Navbar
        title={content.NavSection.title}
        cta_text={content.NavSection.cta_text}
      />
      <Hero
        title={content.HeroSection.title}
        description={content.HeroSection.description}
        cta_text={content.HeroSection.cta_text}
        picture={content.HeroSection.picture}
      />
      <SkillMatrix skills={skills}/>
      <Skills skills={skills} />
    </>
  );
};

export default HomePage;
