import { ClipboardList } from 'lucide-react'
import { ModeToggle } from '../../components//ui/mode-toggle'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' px-4 sm:px-8 lg:px-16 py-2 flex items-center justify-between  border-b-2'>
      <div className='flex items-center gap-2  font-bold text-lg'>
      <ClipboardList />
      <span>TODO Manager</span>
      </div>
       <ModeToggle />
    </div>
  )
}

export default Navbar
