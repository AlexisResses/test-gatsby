import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.module.css'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
        <title>{pageTitle}</title>
            <Navbar/>
                <main>
                <h1>{pageTitle}</h1>
                    {children}
                </main>
            <Footer/>
    </div>
  )
}

export default Layout