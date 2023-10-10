import React from 'react'
import Shooters from './Shooters'
import Upadategame from './Upadategame'
import Season from './Season'
import Know from './Know'
import Footer from './Footer'
import FooterGam from './FooterGam'
import Hello from './Hello'
import LastStep from './LastStep'
import QuizOne from './QuizOne'
import Ouiztow from './Ouiztow'

function GamePage() {
  return (
    <>
    <div className='w-full md:bg-image bg-image-phone'>
      <div className="container mx-auto ">
        <div className='flex py-5 justify-between'>
          <div className='flex gap-3'>
            <img src="img/logo512.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <h3 className="self-center tracking-[0.5rem]  text-sm font-semibold whitespace-nowrap text-white">CHIMERA</h3>
          </div>
          <div className='flex gap-4 items-center'>
            <img src="img/global.png" alt="global" />
            <h3 className='text-white text-sm'>ENGLISH (ASIA)</h3>
            <img src="img/drop-down.png" alt="dropdown" />
          </div>
        </div>
        <div className='h-[832px] md:h-[1280px] flex flex-col justify-between items-start py-5'>
          <img src="img/lets-be.png"  alt="text-banner" className='mx-auto max-w-[100%] hidden md:block' />
          <img src="img/Mask group.png" alt="text-banner" className='mx-auto max-w-[100%] md:hidden' />
          <div className='text-center  block mx-auto relative'>
          <button className='text-white text-xl  font-["Orbitron",sans-serif] bg-[#64646436] py-3 px-2 border-2 border-[#F5DEB3]'>Know More</button>
            <div className='absolute top-[50%] left-[-4%] w-[10%] h-[1%] rotate-[90deg] text-[#151515] border-2 border-[#151515]'></div>
            <div className='absolute  top-[50%] right-[-4%] w-[10%] h-[1%] rotate-[90deg] text-[#151515] border-2 border-[#151515]'></div>
          </div>
        </div>
      </div>
    </div>
    <Shooters/>
    <Upadategame/>
    <Know/>
    <Season/>
    <FooterGam/>
    <Hello/>
    <LastStep/>
    <QuizOne/>
    <Ouiztow/>
    </>
  )
}

export default GamePage
