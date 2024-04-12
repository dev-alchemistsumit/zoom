import React from 'react'
import CallList from '@/components/CallList'

const Recordings = () => {
  return (

    // using reusable components
              <section  className=' text-white flex size-full flex-col gap-10 '>
              
        <h1 className='text-3xl font-bold'>
    Recordings
      </h1>
        
      <CallList type="recordings" />
      
    </section>
  )
}

export default Recordings
