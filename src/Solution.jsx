import React, { useState } from 'react'

function Solution() {
    const [soultionData, Setsolution] = useState(
        [
            {
                icon: "img/solution_img/quality_analysis.png",
                title: "Quality Analysis",
                subhading: "We ensure that your solutions fit the quality guidelines."
            },
            {
                icon: "img/solution_img/security_fix.png",
                title: "Security Fixes",
                subhading: "Fixing the security breaches in all possible ways."
            },
            {
                icon: "img/solution_img/software_devlop.png",
                title: "Software Development",
                subhading: "We ensure that your solutions fit the quality guidelines."
            },
        ]
    )
  return (
    <div className='w-full py-10 bg-[#f2f2f2]'>
      <div className="container mx-auto px-2 md:px-0">
        <h2 className='text-center text-[#414141] text-2xl font-semibold py-2'>Modern Solutions we Provide</h2>
        <p className='text-center font-thin'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.</p>
        <div className='flex flex-wrap justify-evenly py-5'>
            {
                soultionData?.map(
                    (data) =>{
                        return(
                            <div style={{border:" 0.7px solid #171717"}} className='w-full md:w-[50%] bg-white border-5 rounded py-5 px-2 mb-2 md:mb-0'>
                                <img src={data.icon} alt={data.icon} className='mx-auto' />
                                <h3 className='text-center py-2'>{data.title}</h3>
                                <p className='text-center font-thin'>{data.subhading}</p>
                            </div>
                        )
                    }
                )
            }
        </div>
        <button type="button" className="py-2.5 block mx-auto  px-5 text-sm font-medium bg-[#414141]  focus:outline-none text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Know More</button>
      </div>
    </div>
  )
}

export default Solution
