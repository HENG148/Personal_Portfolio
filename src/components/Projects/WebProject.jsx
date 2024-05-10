import React from 'react'
import  { useState } from 'react'
import Project from '../../assets/Screenshot 2024-04-10 152733.png'
import Projects from '../../assets/Screenshot 2024-04-16 150918.png'
import TicTacToe from '../../assets/Screenshot 2024-04-16 161236.png'
import DateTime from '../DateTime'

export default function WebProject() {
  return (
    <>
      <div className='grid gap-y-16 mt-12'>
        <div className='each-project flex gap-14' data-aos="fade-up">
          <div className='project-details'>
            <img
              style={{
                border: '4px solid #000',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
              width={416}
              src={Project}
              alt='Project'
            />
            <h2>Portfolio</h2>
            <p>Detail : <DateTime /></p>
          </div>

          <div className='project-details'>
            <img
                style={{
                border: '4px solid #000',
                borderRadius: '10px'
              }}
              width={416}
              src={Projects}
              alt='Project'
            />
            <h2>Portfolio</h2>
            <p>Detail : <DateTime /></p>
          </div>

          <div className='project-details'>
            <img
              style={{
                border: '4px solid #000',
                borderRadius: '10px'
              }}
              width={416}
              src={TicTacToe}
              alt='project'
            />
            <h2>TicTacToe</h2>
            <p>Detail : <DateTime /></p>
          </div>
        </div>

        <div className='each-project flex gap-14' data-aos="fade-up">
          <div className='project-details'>
            <img
              style={{
                border: '4px solid #000',
                borderRadius: '10px'
              }}
              width={416}
              src={Project}
              alt='Project'
            />
            <h2>Portfolio</h2>
            <p>Detail : </p>
          </div>
        </div>
      </div>
    </>
  )
}
