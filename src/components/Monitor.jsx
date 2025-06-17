import React from 'react'
import state from '../assets/Sced.jpg'
const Monitor = () => {
  return (
     <section id='services'  className='max-w-7xl mx-auto md:px-16 px-6 md:py-12 py-5'>
         <div className='flex flex-col md:flex-row items-center justify-between gap-6 md:gap-24'>
            {/* left */}
             <div className='md:w-1/2 w-full'>
              <p className='text-violet-500 font-semibold'>SCHEDULE</p>
              <h2 className='text-3xl md:text-4xl font-black text-neutral-900 md:mt-4 mt-2 mb-5'>Lorem ipsum dolor <br/>Lorem ipsum dolor sit</h2>
              <p className='text-neutral-600 md:mb-10 mb-5'>Lorem Lorem ipsum dolor sit amet.ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur <br /><span className='text-violet-400'>Lorem ipsum dolor sit amet</span></p>
                 <a href="#" className='bg-violet-600 shadow-xl  text-white px-4 md:px-6 py-3 rounded-xl hover:bg-violet-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95 '>Explore schedule features→</a>
              </div>
             {/* right */}
    <div className='md:w-1/2 '>
              <img src={state} alt="schedule" className='w-lg h-auto ' />
    </div>
           
           
          </div>
           
        </section>
  )
}

export default Monitor