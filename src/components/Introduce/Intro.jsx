import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import myOwn from "../../assets/Own_Profile.jpg";
import ContactApp from './ContactApp';

export default function Introduce() {

  // const downloadCV = () => {
    //   const pdfUrl = cv;
    //       const link = document.createElement('a');
    //       link.href = pdfUrl;
    //       link.download = 'CurriculumVitae'
    //       document.body.appendChild(link);
    //       link.click();
    //       document.body.removeChild(link);
    // }
    // const cvLink = 'https://drive.google.com/file/d/1pypkRCbxSMz65lyMEaglvbne9PcrKvQ1/view?usp=sharing';

    const [text] = useTypewriter({
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
                  <button>
                    <a href='https://drive.google.com/file/d/1pypkRCbxSMz65lyMEaglvbne9PcrKvQ1/view?usp=sharing'>
                      Check CV
                    </a>
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
