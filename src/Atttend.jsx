import React from 'react'
import Banner from './Banner'

function Atttend() {
    return (
        <div>
            <div className='w-full md:bg-image bg-image-phone'>
                <div className="container mx-auto relative">

                    <div className='h-[800px] md:h-[500px] flex flex-col justify-between items-start py-5'>
                        <img src="img/lets-be.png" alt="text-banner" className='mx-auto max-w-[100%] hidden md:block' />
                        <img src="img/Mask group.png" alt="text-banner" className='mx-auto max-w-[100%] md:hidden' />
                    </div>
                   <div className=' w-[90%] md:w-[50%] bg-white flex justify-center align-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <div className='px-2 py-3 ' >
                            <h3 className='font-bold text-[#151515] text-center'>Please attend the quiz to move on to the next page.</h3>
                            <img src="img/image 96.png" alt="" className='mx-auto' />
                            <div className='flex justify-between'>
                                <button type="button" class="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#414141]  focus:outline-none text-[#414141] rounded-lg border border-gray-200 bg-transparent     hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Quit</button>
                                <button type="button" class="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#414141]  focus:outline-none text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Start Now</button>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Atttend
