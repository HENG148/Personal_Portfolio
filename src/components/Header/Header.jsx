import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Header() {

  const handleScrollToStart = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const padding = 130;
      window.scrollTo({
        top: element.offsetTop - padding,
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
      <header
        className='main-header mt-7 ml-9 flex gap-[25rem] items-baseline'>
        <Link to='/'>
          <div>
            <h1 className='text-[30px] font-bold font-main'>
              Port<span className='text-title'>folio</span>
            </h1>
          </div>
        </Link>

        <div className='main-nav-bar'>
          <div className='nav-bar font-medium max-w-screen-md'>
            <button className='navbar-click' onClick={() => handleScrollToStart('Home')}>Home</button>
            <button onClick={() => handleScrollToStart('About')}>About</button>
            <button onClick={() => handleScrollToStart('Project')}>Projects</button>
            <button className='header-button' onClick={() => handleScrollToStart('Contacts')}>Contact</button>
          </div>
        </div>
        <a href='https://t.me/HenGApril' className='telegram'>
          <FaTelegramPlane
          style={{
            fontSize: '1.8rem',
            marginLeft: '6rem',
            }}
          />
        </a>
      </header>
    </>
  )
}
