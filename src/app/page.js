import HeroSection from '@/app/components/HeroSection'
import JobSection from '@/app/components/JobSection'
import Navbar from '@/app/components/Navbar'
import React from 'react'


function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <JobSection />
    </>
  )
}

export default page