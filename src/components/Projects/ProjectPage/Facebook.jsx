import React from 'react'
import FacebookIcon from '../../../assets/icon/Facebook-Logosu.png'
import ReactJs from '../../../assets/ProgrammingIcon/React-icon.svg.png'
import Figma from '../../../assets/ProgrammingIcon/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.webp'
import Flaticon from '../../../assets/ProgrammingIcon/images.png'
import NextJs from '../../../assets/ProgrammingIcon/next-js.svg'
import Tailwind from '../../../assets/ProgrammingIcon/Tailwind_CSS_Logo.svg.png'
// import EmailJs from '../../../assets/ProgrammingIcon/HSitAZAV_400x400.jpg'


export default function Facebook() {

  const technology = [
    { src: ReactJs, alt: 'React.JS', name: 'React.JS' },
    { src: NextJs, alt: 'Next.JS', name: 'Next.JS' },
    { src: Tailwind, alt: 'Tailwind', name: 'Tailwind' },
    { src: Figma, alt: 'Figma', name: 'Fimga' },
    { src: Flaticon, alt: 'Flaticon', name: 'Flaticon' },
  ]

  return (
    <>
      <div className='grid justify-center ml-[15rem] mr-[15rem]'>
        <div className=' bg-white-gray '>
          <div className='grid justify-items-center bg-white ml-[17rem] mr-[17rem] pt-16 pb-16 rounded-2xl'>
            <img
              src={FacebookIcon}
              width={310}
              alt='FacebookIcon' />
          </div>
        </div>
        <h1 className='text-[1.3rem] font-medium mt-4'>Facebook Clone</h1>
        <p className='text-[1.1rem] mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className='mt-6'>
          <h1 className='text-[1.15rem] mb-2'>Technologies : </h1>

          <div className='flex items-center gap-[3rem]'>
            {technology.map(({ src, alt, name }, index) => (
              <div className='flex items-center gap-2' key={`${name} - ${index}`}>
                <img src={src} width={23} alt={alt} />
                <p className='text-[17.6px]'>{name}</p>
              </div>
            ))}
          </div>

          <div className='mt-8'>
            <h1 className='text-[1.2rem]'>Project Screenshots : </h1>
          </div>
        </div>
      </div>
    </>
  )
}

            {/* <div className='flex items-center'>
              <img src={ReactJs} width={50} alt='React.JS' />
              <p>React.JS</p>
            </div>

            <div className='flex items-center'>
              <img src={NextJS} width={50} alt='Next.JS' />
              <p>Next.JS</p>
            </div>

            <div className='flex items-center'>
              <img src={Tailwind} width={50} alt='Tailwind CSS' />
              <p>Tailwind</p>
            </div>

            <div className='flex items-center'>
              <img src={Figma} width={50} alt='Figma' />
              <p>Figma</p>
            </div>

            <div className='flex items-center'>
              <img src={Flaticon} width={50} alt='Flaticon' />
              <p>Flaticon</p> 
            </div> */}