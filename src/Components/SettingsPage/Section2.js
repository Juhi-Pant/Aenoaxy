import React from 'react'

function Section2() {
  return (
    <div className='lg:w-3/4 space-y-6 w-4/5 mt-6'>
      <div className='font-bold'>Delete information for specific invitees</div>
      <div className='text-lg'>Enter an invitees's email to delete all of their personally identifiable information from your organization and integrations. During the data deletion process, Calendly removes the deleted invitee from their spot on group events and cancels both pending and upcoming events with them.</div>
      <div><form action=""><input type="text" name="" id="" className='h-28 w-full border-gray-300 border-2 rounded-md' /></form></div>
      <div><button className='bg-red-600 w-20 h-10 rounded-full font-semibold text-white'>Delete</button></div>
      <hr className='pb-6'/>
    </div>
  )
}

export default Section2
