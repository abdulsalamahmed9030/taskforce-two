import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

const page = () => {
  return (
    <>
      <div className="bg-[#eef9f9]">
  <Header />
</div>
      <AboutUs />
      <Footer />
    </>
  )
}

export default page
