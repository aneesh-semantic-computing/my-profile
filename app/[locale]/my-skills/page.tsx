import Navbar from '@/app/_components/Navbar';
import SkillMatrix from '@/app/_components/SkillMatrix';
import Skills from '@/app/_components/Skills';
import TagCloud from '@/app/_components/TagCloud';
import { fetchSkills, getHomePageContent } from '@/app/helpers/fetchData';
import React from 'react';

type Params = {
    params: {
        locale: string;
    }
};

const MySkillsPage = async ({ params: { locale } }: Params) => {
    const content = await getHomePageContent(locale);
    const skills = await fetchSkills();
    const data = skills.map((s, i) => ({ skill: s.Skill, value: Number(s.Experience) }));
  return (
    <>
      <Navbar
        title={content.NavSection.title}
        cta_text={content.NavSection.cta_text}
      />
      <TagCloud data={data} />
      {/* <SkillMatrix skills={skills} /><Skills skills={skills} /> */}
    </>
  )
}

export default MySkillsPage