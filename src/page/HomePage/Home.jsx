import React from 'react'
import Header from '../../components/Header/Header'
import Introduce from '../../components/Introduce/Intro'
import ContactMe from '../../components/Contact/Page'
import AboutMe from '../../components/About/AboutMe'
import MainProject from '../../components/Projects/Main'

export default function Home() {
  return (
    <>
      <div className='Home'>
        <div id='Home'>
          <Header />
          <Introduce />
        </div>
        <AboutMe />
        <MainProject />
        <ContactMe />
      </div>
    </>
  )
}
