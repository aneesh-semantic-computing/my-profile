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
      <Container className="flex flex-wrap md:pt-18 pb-18">
        <SectionHeading title="Skills" description={skillDescription} anchorId="skills" />
        <Skills skills={skills} />
      </Container>
      <Testimonials testimonials={content?.TestimonialSection?.filter((t:any) => t?.show)}/>
      <Footer />
    </>
  );
};

export default HomePage;
