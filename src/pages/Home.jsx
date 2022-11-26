import React, { useContext } from 'react'
import AsideMenu from '../components/AsideMenu'
import Navbar from '../components/Navbar'
import FormNotes from '../components/FormNotes'
import { AuxContext } from '../context/AppContext'
import Note from '../components/Note'
import { ToastContainer } from 'react-toastify';
import FormEditNotes from '../components/FormEditNotes'
import ContainerNotes from '../components/ContainerNotes'
import ContainerFilterNotes from '../components/ContainerFilterNotes'


const Home = () => {

  const { noteSearch, showEditForm, setShowEditForm } = useContext(AuxContext)


  return (
    <>
    <Navbar/>
    <AsideMenu/>
    <ToastContainer/>
    { showEditForm && <div className="editNoteContainer" onClick={() => setShowEditForm(false)}></div> }
    { showEditForm && <FormEditNotes/> }
    { noteSearch ? <ContainerFilterNotes/> :  <ContainerNotes/>}
  
    </>
)}

export default Home