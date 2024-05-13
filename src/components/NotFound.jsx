import React from 'react'
import Background from '../assets/NotFound.avif'
import { Link } from 'react-router-dom'
import leftArrow from '../assets/arrow-left-icon-2048x2048-s5o4hxo0.png'

export default function NotFound() {
  return (
    <>
          <div className='grid justify-items-center'>
            <div className='grid justify-items-center'>
              <h2 className='text-[10rem]'>404</h2>
              <h1 className='text-[3rem]'>Page Not Found</h1>
              <p className='text-[1.3rem]'>Sorry, the page you are looking for could not be found or has been removed.</p>
            </div>
            <div className='flex items-center'>
              <Link to='/' className='flex items-center'>
                <img
                  src={leftArrow}
                  width={13}
                  alt='arrow'
                />
              <p>Back to Home</p>
              </Link>
            </div>
          </div>
    </>
  )
}
