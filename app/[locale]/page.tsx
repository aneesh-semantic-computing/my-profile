import React from "react";
import Hero from "../_components/Hero";
import Skills from "../_components/Skills";
import { fetchSkills, getHomePageContent } from "../helpers/fetchData";
import Testimonials from "../_components/Testimonials";
import Footer from "../_components/Footer";
import dynamic from "next/dynamic";
import SectionHeading from "../_components/SectionHeading";
import Container from "../_components/Container";

const Navbar = dynamic(() => import('../_components/Navbar'), {
  loading: () => <p>Loading...</p>,
})

type Params = {
    params: {
        locale: string;
    }
}

const HomePage = async ({ params: { locale } }: Params) => {
  const skillDescription = `Below visualisations are to showcase my skillsets. 
  These are developed using NextJS, TypeScript, AmCharts and D3.`;
  const { NavSection, HeroSection, TestimonialSection } = await getHomePageContent(locale);
  const skills = await fetchSkills();
  const data = skills.map((s, i) => ({ skill: s.Skill, value: Number(s.Experience) }));
  return (
    <>
      <Navbar
        title={NavSection.title}
        cta_text={NavSection.cta_text}
      />
      <Hero
        title={HeroSection.title}
        description={HeroSection.description}
        cta_text={HeroSection.cta_text}
        picture={HeroSection.picture}
      />
      <Container className="flex flex-wrap md:pt-18 pb-18">
        <SectionHeading title="Skills" description={skillDescription} anchorId="skills" />
        <Skills skills={skills} />
      </Container>
      <Testimonials testimonials={TestimonialSection.testimonials}/>
      <Footer />
    </>
  );
};

export default HomePage;
