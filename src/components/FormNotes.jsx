import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AuxContext } from '../context/AppContext'
import ColorCheckmar from './ColorCheckmar'


const FormNotes = () => {

    const [showNoteForm, setShowNoteForm] = useState(false)
    const {setNotes, notes, colorNote, setColorNote} = useContext(AuxContext)
    const colors = ['#5C2B29', '#614A19', '#635D19', '#345920', '#16504B', '#2D555E', '#1E3A5F', '#42275E', '#5B2245', '#442F19', '#3C3F43', '#202124'] 


    const createNotes = () => {

        var title = document.getElementById('inputTitle').value;
        var text = document.getElementById('inputNote').innerText;
      const Note = {
        title: title,
        text: text,
        color: colorNote,
        id: crypto.randomUUID(),
      }
      if(Note.title === "" && Note.text === "") return;
      var aux = [Note, ...notes]
      setNotes(aux)

      document.getElementById('inputTitle').value = '';
      document.getElementById('inputNote').innerText = '';
      document.getElementById(colorNote).checked = false;
      document.getElementById('#202124').checked = true;
      setColorNote('#202124')

    }

    useEffect(() => {
         let localNotes = localStorage.getItem("notes")
        if(localNotes === "[]"){
            setNotes([{id: crypto.randomUUID(), title: 'Welcome', text: 'This app was made by Marcos', color: '#202124'}])
        }else{
            setNotes(JSON.parse(localNotes))
        }
    },[ ])
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])


    if(!showNoteForm)
    return (
        <StyledToggle onClick={() => setShowNoteForm(true)}>
            <span>Crear una nota</span>
        </StyledToggle>
    )
    if(showNoteForm)
    return(
        <StyledFormNotes color={colorNote}>
            <input id='inputTitle' type="text" name='title'  placeholder='Title' autoComplete='false' spellCheck='false'/>
            <div id='inputNote' className='textarea' contentEditable='plaintext-only' placeholder='Create a note...' name='note' spellCheck='false'></div>
            <div className="row w-100 m-0">
                <div className="d-flex col-12 col-md-8 gap-2" style={{justifyContent: 'stretch'}}>
                {
                colors.map((color) => {
                    if(color === '#202124'){
                        return <ColorCheckmar key={color}   color={color} checked={true}/>
                    }else{
                        return <ColorCheckmar key={color}   color={color}/>
                    }
                } 
                )}
                </div>
            <button className='col-auto col-md-2' onClick={createNotes}>Create</button>
            <button className='col-auto col-md-2' onClick={() =>  setShowNoteForm(false)}>Close</button>
            </div>
        </StyledFormNotes>
    )
}

const StyledToggle = styled.div`
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 60%), 0 2px 6px 2px rgb(0 0 0 / 30%);
    width: min(100%, 600px);
    border-radius: 8px;
    height: 46px;
    background-color: #202124;
    border: 1px solid #5f6368;
    overflow: hidden;
    position: relative;
    display: flex;
    cursor: text;
    align-items: center;

    span{
        color: rgba(255,255,255,0.702);
        letter-spacing: .00625em;
        font-size: 1rem;
    font-weight: 500;
    /* line-height: 1.5rem; */
    padding: 4px 16px ;
    }

`
const StyledFormNotes = styled.div`
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 60%), 0 2px 6px 2px rgb(0 0 0 / 30%);
    width: min(100%, 600px);
    border-radius: 8px;  background-color: #202124;
    border: 1px solid #5f6368;
    display: flex;
    flex-direction: column;
    min-height: 170px;
    overflow: hidden;
    position: relative;
    z-index: 1;


    input, .textarea{
        width: 100%;
        background-color: transparent;
        color: rgba(255,255,255,0.702);
        border: none;
        outline: none;
        padding: 8px 18px;
        flex-grow: 1;
        &::placeholder{
        color: rgba(255,255,255,0.702);
        font-weight: bold;
        }
    }
    .textarea{
        max-height: 500px;
        min-height: 50px;
        overflow-y: scroll;

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
        /* flex-grow: 1; */
        padding: 12px 12px;
    }
`

export default FormNotes