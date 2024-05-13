import React from 'react'
import PortfolioImg from '../../../assets/Project_Profile.jpg'
import FacebookIcon from '../../../assets/icon/Facebook-Logosu.png'
import ReactJs from '../../../assets/ProgrammingIcon/React-icon.svg.png'
import Figma from '../../../assets/ProgrammingIcon/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.webp'
import Flaticon from '../../../assets/ProgrammingIcon/images.png'
import NextJs from '../../../assets/ProgrammingIcon/next-js.svg'
import EmailJs from '../../../assets/ProgrammingIcon/HSitAZAV_400x400.jpg'
import Tailwind from '../../../assets/ProgrammingIcon/Tailwind_CSS_Logo.svg.png'
// import { Link } from 'react-router-dom'

export default function Portfolio() {


  const techonology = [
    { src: ReactJs, alt: 'React.Js', name: 'React.JS' },
    { src: NextJs, alt: 'Next.Js', name: 'Next.JS' },
    { src: EmailJs, alt: 'Email.Js', name: 'Email.JS' },
    { src: Tailwind, alt: 'Tailwind', name: 'Tailwind' },
    { src: Figma, alt: 'Figma', name: 'Figma' },
    { src: Flaticon, alt: 'Flaticon', name: 'Flaticon' },

  ]

  return (
    <>
      <div className='ml-[15rem] mr-[15rem]'>
        <div className='bg-white-gray'>
          <div className='grid justify-center bg-white ml-[17rem] mr-[17rem] pt-16 pb-16 rounded-2xl'>
            <img src={PortfolioImg}
              width={200}
              alt='PortfolioIcon'
            />
          </div>
        </div>
        <h1 className='text-[1.3rem] font-medium mt-4'>Personal Portfolio</h1>
        <p className='text-[1.1rem] mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className='mt-6'>
          <h1 className='text-[1.15rem] mb-2'>Techonologies : </h1>

          <div className='flex items-center gap-[3rem]'>
            {techonology.map(({ src, alt, name }, index) => (
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
