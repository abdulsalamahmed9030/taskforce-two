import React from 'react'
import Header from '../components/Header'
import AboutOurOrganization from '../components/AboutOurOrganization'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <div className="bg-[#e6f0ef]">
  <Header />
</div>
      <AboutOurOrganization />
      <Footer />
    </>
  )
}

export default page
