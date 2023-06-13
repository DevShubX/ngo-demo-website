import React from 'react'
import styled from 'styled-components'
import {BsFillPinMapFill, BsTelephoneFill} from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
const Footer = () => {
  return (
    <MainDiv>
        {/* <img src="/images/footer-image.jpg" alt="" className='background-image'/> */}
        <div className='outer-div'>
            <div className='inner-div'>
                <div className='section-1'>
                    <div className='logo'>
                        <img src="/images/logo-ngo.png" alt="" /><span>Kshitiksha Foundation</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla ipsa est quidem! Hic aut ut, natus animi adipisci placeat numquam repellendus quasi aperiam fuga cum iusto necessitatibus atque et!
                    </p>
                </div>
                <div className='section-2'>
                    <h2>
                        Useful Links
                    </h2>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Causes</p>
                    <p>Gallery</p>
                    <p>News</p>
                    <p>Contact</p>
                </div>
                <div className='section-3'>
                    <h2>
                        Latest News
                    </h2>
                    <p>
                        A new cause to help
                    </p>
                    <div>
                        March 12,2023
                    </div>
                    <p>
                        We love to help people
                    </p>
                    <div>
                        March 19,2023
                    </div>
                </div>
                <div className='section-4'>
                    <h2>
                        Contact
                    </h2>
                    <div>
                        <BsTelephoneFill className='icon'/> +45 67009024 23
                    </div>
                    <div>
                        <AiOutlineMail className='icon'/> office@ngo.com
                    </div>
                    <div>
                        <BsFillPinMapFill className='icon'/> Main Str. no 45-46, b3, <br/> 56832, CA
                    </div>
                </div>
            </div>
        </div>
       
    </MainDiv>
  )
}

const MainDiv = styled.div`
    position: relative;
    margin: 3rem 0 0 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* .background-image{
        width: 100%;
        height: 100vh;
    } */
    .outer-div{
        top: 0;
        left: 0;
        width: 100%;
        position: absolute;
        background-color: #000000ce;
    }
    .inner-div{
        color : white;
        position: relative;
        display: flex;
        justify-content: space-around;
        padding: 0 0 3rem 0;
        @media screen and (max-width:1200px){
            display: grid;
            grid-template-columns: repeat(auto-fill,400px);
        }
    }
    .section-1{
        margin: 2rem 0 0 5rem;
        
        .logo{
            display: flex;
            align-items: center;
            font-size: 1.5rem;
            margin: 0 0 2rem 0;
            img{
                width: 100px;
            }
        }
        p{
            max-width: 300px;
            color: #dfdede;
        }
    }
    .section-2{
        margin: 3rem 0 0 0;
        p{
            color: #dfdede;
        }
    }
    .section-3{
        margin: 3rem 0 0 0;
        p{
            color: #dfdede;  
        }
        div{
            margin: 0 0 2rem 0;
            color: #ff5a00;
        }
    }
    .section-4{
        margin: 3rem 0 0 0;
        font-size: 1.2rem;
        .icon{
            color: #ff5a00;
            margin: 0 0.5rem 0 0;
        }
        div{
            margin: 2rem 0 0 0;
            display: flex;
            align-items: center;
            color: #dfdede;  
        }
    }
`

export default Footer