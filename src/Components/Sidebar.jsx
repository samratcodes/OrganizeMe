import React, { useState } from 'react'

import Logo from '../Assets/logo.png'
const Sidebar = () => {

  const [score,setScore] =useState(100)

  const [sidebar,setSidebar] =useState([
   {
       name: 'Home',
       icon:'lol',
       link: '/app'
   },{
       name: 'Tasks',
       icon:'lol',
       link: '/app'
   },{
       name:'Focus Time',
       icon: 'lol',
       link: '/app'
   },{
       name: 'Routine',
       icon: 'lol',
       link: '/app'
   },
   {
    name: 'Routine',
    icon: 'lol',
    link: '/app'
}
,{
       name: 'Challenges',
       icon:'lol',
       link: '/challenges'
   },{
       name: 'Website Blocker',
       icon: 'lol',
       link: '/app'
   },{
       name: 'Leaderboard',
       icon: 'lol',
       link: '/app'
   },{
       name: 'Dashboard',
       icon: 'lol',
       link: '/app'
   },
   {
       name: 'Events',
       icon: 'lol',
       link: '/events'
   }
  ])
  return (
    <div className=' bg-slate-200 w-1/5 flex flex-col items-center h-full overflow-x-hidden'>
      <img src={Logo} className=' h-32' alt="Organize me" />
      <div className='flex  flex-col justify-between '>
        {
            
            sidebar.map((item,index)=>(
                <div to={item.link} key={index} >
                    <div key={index} className='flex items-end text-2xl p-4 pl-14 hover:bg-slate-300'>
                    {item.icon}
                    <div className=' text-xl ml-4'>
                        {item.name}
                    </div>
                </div>
               
                    </div>
                    
            ))
        }
       <div className='flex fixed bottom-0 items-end text-3xl p-4 pl-12 bg-slate-200 hover:bg-slate-300'>
            <img className=' object-cover w-8 h-full' src="src\assets\Logo.png" alt="" /> 
            <div className=' text-xl ml-4'>
                Rohamam saaasc
                </div>
        </div>
    </div>
    </div>
  )
}

export default Sidebar
