import React, { useContext } from 'react'
import AsideMenu from '../components/AsideMenu'
import Navbar from '../components/Navbar'
import FormNotes from '../components/FormNotes'
import { AuxContext } from '../context/AppContext'
import Note from '../components/Note'


const Home = () => {

  const { notes, ListView } = useContext(AuxContext)


  return (
    <>
    <Navbar/>
    <main>
    <AsideMenu/>
    <div  style={{
minHeight: 'calc(100vh - 64px)',
    }} className="container-fluid d-flex flex-column align-items-center pt-5 p-md-5">
    <FormNotes/>
    <div className={`${ListView ? 'container-fluid pe-0 ps-0 d-flex flex-column align-items-center pt-5 h-100 ' : 'containerNotes h-100 pt-5'}`}>
      {
        notes.map((item) => 
        <Note
          id = {item.id}
          key = {item.id}
          title = {item.title}
          text = {item.text}
          color = {item.color}
        />
        )
      }
    </div>
    </div>
    </main>
    </>
)}

export default Home