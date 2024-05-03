import SkillMatrix from '@/app/_components/SkillMatrix';
import Skills from '@/app/_components/Skills';
import { fetchSkills } from '@/app/helpers/fetchData';
import React from 'react'

const MySkillsPage = async () => {
    const skills = await fetchSkills();
  return (
    <><SkillMatrix skills={skills} /><Skills skills={skills} /></>
  )
}

export default MySkillsPage