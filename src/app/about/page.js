import AboutSection from '@/components/AboutSection'
import TeamMembers from '@/components/ui/TeamMembers'
import React from 'react'

const About = () => {
  return (
    <div className='bg-eh-white flex flex-col items-center justify-center min-h-screen w-full'>
      <AboutSection />
      <TeamMembers />
    </div>
  )
}

export default About