import React from 'react'
import SideMenu from './SettingsPage/SideMenu'
import Description from './SettingsPage/Description'
import Section2 from './SettingsPage/Section2'
import Section3 from './SettingsPage/Section3'
import Section4 from './SettingsPage/Section4'
import Section5 from './SettingsPage/Section5'

function MainPage() {
  return (
    <div>
      <div className='flex'>
        <SideMenu/>
        <div className='lg:ml-8 lg:mt-6 ml-20 mt-8'>
            <Description/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
        </div>
      </div>
    </div>
  )
}

export default MainPage
