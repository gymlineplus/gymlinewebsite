import React from 'react'
import Navbar from "@/ui/Navbar";

const layout = ({children }) => {
  return (
    <>
     <Navbar />
     <main>{children}</main>
     <FooterSection />
    </>
  )
}

export default layout
