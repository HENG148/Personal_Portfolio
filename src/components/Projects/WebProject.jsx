import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Project from '../../assets/Screenshot 2024-04-10 152733.png'
import Projects from '../../assets/Screenshot 2024-04-16 150918.png'
import TicTacToe from '../../assets/Screenshot 2024-04-16 161236.png'
import Facebook from '../../assets/icon/Facebook-Logosu.png'
import DateTime from '../DateTime'

export default function WebProject() {
  return (
    <>
      <div className='grid gap-y-16 mt-12'>
        <div className='each-project flex gap-14' data-aos="fade-up">
          <div className='project-details'>
            <div className='pl-[6.9rem] pr-[6.9rem] pt-[3rem] pb-[3rem] border-dashed border-2 border-sky-500 rounded-xl'>
              <Link to='Home/projects/Facebook_Clone'
              className='w-[10rem]'
            >
                <img
                  style={{
                  borderRadius: '12px'
                }}
                width={190}
                src={Facebook}
                alt='Project'
              />
            </Link>
            
            </div>
            <ol className='ml-6' style={{ listStyleType: 'disc' }}>
              <li className='project-title text-[1.1rem] mt-2'>Facebook Clone</li>
            </ol>
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
