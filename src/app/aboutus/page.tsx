import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutTwo from '../components/AboutTwo'
import ProcessManufacturing from '../components/ProcessManufacturing'

const page = () => {
  return (
    <>
      <div className="bg-[#eef9f9]">
  <Header />
</div>
    <AboutTwo />
    <ProcessManufacturing />
      <Footer />
    </>
  )
}

export default page
