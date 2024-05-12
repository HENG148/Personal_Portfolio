import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import MessageMe from './Message';


export default function ContactMe() {
  return (
    <>
      <div id='Contacts' className='pb-[10rem] mt-[9rem] bg-white-gray pt-[6rem]'>
        <div className='grid justify-center justify-items-center'>
          <h1 className='text-[1.8rem] font-bold text-title'>Contact Me</h1>
          <div className='flex items-baseline gap-3'>
            <div className='w-10 h-1 bg-content' data-aos="fade-right"></div>
            <p className='text-[1.2rem] font-medium'>For Works</p>
            <div className='w-10 h-1 bg-content' data-aos="fade-left"></div>
          </div>
        </div>

        <div className='contact-body flex ml-[17rem] gap-[10rem] mt-[3rem]'>
          <div className='get-intouch mr-[10rem]' data-aos="fade-right">
            <h2
              className='text-[1.3rem] mb-8 font-main font-semibold'
            >Get in Touch</h2>
            <div className='grid gap-y-6'>
              <div className='icon' data-aos="fade-right">
                <FaUser
                  style={{
                    fontSize: '1.5rem',
                  }}
                />
                <div>
                  <h3 className='icon-title'>Name</h3>
                  <p>Rong Sokheng</p>
                </div>
              </div>

              <div className='icon' data-aos="fade-right">
                <FaPhoneAlt
                  style={{
                    fontSize: '1.5rem',
                  }}
                />
                <div>
                  <h3 className='icon-title'>Phone</h3>
                  <p>017 560 240</p>
                </div>
              </div>

              <div className='icon' data-aos="fade-right">
                <FaLocationDot
                  style={{fontSize: '1.5rem'}}/>
                <div>
                  <h3 className='icon-title font-medium'>Location</h3>
                  <p>Sen Sok, Phnom Penh, Cambodia</p>
                </div>
              </div>

              <div className='icon' data-aos="fade-right">
                <IoIosMail
                  style={{
                    fontSize: '1.5rem',
                  }}
                />
                <div>
                  <h3 className='icon-title'>Email</h3>
                  <p>rongsokheng148@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className='contact-message'>
            <div className='message'>
              <h2 className='text-[1.3rem] font-main font-semibold'>Message Me</h2>
            </div>
            <div className='messgae'>
              <MessageMe />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
