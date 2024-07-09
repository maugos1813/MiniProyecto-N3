import './App.css'
import { Footer } from './components/footer'
import { SearchModal } from './components/modal/searchModal'
import { Header } from './components/nav'
import { StaysList } from './components/staysList'
import React, { useState } from 'react'

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true)

  return (
    <>
      <div>
        <Header/>
        <StaysList/>
        <Footer/>
        <SearchModal isOpen={modalIsOpen} onClose={()=> setModalIsOpen(false)}/>
      </div>
    </>
  )
}

export default App
