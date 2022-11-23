import React, { createContext, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const AuxContext = createContext()

const AppContext = ({ children }) => {

  const currentUserLocation = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [notes, setNotes] = useState([])
  const [trashNotes, setTrashNotes] = useState([])
  const [colorNote, setColorNote] = useState('')
  const [ListView, setListView] = useState(false)


  return (
    <AuxContext.Provider value={{
      showMenu,
      setShowMenu,
      currentUserLocation,
      notes,
      setNotes,
      colorNote,
      setColorNote,
      trashNotes,
      setTrashNotes,
      ListView, 
      setListView,
    }}>
      {children}
    </AuxContext.Provider>
  )
}
export default AppContext