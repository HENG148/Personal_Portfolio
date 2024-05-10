import React, { useState } from 'react'
import Project from '../../assets/Screenshot 2024-04-10 152733.png'
import Projects from '../../assets/Screenshot 2024-04-16 150918.png'
import TicTacToe from '../../assets/Screenshot 2024-04-16 161236.png'
// import DateTime from '../dateTime'
import { Link } from 'react-router-dom'
import Facebook from '../../assets/icon/Facebook-Logosu.png'
// import ProjectInfo from './projectInfo'

export default function AllProject() {

  return (
    <>
      <div className='grid gap-y-16 mt-12'>
        <div className='each-project flex gap-14' data-aos="fade-up">
          <div className='project-details'>
            <Link to='Home/project/Facebook_Clone'>
              <img
                style={{
                  border: '4px solid #000',
                  borderRadius: '10px',
                  // paddingTop: '200px',
                  // padding: '10px 10px 10px 10px',
                  // width: '10rem',
                  // backgroundColor: '#1877F2'
                }}
                className='pt-[10rem]'
                width={390}
                src={Facebook}
                alt='Project'
              />
            </Link>
            <ol className='ml-6' style={{ listStyleType: 'disc' }}>
              <li className='project-title text-[1.1rem] mt-2'>Facebook Clone</li>
            </ol>
            {/* <p>Detail : <DateTime /></p> */}
          </div>

          <div className='project-details'>
            <Link to='Home/project/Flexify_Shoes'>
              <img
                style={{
                border: '4px solid #000',
                borderRadius: '10px'
              }}
              width={416}
              src={Projects}
              alt='Project'
            />
            </Link>
            <ol className='ml-6' style={{ listStyleType: 'disc' }}>
              <li className='text-[1.1rem] mt-2'>Flexify Shoes Store</li>
            </ol>
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
            <ol className='ml-6' style={{ listStyleType: 'disc' }}>
              <li className='text-[1.1rem] mt-2'>Portfolio</li>
            </ol>
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
            <ol className='ml-6' style={{ listStyleType: 'disc' }}>
              <li className='text-[1.1rem] mt-2'>Flexify Shoes Store ( Design )</li>
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
            <p>Detail : 25. Otc. 2023</p>
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
            <p>Detail : 25. Otc. 2023</p>
          </div>
        </div>
      </div>
    </>
  )
}
