import React from 'react'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
     <div className="bg-[#eef9f9]">
  <Header />
</div>
      <Gallery />
      <Footer />
    </>
  )
}

export default page
