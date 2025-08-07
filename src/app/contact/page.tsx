import React from 'react'
import Header from '../components/Header'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
     <div className="bg-[#e6f0ef]">
  <Header />
</div>
      <ContactUs />
      <Footer />
    </>
  )
}

export default page
