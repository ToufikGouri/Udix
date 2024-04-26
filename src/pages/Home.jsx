import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import ContentSection from '../components/ContentSection'
import Customers from '../components/Customers'

const Home = () => {

  useEffect(() => {
    document.title = "Udix"
  }, [])


  return (
    <>
      <HeroSection />
      <ContentSection />
      <Customers />
    </>
  )
}

export default Home