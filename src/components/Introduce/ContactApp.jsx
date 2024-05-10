import React from 'react'
import twitter from "../../assets/icon/twitter.png";
import instagram from "../../assets/icon/instagram.png";
import linkedin from "../../assets/icon/linkedin.png";
import github from "../../assets/icon/code.png";
import IconButton from './IconButton';

export default function ContactApp() {

  return (
    <>
      <div className='flex gap-8 items-center mt-[-1rem]'>
        <a href='#'>
          <IconButton text='Twitter'>
            <img className='w-[1.6rem]'
              src={twitter} alt='Twitter'></img>
          </IconButton>
        </a>
        <a href='https://www.linkedin.com/in/rong-sokheng-a20512258/'>
          <IconButton text='LinkedIn' color='bg-blue-500'>
            <img
              className='w-[1.6rem]'
              src={linkedin}
              alt='LinkedIn'>
            </img>
          </IconButton>
        </a>
        <a href='https://www.instagram.com/__heng0_/'>
          <IconButton
            text='Instagram'
            color='bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500 '
          >
            <img
              className='w-[1.6rem]'
              src={instagram}
              alt='Instagram'>
            </img>
          </IconButton>
        </a>
        <a href='https://github.com/HENG148'>
          <IconButton text='GitHub'>
            <img
              className='w-[1.6rem]'
              src={github}
              alt='GitHub'>
            </img>
          </IconButton>
        </a>
      </div>
    </>
  )
}
