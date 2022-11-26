import React, { useContext } from 'react'
import styled from 'styled-components'
import { AiOutlineBulb } from 'react-icons/ai'
import { RiDeleteBin7Line } from 'react-icons/ri';
import { AuxContext } from '../context/AppContext';
import { Link  } from 'react-router-dom';


const AsideMenu = () => {
    
    const { showMenu, currentUserLocation, setShowMenu } = useContext(AuxContext)



  return (
    <StyledAsideMenu showMenu={showMenu} className={` shadow`}>
          <Link to={'/'} onClick={() => setShowMenu(false)}>
        <div className='menuAsideLinks'>
          { currentUserLocation.pathname === '/' && <div className='currentLink'></div>}
        <AiOutlineBulb color='#fff' size={'1.5rem'} className={`asideLinks`}  />
        <span>Notes</span>
        </div>
          </Link>
          <Link to={'/trash'} onClick={() => setShowMenu(false)}>
        <div className='menuAsideLinks'>
        { currentUserLocation.pathname === '/trash' && <div className='currentLink'></div>}
        <RiDeleteBin7Line color='#fff' size={'1.5rem'} className={`asideLinks`}  />
        <span>Trash</span>
        </div>
          </Link>
    </StyledAsideMenu>

  )
}

const StyledAsideMenu = styled.aside`
transition: all .05s ease;
height: calc(100vh - 64px);
background-color: #202124;
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
overflow: hidden;
width: ${props => props.showMenu ? '230px' : '72px;'};
z-index: 2;
padding-top: 10px;
@media screen and (max-width: 768px){
  display: ${props => props.showMenu ? 'flex' : 'none'};
  position: absolute;
}
a{
  text-decoration:none;
  position: relative;
}
.menuAsideLinks{
display: flex;
justify-content: start;
align-items: center;
flex-wrap: nowrap;
margin: 15px 0px 15px 0;


.asideLinks{
    width: 72px;
    flex-shrink: 0;
    z-index: 1;
}
span{
    flex-shrink: 0;
    width: 200px;
    color: #fff;
    z-index: 1;

}
}
.currentLink{
  position: relative;
    border-radius: ${props => props.showMenu ? '0px 30px 30px 0px' : '50%'};
    background-color: #41331C;
    width: ${props => props.showMenu ? '100%' : '50px'};
    inset: 0 0 0 0;
    margin: auto;
    aspect-ratio: ${props => props.showMenu ? '' : '1'};
    position: absolute;
}

`

export default AsideMenu