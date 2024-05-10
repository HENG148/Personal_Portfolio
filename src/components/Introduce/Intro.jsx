import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import myOwn from "../../assets/387567250_1121570512143527_5913298776363511667_n.jpg";
import ContactApp from './ContactApp';
import cv from '../../assets/CurriculumVitae.pdf'

export default function Introduce() {

  const downloadCV = () => {
    const pdfUrl = cv;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'CurriculumVitae'
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }

  const [ text ] = useTypewriter({
    words: ['Front-end', 'React Developer', 'Designer', 'UX/UI'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })

  return (
    <>
      <div className='mt-[8rem] mb-[8rem]' data-aos="fade-up">
        <div className='main-intro flex justify-center gap-[15rem]'>
          <div className='mt-[1.3rem]'>
            <h1
              className='web-text w-[38rem] text-[5rem] font-bold leading-[7rem] max-w-3xl'>
              <span className='text-title'>
                Web </span>Developer {''}
              <span
                className='web-span text-[60px] font-bold text-content'
                // style={{ fontSize: '60px', fontWeight: 'bold', color: '#0077b5' }}
              >
                {text}
              </span>
              <span style={{ color: 'red' }}>
                <Cursor cursorStyle='|' />
              </span>
            </h1>

            <p className='text-[1.4rem] leading-[3rem] w-[40rem]'>
              I'm a Web Front-end Developer based in Phnom Penh,
              I'll help you build a beautiful website by using JavaScript,
              React.JS, Node.JS, Tailwind and anyother if needed.
            </p>
            <ContactApp />

            <div className='contact-link'>
              <div className='hire-me'>
                <button href='#'>
                  Hire me
                </button>
              </div>
              <div className='download-cv'>
                <button onClick={() => downloadCV()}>
                  Download CV
                </button>
          
              </div>
            </div>
          </div>

          <div>
            <img 
              className='w-[26rem]'
              src={myOwn}
              alt='My-self'>
            </img>
          </div>
        </div>
      </div>
    </>
  )
}
