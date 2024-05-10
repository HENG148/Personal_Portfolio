import React from 'react'
import Header from '../../components/Header/Header'
import Introduce from '../../components/Introduce/Intro'

export default function Home() {
  return (
    <>
      <div className='Home'>
        <div id='Home'>
          <Header />
          <Introduce />
        </div>
      </div>
    </>
  )
}
