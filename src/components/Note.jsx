import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { AiFillDelete } from 'react-icons/ai'
import { MdEdit } from 'react-icons/md'
import { BsPin } from 'react-icons/bs'
import { BsPinFill } from 'react-icons/bs'
import { AuxContext } from '../context/AppContext'
import { notifyInfo } from './Toastify'

const Note = (props) => {

  const { setTrashNotes, trashNotes, notes, setNotes, ListView, setShowEditForm, setNoteToEdit } = useContext(AuxContext)

  const deleteNote = () => {
    const deletedNote = notes.filter((item) => item.id === props.id)
    setTrashNotes([...deletedNote, ...trashNotes])
    let nonDeletedNotes = notes.filter((item) => item.id !== props.id)
    setNotes(nonDeletedNotes)
    notifyInfo('Note moved to trash')
  }
const handleEditNote = () => {
setShowEditForm(true)
let noteToEdit = notes.filter((item) => item.id === props.id)
setNoteToEdit(...noteToEdit)
}
const handlePinNote =() => {

let noteToPin = notes.filter((item) => item.id === props.id)

 let updatedNotes = notes.map((item) => {
  if(item.id === noteToPin[0].id ){
    item.isPinned = !(noteToPin[0].isPinned);
      return item
  }
  else{
      return item
  }
})

setNotes(updatedNotes)

}




  return (
    <StyledNote color={props.color}  ListView={ListView} className="note col-12" id={props.id}>
      <div className="row">
        <div className="col-10">
        <span className='noteTitle'>{props.title}</span>
        </div>
        <div className="col-2 p-0 d-flex justify-content-center align-items-center">
        { props.isPinned &&<BsPinFill color='#fff' size={'1.2rem'}  className="pinToggle" onClick={handlePinNote}/> }
        { !props.isPinned && <BsPin color='#fff' size={'1.2rem'} className='pinToggle' onClick={handlePinNote}/>}
        </div>
        </div>
      <span className='noteText'>{props.text}</span>
      <div className="toolsBar d-flex justify-content-end align-items-center gap-2 pt-2">
        <MdEdit color="#fff" size="1.2rem" onClick={handleEditNote}/>
        <AiFillDelete color='#fff' size={'1.2rem'} onClick={deleteNote} title="Delete"/>
      </div>
    </StyledNote>
  )
}
const StyledNote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${props => props.color ? props.color : null};
  border-radius: 8px;
  padding: 14px;
  border: 1px solid ${props => props.color !== '#202124' ? props.color : '#5f6368'};
  margin-bottom: 1rem;
  width: min(100%, 600px);
  white-space: pre-line;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  

.noteTitle{
  color:#E8EAED;
  font-weight: bold;
  width: 100%;
  min-height: 40px;
  max-height: 100px;
  overflow-y: scroll;
  font-size: 1.2rem;
}
.pinToggle{
  opacity: 0;
  cursor: pointer;
  transition: all .3s ease;
  min-width: 20px;
}
.pinToggleActive{
  cursor: pointer;
  
}
.noteText{
  color: #E8EAED;
  width: 100%;
  margin-top: 5px;
  max-height: 500px;
  overflow-y: scroll;
}
.noteTitle, .noteText{
  &::-webkit-scrollbar{
        width: 6px;
        }
  &::-webkit-scrollbar-thumb{
        background-color: transparent;

        }
  &::-webkit-scrollbar-track{
        display: none;
        }
        
  &:hover{
    &::-webkit-scrollbar-thumb{
        background-color: #5f6368;

        }
  }

}
button{
  background-color: transparent;
        color: #fff;
        border: none;
        font-weight: bold;
}
@media (hover: hover){
  &:hover{
    .pinToggle{
      opacity:1;
    }
  }
  .toolsBar{
  opacity: 0;
  transition: all .3s ease;
  > * {
  cursor: pointer;

  }
}
&:hover{
    .toolsBar{
      opacity: 1;
    }
  }
  }

`

export default Note