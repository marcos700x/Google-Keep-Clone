import React, { useContext, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import AsideMenu from '../components/AsideMenu'
import Navbar from '../components/Navbar'
import { notifyInfo } from '../components/Toastify'
import TrashNote from '../components/TrashNote'
import { AuxContext } from '../context/AppContext'

const Trash = () => {

  const { trashNotes, ListView, setTrashNotes  } = useContext(AuxContext)

  const empyTrash = () => {
    setTrashNotes([])
    notifyInfo('The trash has been cleaned')
  }

  return (
    <>
      <Navbar />
        <AsideMenu />
        <ToastContainer/>
      <main className='ps-3 pe-3 pt-5'>
      { trashNotes.length === 0 && <div className='emptyNotes'><div className='svgEmptyTrash opacity-75'></div><p className='text-light opacity-75'>No notes in trash</p></div> }
        <div className="d-flex align-items-center flex-column w-100 pt-5">
          {trashNotes.length != 0 && <button className="btn btn-secondary" onClick={empyTrash}>Empty Trash</button>}
          <div className={`${ListView ? 'container-fluid pe-0 ps-0 d-flex flex-column align-items-center pt-3 h-100 ' : 'containerNotes  pt-3'}`}>
            {
              trashNotes ?
                trashNotes.map((item) =>
                  <TrashNote
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    color={item.color}
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