import { useState } from 'react'
import Sidebar from './comps/Sidebar'
import MainSection from './comps/MainSection'
import Split from 'react-split'
import './App.css'

function App() {

  return (
      <Split
        sizes={[20, 80]}
        direction='horizontal'
        className="split"
        >
         <Sidebar />
         <MainSection />
        </Split>
  )
}

export default App
