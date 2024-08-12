import React from 'react'

function Banner() {
  return (
    <div className ='section-container bg-gradient-to-r from-[#ffffff] from-0% to-[#ffffff]'>
         <div className ='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>

             {/*texts */}
            <div className='md:w-1/2 space-y-7 px-4'>
            <h2 className='md:text-5xl text-4xl font-bold md:leading-sung leading-sung '>Pet DayCare Services in Sri Lanka</h2>
            <p className='text-xl text-[#000000]'>Creating a Safe and Happy Place Where Your Pets Thrive, Play, and Are Loved Like Family</p>
            <button className='btn bg-orange px-8 py-3 font-semibold text-white rounded-full'>Booking now</button>
            </div>
           
            {/*images */}
            <div className='md:w-1/2'>
                <img src="banner.png" alt=""/>
            </div>
          </div>
    
    </div>
      
  )
}

export default Banner
