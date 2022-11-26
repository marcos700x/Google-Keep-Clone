import React, { useContext } from 'react'
import { AuxContext } from '../context/AppContext'
import FormNotes from './FormNotes'
import Note from './Note'

const ContainerNotes = () => {

  const { notes, ListView  } = useContext(AuxContext)


  return (
    <main className='ps-3 pe-3'>
    { notes.length === 0 && <div className='emptyNotes'><div className='svgEmpty opacity-75'></div><p className='text-light opacity-75'>Notes you add appear here</p></div> }
  <div className="d-flex align-items-center flex-column w-100">
  <FormNotes/>
    { notes.find((item) => item.isPinned === true) && <p className='isPinnedLegend text-light mt-5 mb-2 w-100 text-start opacity-75'>Pinned</p> }
  <div className={`${ListView ? 'container-fluid pe-0 ps-0 d-flex flex-column align-items-center pt-5' : 'containerNotes'}`}>
    {
      notes.map((item) => 
      {
        if(item.isPinned){
          return <Note
          id = {item.id}
          key = {item.id}
          title = {item.title}
          text = {item.text}
          isPinned = {item.isPinned}
          color = {item.color}
          />
        }
    }
      )
    }
  </div>
  { notes.find((item) => item.isPinned === true) &&  notes.find((item) => item.isPinned === false) && <p className='isPinnedLegend text-light mt-5 mb-2 w-100 text-start opacity-75'>Others</p> }
  <div className={`${ListView ? 'container-fluid pe-0 ps-0 d-flex flex-column align-items-center pt-5' : notes.find((item) => item.isPinned === true) ? 'containerNotes ' : 'containerNotes mt-5'}`}>
    {
      notes.map((item) => {
        if(item.isPinned === false){
      return <Note
        id = {item.id}
        key = {item.id}
        title = {item.title}
        text = {item.text}
        isPinned = {item.isPinned}
        color = {item.color}
      />
    }
    }
      )
    }
  </div>

  </div>
  </main>
  )
}

export default ContainerNotes