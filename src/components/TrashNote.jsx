import React, { useContext} from 'react'
import styled from 'styled-components'
import { IoReload } from 'react-icons/io5'
import { MdDeleteForever } from 'react-icons/md'
import { AuxContext } from '../context/AppContext'
import { notifyInfo, notifySucces } from './Toastify'

const TrashNote = (props) => {

  const { setTrashNotes, trashNotes, ListView, notes, setNotes } = useContext(AuxContext)


  const deletePermanently = () => {
    let nonDeletedNotes = trashNotes.filter((item) => item.id !== props.id)
    setTrashNotes(nonDeletedNotes)
  }
  const restoreNote = () => {
    const noteToRestore = trashNotes.find((item) => item.id === props.id)
    let aux = [noteToRestore, ...notes]
    setNotes(aux)
    deletePermanently();
    // notifyInfo('Note restored')
    notifySucces('Note restored')
  }


  return (
    <StyledNote color={props.color} ListView={ListView} className="note col-12">
      <span className='noteTitle'>{props.title}</span>
      <span className='noteText'>{props.text}</span>
      <div className="toolsBar d-flex justify-content-end gap-2">
        <MdDeleteForever color="#fff" size="1.2rem" onClick={deletePermanently} title="Delete forever"/>
        <IoReload color='#fff' size={'1.2rem'} title="Restore note" onClick={restoreNote} />
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