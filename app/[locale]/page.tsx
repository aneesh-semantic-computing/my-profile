import React from "react";
import Navbar from "../_components/Navbar";
import Hero from "../_components/Hero";
import Skills from "../_components/Skills";
import { fetchSkills, getHomePageContent } from "../helpers/fetchData";
import TagCloud from "../_components/TagCloud";
import Testimonials from "../_components/Testimonials";
import Footer from "../_components/Footer";

type Params = {
    params: {
        locale: string;
    }
}

const HomePage = async ({ params: { locale } }: Params) => {
  const content = await getHomePageContent(locale);
  const skills = await fetchSkills();
  const data = skills.map((s, i) => ({ skill: s.Skill, value: Number(s.Experience) }));
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
      <TagCloud data={data} />
      <Skills skills={skills} />
      <Testimonials testimonials={content.TestimonialSection}/>
      <Footer />
    </>
  );
};

export default HomePage;
