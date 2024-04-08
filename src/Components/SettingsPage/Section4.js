import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Section4() {
  return (
    <div className='lg:w-3/4 space-y-6 w-4/5 mt-8'>
      <div className='font-bold'>Data deletion history</div>
      <div className='w-full h-12 border-2 border-gray-400 rounded-md shadow-lg flex lg:space-x-40 md:space-x-10 space-x-3 font-bold items-center'>
        <div className='flex lg:space-x-2 md:space-x-2  ml-2 space-x-1 text-sm lg:text-md'>
            <div>Request Date</div>
            <div><FontAwesomeIcon icon={faAngleUp} /></div>
        </div>
        <div className='flex space-x-2 items-center text-sm lg:text-md'>
            <div>Requested by</div>
            <div className='flex-col'>
              <div><FontAwesomeIcon icon={faAngleUp} /></div>
              <div><FontAwesomeIcon icon={faAngleDown} /></div>
            </div>
        </div>
        <div className='flex space-x-2 items-center text-sm lg:text-md'>
            <div>Status</div>
            <div className='flex-col'>
              <div><FontAwesomeIcon icon={faAngleUp} /></div>
              <div><FontAwesomeIcon icon={faAngleDown} /></div>
            </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Section4
