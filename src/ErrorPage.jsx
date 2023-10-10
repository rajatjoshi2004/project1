import React from 'react'
import { isMobile } from 'react-device-detect'

function ErrorPage() {
  return (
    <div className='w-full '>
      <div className="conatiner mx-auto ">
        <h2 className='font-bold text-center text-4xl'>Ohh... that’s wrong</h2>
        <div style={{display:"flex",flexDirection:"column",gap:"60px"}} className='h-[100vh] items-center justify-center'>
            <img src="img/Error_Img.png" className='mx-auto' alt="404Page" />
        
            {(isMobile) && <button className='homeBackBtn' >Back to Home</button>}
     </div>
      </div>
    </div>
  )
}

export default ErrorPage
