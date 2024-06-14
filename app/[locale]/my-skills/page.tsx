import Container from "@/app/_components/Container";
import Footer from "@/app/_components/Footer";
import SectionHeading from "@/app/_components/SectionHeading";
// import SkillMatrix from '@/app/_components/SkillMatrix';
import Skills from "@/app/_components/Skills";
import { fetchSkills, getHomePageContent } from "@/app/helpers/fetchData";
import dynamic from "next/dynamic";
import React from "react";

const Navbar = dynamic(() => import("@/app/_components/Navbar"), {
  loading: () => <p>Loading...</p>,
});

const TagCloud = dynamic(() => import("@/app/_components/TagCloud"), {
  loading: () => <p>Loading...</p>,
});

type Params = {
  params: {
    locale: string;
  };
};

const MySkillsPage = async ({ params: { locale } }: Params) => {
  const skillDescription = `Below visualisations are to showcase my skillsets. 
  These are developed using NextJS, TypeScript, AmCharts and D3.`;
  const { NavSection } = await getHomePageContent(locale);
  const skills = await fetchSkills();
  const data = skills.map((s, i) => ({
    skill: s.Skill,
    value: Number(s.Experience),
  }));

  return (
    <>
      <Navbar
        title={NavSection.title}
        cta_text={NavSection.cta_text}
      />
      <Container className="flex flex-wrap md:pt-18 pb-18 text-center justify-center">
        <SectionHeading
          title="Skills"
          description={skillDescription}
          anchorId="skills"
          isMainSection={true}
        />
        <TagCloud data={data} />
        <Skills skills={skills} />
      </Container>
      {/* <SkillMatrix skills={skills} /><Skills skills={skills} /> */}
      <Footer />
    </>
  );
};

export default MySkillsPage;
