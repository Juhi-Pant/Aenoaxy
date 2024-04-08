import React from 'react'

function Description() {
  return (
    <div className='lg:w-3/4 text-lg space-y-6 w-4/5'>
      <div className='font-bold text-xl'>Delete information from your organization</div>
      <div className=''>When anyone in your organization schedules an event with an invitee, information about the event and everyone part of it is saved in Calendly. If you need to delete this information from Calendly and its vendors for compilance reasons, you can do so without contacting support.</div>
      <div className='flex items-center bg-red-100 h-16 lg:h-12 md:h-12'><div className='ml-6 font-bold'>Once you delete information, you won't be able to recover it.</div></div>
      <div>Invitee data will be deleted <span className='font-bold'>7 days</span> from the data you make the request.</div>
      <hr />
    </div>
  )
}

export default Description
