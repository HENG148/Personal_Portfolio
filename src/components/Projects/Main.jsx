import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AllProject from './AllProject';
import WebProject from './WebProject';
import DesignProject from './DesignProject';

export default function MainProject() {

  const tabs = ['All', 'Web', 'Design'];

  return (
    <>
      <div id='Project' className='grid justify-center justify-items-center mt-[12rem]'>
        <div className='grid justify-center justify-items-center items-center'>
          <h1 className='text-[1.8rem] font-bold text-title'>My Project</h1>
          <div className='flex items-baseline gap-3'>
            <div className='w-10 h-1 bg-content' data-aos="fade-right"></div>
            <p className='text-[1.2rem] font-medium'>Some Projects</p>
            <div className='w-10 h-1 bg-content' data-aos="fade-left"></div>
          </div>
        </div>

        <div className='main-project'>
          <Tabs className='grid justify-items-center mt-6'>
            <TabList className={`gap-7`}>
              {tabs.map((tab, index) => (
                <Tab key={index} className='text-[1.3rem] font-main font-medium p-7 pt-1 pb-1 rounded-3xl'
                  _selected={{ color: 'white', bg: 'purple' }}>
                  {tab}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              <TabPanel>
                <AllProject id="allProjects"/>
              </TabPanel>
              <TabPanel>
                <WebProject />
              </TabPanel>
              <TabPanel>
                <DesignProject />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  )
}
