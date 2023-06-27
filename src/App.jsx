import { useState } from 'react'
import Sidebar from './comps/Sidebar'
import CustomModal from './comps/CustomModal'
import MainSection from './comps/MainSection'
import Split from 'react-split'
import './App.css'

function App() {

  const [showModal, setVisibility] = useState(true)
  const [contactIp, setContactIp] = useState("")
  return (
   <div className="main">

    {showModal && <CustomModal contactIp={contactIp} setContactIp={setContactIp} setVisibility={setVisibility} />}
    <Split
    sizes={[20, 80]}
    direction='horizontal'
    className="split"
    >
         <Sidebar />
         <MainSection />
        </Split>
   </div>
  )
}

export default App
