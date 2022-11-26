import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const AuxContext = createContext()

const AppContext = ({ children }) => {

  const [showMenu, setShowMenu] = useState(false);
  const [notes, setNotes] = useState([])
  const [trashNotes, setTrashNotes] = useState([])
  const [notePinned, setNotePinned] = useState(false)
  const [colorNote, setColorNote] = useState('#202124')
  const [ListView, setListView] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const [ noteToEdit, setNoteToEdit ] = useState({})
  const [ noteToPin, setNoteToPin ] = useState({})
  const [ noteSearch, setNoteSearch ] = useState('')
  const [ filterNotes, setFilterNotes ] = useState([])

  const currentUserLocation = useLocation();


  useEffect(() => {
    if(!JSON.parse(localStorage.getItem('trashNotes')) || JSON.parse(localStorage.getItem('trashNotes')).length === 0) return;
      let localTrashNotes = localStorage.getItem("trashNotes")
      setTrashNotes(JSON.parse(localTrashNotes))
  },[])

  useEffect(() => {
    if(!JSON.parse(localStorage.getItem('notes')) || JSON.parse(localStorage.getItem("notes")).length === 0) return;
    let localNotes = localStorage.getItem("notes")
       setNotes(JSON.parse(localNotes))
},[ ])
  
  useEffect(() => {
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes))
  }, [trashNotes])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
 }, [notes])




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
      showEditForm,
      setShowEditForm,
      noteToEdit, 
      setNoteToEdit,
      notePinned, 
      setNotePinned,
      noteToPin, 
      setNoteToPin,
      noteSearch, 
      setNoteSearch,
      filterNotes, 
      setFilterNotes
    }}>
      {children}
    </AuxContext.Provider>
  )
}
export default AppContext