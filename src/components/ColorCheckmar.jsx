import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { AuxContext } from '../context/AppContext'


const ColorCheckmar = (props) => {

    const { setColorNote, colorNote } = useContext(AuxContext)

    //This functions allows to leave only one checkbox marked
    const handleCbxChange = (e) => {
        const cbx = document.querySelectorAll('.cbx-color')
        for (let i = 0; i < cbx.length; i++) {
            cbx[i].checked = false;
        }
        e.target.checked = true;

        setColorNote(e.target.id)

    }


    return (
        <StyledLabel htmlFor={props.color} color={props.color} onChange={handleCbxChange} >
            <input type="checkbox" name="" className='cbx-color' id={props.color} defaultChecked={props.checked} />
            <div className="backgroundForm"></div>
            <div className="coloredCircle"></div>
        </StyledLabel>
    )
}
const StyledLabel = styled.label`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
.backgroundForm{
    position: absolute;
    left: 0; bottom: 0; top: 0;
    margin: auto;
    background-color: ${props => props.color};
    width: 0px;
    z-index: -1;
    height: 100%;
    transition: all .6s ease;
}
    input{
        appearance: none;
        visibility: hidden;
        display: none;
         flex-grow: 1;
         z-index: 1;
         position: relative;
        &:checked{
           ~ .coloredCircle{
                border: 2px solid white;
            }
            ~ .backgroundForm{
                width: 100%;
            }
        }
    }

    .coloredCircle{
        border-radius: 50%;
    width: 100%;
        aspect-ratio: 1;
    flex-grow: 1;

        cursor: pointer;
        border: 2px solid ${props => props.color === '#202124' ? '#303136' : props.color};
        background-color: ${props => props.color ? props.color : null}
    }
`

export default ColorCheckmar