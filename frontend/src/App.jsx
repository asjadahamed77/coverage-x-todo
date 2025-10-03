import React from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import Navbar from './components/Navbar'
import { ThemeProvider } from '../components//ui/theme-provider'

const App = () => {
  return (
  <ThemeProvider  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange>
     <div className=''>
    <Navbar />
     <div className='flex flex-col items-start gap-12 lg:gap-16 lg:flex-row p-4 sm:p-8 md:p-12 lg:p-16'>
      <AddTask />
      <Tasks />
    </div>
   </div>
  </ThemeProvider>
  )
}

export default App
