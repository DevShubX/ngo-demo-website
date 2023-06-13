import React from 'react'
import styled from 'styled-components'

const ImageSection1 = () => {
  return (
    <MainDiv>
        <img src="/images/hero-image.webp" alt="heroimage" />
        <div className='content-box'>
            <div className='inner-div'>
                <h1>
                    Donate
                </h1>
                <h2>
                    4 a better world
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus aut fugit dignissimos? Possimus, illum totam placeat impedit error exercitationem ullam voluptates nobis autem repellendus consectetur ducimus quis? Saepe, nobis perspiciatis.
                </p>
                <div className='btn-div'>
                    <button className='donate'>
                        Donate Now
                    </button>
                    <button className='read'>
                        Read More
                    </button>
                </div> 
            </div>
        </div>
    </MainDiv>
  )
}

const MainDiv = styled.div`
    margin: 2rem 0 0 0;
    position: relative;
    img{
        height: 500px;
        width: 100vw;
        object-fit: cover;
    }
    .content-box{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        color: white;
        background: #0000007d;
        h1{
            margin: 2rem 0 0 0;
            font-size: 5rem;
            @media screen and (max-width:700px){
                margin: 0;
                font-size:3rem;
            }
        }
        h2{
            margin: 0 0 1rem 0;
            font-size: 3rem;
            @media screen and (max-width:700px){
                font-size:2rem;
            }
        }
        .inner-div{
            position: absolute;
            top: 20px;
            left: 70px;
            width: 50%;
            @media screen and (max-width:700px){
                top: 10px;
                left: 30px;
                width: 70%;
            }
        }
        
    }
    .btn-div{
        display: flex;
        gap: 1.5rem;
        margin: 2rem 0 0 0;
        @media screen and (max-width:700px){
            gap: 1rem;
        }
    }
    .donate{
        background-color: rgba(1255,90,0,1);
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 5rem;
        font-size: 1rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        @media screen and (max-width:700px){
            font-size: 0.8rem;
            padding: 0.2rem 2rem;
            border-radius: 2rem;
        }
    }
    .read{
        background-color: transparent;
        border: 1px solid rgba(1255,90,0,1);
        color: white; padding: 1rem 2rem;
        border-radius: 5rem;
        font-size: 1rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    }
    @media screen and (max-width:700px){

    }
`

export default ImageSection1