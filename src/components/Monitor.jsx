import React from 'react'
import state from '../assets/Sced.jpg'
const Monitor = () => {
  return (
     <section id='services'  className='max-w-7xl mx-auto md:px-16 px-6 md:py-12 py-5'>
         <div className='flex flex-col md:flex-row items-center justify-between gap-6 md:gap-24'>
            {/* left */}
             <div className='md:w-1/2 w-full'>
              <p className='text-violet-500 font-semibold'>SCHEDULE</p>
              <h2 className='text-4xl md:text-4xl font-black text-neutral-900 md:mt-4 mt-2 mb-5'>
Stay ahead with effortless scheduling</h2>
              <p className='text-neutral-700 md:mb-10 mb-5'>Managing your time has never been easier. Our intuitive scheduling tools help you organize tasks, meetings, and milestones with clarity and precision — all in one place.<br /><span className='text-violet-600 text-2xl'>Plan smarter, save time</span></p>
                 <button href="#" className='cosmic-button active:scale-95 '>Explore schedule features →</button>
              </div>
             {/* right */}
    <div className='md:w-1/2 '>
              <img src={state} alt="schedule" className='w-lg h-auto hover:scale-[1.03] transition-all duration-300'/>
    </div>
          </div>
        </section>
  )
}

export default Monitor