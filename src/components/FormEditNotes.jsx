import React, { useContext } from 'react'
import styled from 'styled-components'
import { AuxContext } from '../context/AppContext'
import ColorCheckmar from './ColorCheckmar'
import { notifyError } from './Toastify'


const FormEditNotes = () => {

    const colors = ['#5C2B29', '#614A19', '#635D19', '#345920', '#16504B', '#2D555E', '#1E3A5F', '#42275E', '#5B2245', '#442F19', '#3C3F43', '#202124'] 

    const { noteToEdit, setShowEditForm, notes, colorNote, setColorNote, setNotes } = useContext(AuxContext)

    const editNote = () => {

        let titleNote = document.getElementById('inputTitle').value;
        let textNote = document.getElementById('inputNote').innerText;
        if(!textNote && !titleNote) {
            notifyError("Notes can't be empty")
            return
        }

        let updatedNotes =  notes.map((item) => {
            if(item.id === noteToEdit.id){
                item.title =titleNote;
                item.text = textNote;
                item.color = colorNote;
                return item
            }
            else{
                return item
            }
        })
        setNotes(updatedNotes)
        setShowEditForm(false)
        setColorNote('#202124')

    }

  return (
    <StyledFormEditNotes>
        <input id='inputTitle' type="text" name='title'  placeholder='Title' autoComplete='false' spellCheck='false' defaultValue={noteToEdit.title}/>
            <div id='inputNote' className='textarea' contentEditable='plaintext-only' placeholder='Create a note...' name='note' spellCheck='false' suppressContentEditableWarning={true}>
                { noteToEdit.text }
            </div>
            <div className="row w-100 m-0">
                <div className="d-flex gap-1 gap-md-2  col-12 col-md-8 " >
                {
                colors.map((color) => {
                    if(color === noteToEdit.color){
                        return <ColorCheckmar key={color}   color={color} checked={true}/>
                    }else{
                        return <ColorCheckmar key={color}   color={color}/>
                    }
                } 
                )}
                </div>
            <button className='col-auto col-md-2' onClick={editNote}>Edit</button>
            <button className='col-auto col-md-2' onClick={() => setShowEditForm(false)}>Close</button>
            </div>
    </StyledFormEditNotes>
  )
}
const StyledFormEditNotes = styled.div`
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 60%), 0 2px 6px 2px rgb(0 0 0 / 30%);
    width: min(94%, 600px);
    border-radius: 8px;  background-color: #202124;
    border: 1px solid #5f6368;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px;
    display : flex;
    flex-direction: column;
    justify-content: stretch;
    z-index: 4;


    input, .textarea{
        width: 100%;
        background-color: transparent;
        color: rgba(255,255,255,0.702);
        border: none;
        outline: none;
        min-height: 50px;
        padding: 8px 12px;
        flex-grow: 1;
        &::placeholder{
        color: rgba(255,255,255,0.702);
        font-weight: bold;
        }
    }
    .textarea{
        overflow-y: scroll;
        flex-grow: 1;
        max-height: 500px;

        &::-webkit-scrollbar{
            width: 6px;
        }

        &::-webkit-scrollbar-thumb{
background-color: #5f6368;
        }
        &::-webkit-scrollbar-track{
            display: none;
        }
        
        &:empty::before{
            content: attr(placeholder);
            font-weight: bold;
        }
    }
    button{
        background-color: transparent;
        color: rgba(255,255,255,0.702);
        border: none;
        font-weight: bold;
        padding: 12px 12px;
    }
`

export default FormEditNotes