import { useState } from 'react'
import Sidebar from './comps/Sidebar'
import MainSection from './comps/MainSection'
import Split from 'react-split'
import './App.css'

function App() {

  const [contactInfo, setContactInfo] = useState([])
  const [id, setId]  = useState(0)
  return (
   <div className="main">

    <Split
    sizes={[20, 80]}
    direction='horizontal'
    className="split"
    >
         <Sidebar contactInfo={contactInfo} setContactInfo={setContactInfo} id={id} setId={setId} />
         <MainSection contactInfo={contactInfo} setContactInfo={setContactInfo} id={id} setId={setId} />
        </Split>
   </div>
  )
}

export default App
