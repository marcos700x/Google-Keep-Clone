import React, { useContext } from 'react'
import AsideMenu from '../components/AsideMenu'
import Navbar from '../components/Navbar'
import TrashNote from '../components/TrashNote'
import { AuxContext } from '../context/AppContext'

const Trash = () => {

const { trashNotes, ListView } = useContext(AuxContext)

  return (
    <>
      <Navbar/>
      <main>
      <AsideMenu/>
      <div style={{
minHeight: 'calc(100vh - 64px)',
    }} className="container-fluid d-flex flex-column align-items-center  p-md-5">
   <div className={`${ListView ? 'container-fluid pe-0 ps-0 d-flex flex-column align-items-center pt-3 h-100 ' : 'containerNotes h-100 pt-3'}`}>
      {
        trashNotes ?
        trashNotes.map((item) => 
        <TrashNote
          id = {item.id}
          key = {item.id}
          title = {item.title}
          text = {item.text}
          color = {item.color}
        />
        )
        : null
      }
      </div>
      </div>
      </main>
    </>

  )
}

export default Trash