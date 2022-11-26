import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import gkeep_logo from '../img/gkeep_logo.png'
import { TbLayoutDistributeHorizontal } from 'react-icons/tb';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { AuxContext } from '../context/AppContext';
import { AiFillLayout } from 'react-icons/ai'

const Navbar = () => {

    const { showMenu, setShowMenu, ListView, setListView, setNoteSearch, notes, noteSearch, setFilterNotes, currentUserLocation } = useContext(AuxContext)

    const handleChange = ({ target: { value } }) => {
        setNoteSearch(value.toLowerCase())
    }
    useEffect(() => {
        if(!noteSearch) return;
        let aux = notes.filter((item) => item.title.toLowerCase().match(noteSearch) || item.text.toLowerCase().match(noteSearch))
        setFilterNotes(aux)
    }, [noteSearch])

    return (
        <StyledNavbar>
            <div className="d-flex flex-row align-items-center col-auto col-lg-2">
                <FiMenu color='#fff' size={'1.5rem'} className="me-3" onClick={()=> setShowMenu(!showMenu)} style={{ cursor: 'pointer' }} />
                <img src={gkeep_logo} width={'40'} className="me-2" />
                <span style={{ fontSize: '22px', color: 'rgba(255,255,255,0.87)' }} className="d-none d-md-block">Keep</span>
            </div>
            {currentUserLocation.pathname !== '/trash' && <input type="search" placeholder='Search' className='col-7 col-lg-6' onChange={handleChange}/>}
            <div className="d-flex flex-row align-items-center justify-content-end col-auto col-lg-4 gap-4 d-none d-md-flex">
                {
                    ListView ?
                        <AiFillLayout color='#fff' size={'1.5rem'} onClick={() => setListView(!ListView)} style={{cursor:'pointer'}}/>
                        :
                        <TbLayoutDistributeHorizontal color='#fff' size={'1.5rem'} onClick={() => setListView(!ListView)} style={{cursor:'pointer'}}/>
                }
            </div>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav`
height: 64px;
padding: 8px 24px;
box-shadow: inset 0 -1px 0 0 #5f6368;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
width: 100%;
z-index: 3;
background-color: #202124;

input{
    background-color: #525355;
    border: none;
    outline: none;
    padding: 11px 20px;
    border-radius: 8px;
    transition: all .3s ease;
    &::placeholder{
        color: #fff;
    }
    &:not(:placeholder-shown){
        background-color: #fff;
        color: #525355;
    }
    &:focus{
        background-color: #fff;
        @media screen and (max-width: 768px){
            width: 95%;
            left: 0;
            right: 0;
            margin: auto;
         position: absolute;
        }

        &::placeholder{
            color: #525355;
        }
        color: #525355;
    }
}
`

export default Navbar