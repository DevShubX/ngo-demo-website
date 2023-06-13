import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {BiMenuAltRight } from "react-icons/bi";
import {AiOutlineClose } from 'react-icons/ai';
import useWindowDimensions from '../hooks/useWindowDimensions';
const NavBar = () => {
    const {width} = useWindowDimensions();
    const [isActiveMenu,setActiveMenu] = useState(false);
  return (
    <MainDiv>
        <div className='icon-box'>
            <img src="images/logo-ngo.png" alt="logo" />
            <span>Kshitiksha Foundation</span>
        </div> 
        {width < 750 && (
            <button onClick={()=>setActiveMenu(!isActiveMenu)}>
                {!isActiveMenu ? <BiMenuAltRight/> : <AiOutlineClose/>}
            </button>
        )}
       {width > 750 && (
        <div className='desktop-menu-box'>
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Causes</a>
            <a href="#">Gallery</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
        </div>
       )}
       {width <750 && isActiveMenu &&(
         <div className='mobile-menu-box'>
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Causes</a>
            <a href="#">Gallery</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
        </div>
       )}
        
    </MainDiv>
  )
}

const MainDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem 0 0 0;
    .icon-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
    }
    .desktop-menu-box{
        display: flex;
        gap: 2rem;
        align-items: center;
        a{
            text-decoration: none;
            color: black;
            font-size: 1.2rem;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
    }
    button{
        background-color: white;
        border: none;
        font-size: 2.5rem;
    }
    .mobile-menu-box{
        z-index: 999;
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 0;
        left: 0;
        background-color: #eeac91;
        height: 100vh;
        width: 40%;
        padding: 2rem 0rem 2rem 2rem;
        a{           
            text-decoration: none;
            color: white;
            font-size: 1.2rem;
            margin: 1rem 0 0 0;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            :hover{
                color: #ff00008f;
            }
        }
    }
    @media screen and (max-width:750px){
        justify-content: space-between;
        margin: 1rem 2rem 1rem 2rem;
    }
`


export default NavBar