import React from 'react'
import myOwn from '../../assets/387567250_1121570512143527_5913298776363511667_n.jpg';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ConImage from '../../assets/icon/badge.png';
import ExpIcon from '../../assets/icon/pc.png';

export default function AboutMe() {

  const tabs = ['Skills', 'Education', 'Experience'];
  const skills = ['JavaScript', 'React.JS', 'Node.JS', 'PHP', 'BootStrape', 'GitHub'];
  const schoolClass = [
    'Royal University of Phnom Penh ( 2021 - Present )',
    'Chhong Zheng High School ( 2015 - 2021 )',
    'Beltei International School',
  ];

  return (
    <>
      <div id='About' className='main-about flex ml-[19.5rem] mt-[15rem] gap-24'>
        <div data-aos="fade-right">
          <img className='about-img w-[31rem]' src={myOwn} alt='myself'></img>
        </div>

        <div>
          <div className='about-title grid ml-8'>
          <h1
            className='text-[1.8rem] font-bold text-title ml-7'
          >About Me</h1>
          <div className='flex items-baseline gap-3'>
            <div className='w-10 h-1 bg-content' data-aos='fade-right'></div>
            <p className='text-[1.2rem] font-medium'>Who Am I</p>
            <div className='w-10 h-1 bg-content' data-aos='fade-left'></div>
          </div>
        </div>

        <div className='about-intro' data-aos="fade-up">
          <div>
            <p className='about-text text-[1.3rem] font-main mt-8 leading-9 w-[48rem]'>
                I'm a Front-end ( React.JS ) developer with a passion for creating interactive and responsive web application.
                I can design website to the customer according to your requirement as Customize and redesign your assisting
                once by using JavaScript, React.JS, Next.JS, Node.JS, Tailwind or anyother if needed.
                I serve my experience for your business efficetive my project with absolute develop and perfections.
                I customize professional website regular, and you can get your set up and running.
            </p>
          </div>

          <>
            <Tabs className='content-tabs mt-6 ml-2'>
              <TabList className=' grid gap-8 grid-x-5'>
                {tabs.map((tab, index) => (
                  <Tab key={index} className=' about-tabs text-[1.1rem] font-medium pl-4 pr-4 pt-1 pb-1 rounded-3xl' _selected={{ color: 'white', bg: 'purple' }}>{tab}</Tab>
                ))}
              </TabList>

              <TabPanels className='about-tab mt-6'>
                <TabPanel>
                  <ol
                    className='about-tabs-intro text-[1.1rem] font-medium font-main leading-9 ml-3.5'
                    style={{ listStyleType: 'disc' }}>
                    {skills.slice(0, 7).map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ol>
                </TabPanel>

                <TabPanel>
                  <div className='tab-skill'>
                    <div className='flex items-center mt-3'>
                      <img
                        className='w-8'
                        src={ConImage}
                        alt='Congratulation-Icon'
                      ></img>
                      <div className='ml-8'>
                        <h3
                          className='text-[1.2rem] font-medium'
                        >Bachelor's Degree in Computer Science | {schoolClass[0]}</h3>
                        <ol className='ml-[1.3rem]' style={{ listStyleType: 'disc' }}>
                          <li>Cisco Certificate</li>
                        </ol>
                      </div>
                    </div>
                      
                    <div className={`flex items-center mt-3`}>
                        <img
                          className='w-8'
                          src={ConImage}
                          alt='Congratulation-Icon'
                        ></img>
                        <div className='ml-8'>
                          <h3
                            className='text-[1.2rem] font-medium'
                          >High School | {schoolClass[1]}</h3>
                          <ol
                            className='ml-[1.3rem]'
                            style={{ listStyleType: 'disc' }}>
                            <li>Bacll Certificate</li>
                            <li>Deploma Certificate</li>
                          </ol>
                        </div>
                    </div>

                      <div className={`flex items-center mt-3`}>
                        <img
                          className='w-8'
                          src={ConImage}
                          alt='Congratulation-Icon'
                        ></img>
                        <div className='ml-8'>
                          <h3
                            className='text-[1.2rem] font-medium'
                          >English Class | {schoolClass[2]}</h3>
                          <ol style={{marginLeft: '1.3rem', listStyleType: 'disc' }}>
                            <li>IELTS</li>
                            <li>Level 12 Certificate</li>
                          </ol>
                        </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex gap-8'>
                      <div className='exp-icon'>
                        <img
                          className='w-[1.8rem]'
                          src={ExpIcon}
                          alt='Experience-Icon'
                        />
                      </div>
                      <div className='exp-intro text-[17px] leading-8'>
                        <h1
                          className='text-[1.2rem] font-medium'>MAQSU ( Software Company )</h1>
                        <p className='font-medium'>
                          <span className='text-[1.2rem] font-medium'>Details: </span>
                          March 2023 to September 2023 ( 7 Months )
                        </p>
                        <ol
                          className='pl-5 font-medium'
                          style={{ listStyleType: 'disc' }}
                        >
                          <li>Amret ( Bank ): MockUp, UX/UI, Front-end</li>
                          <li>Chip Mong ( Bank ): MockUp, Front-end</li>
                        </ol>
                      </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        </div>
        </div>
      </div>
    </>
  )
}

