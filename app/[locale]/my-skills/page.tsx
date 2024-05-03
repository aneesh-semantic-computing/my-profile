import Navbar from '@/app/_components/Navbar';
import SkillMatrix from '@/app/_components/SkillMatrix';
import Skills from '@/app/_components/Skills';
import { fetchSkills, getHomePageContent } from '@/app/helpers/fetchData';
import React from 'react';

type Params = {
    params: {
        locale: string;
    }
};

const MySkillsPage = async ({ params: { locale } }: Params) => {
    // console.log(locale);
    // const content = await getHomePageContent(locale);
    const skills = await fetchSkills();
  return (
    <>
      {/* <Navbar
        title={content.NavSection.title}
        cta_text={content.NavSection.cta_text}
      /> */}
        <SkillMatrix skills={skills} /><Skills skills={skills} />
    </>
  )
}

export default MySkillsPage