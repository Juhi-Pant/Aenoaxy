import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //FontAwesome Library for dropdown icon
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Logo from '../Utils/Images/Logo.png'

function Navbar() {
  return (
    <div>
      <div className='bg-white h-16 '>
        <div className='flex justify-between mx-8'>
            <div className='my-2'> {/* Navbar Left Part */}
                <img src={Logo} alt="" className='h-12' /> {/*Company Logo*/}
            </div>
             
            <div className='text-gray-500 flex space-x-4 items-center md:space-x-5 lg:space-x-8'> {/* Navbar Right Part */}
                
                <div>Integrations</div>
                
                <div className='flex space-x-3'>
                    <div>Help</div>
                    <div><FontAwesomeIcon icon={faCaretDown} /></div>
                </div>
                
                <div>
                    <div className='h-12 bg-gray-300 w-12 rounded-full border-4 border-gray-400 flex justify-center items-center'>
                        <div className='text-2xl'>J</div>
                    </div>
                </div>
                
                <div className='flex space-x-3'>
                    <div>Account</div>
                    <div><FontAwesomeIcon icon={faCaretDown} /></div>
                </div>
                
            </div>
        </div>
      </div>

      <div>
        <hr />
      </div>
    </div>
  )
}

export default Navbar
