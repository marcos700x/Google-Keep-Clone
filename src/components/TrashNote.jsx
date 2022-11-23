import React, { useContext} from 'react'
import styled from 'styled-components'
import { AiFillDelete } from 'react-icons/ai'
import { IoColorPalette } from 'react-icons/io5'
import { AuxContext } from '../context/AppContext'

const TrashNote = (props) => {

  const { setTrashNotes, trashNotes, ListView } = useContext(AuxContext)


  const deleteNote = () => {


    let nonDeletedNotes = trashNotes.filter((item) => item.id !== props.id)
    setTrashNotes(nonDeletedNotes)
  }


  return (
    <StyledNote color={props.color} ListView={ListView} className="note col-12">
      <span className='noteTitle'>{props.title}</span>
      <span className='noteText'>{props.text}</span>
      <div className="toolsBar d-flex justify-content-end gap-2">
        <IoColorPalette color="#fff" size="1.2rem"/>
        <AiFillDelete color='#fff' size={'1.2rem'} onClick={deleteNote}/>
      </div>
    </StyledNote>
  )
}
const StyledNote = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color ? props.color : null};
  border-radius: 8px;
  padding: 14px;
  border: 1px solid #5f6368;
  min-height: 100px;
  margin-bottom: 1rem;
  width: ${props => props.ListView ? 'min(100%, 600px)' : 'auto'};
  @media screen and (max-width: 768px){
    width: 100%;
  }
  word-break: break-all;
  white-space: pre-line;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;


.noteTitle{
  color:#E8EAED;
  font-weight: bold;
  width: 100%;
  max-height: 100px;
  overflow-y: scroll;
  font-size: 1.2rem;
  
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
        background-color: #5f6368;
        }
  &::-webkit-scrollbar-track{
        display: none;
        }
}
@media (hover: hover){
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

export default TrashNote