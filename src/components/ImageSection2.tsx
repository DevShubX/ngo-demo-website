import React from 'react'
import styled from 'styled-components'

const ImageSection2 = () => {
  return (
    <MainDiv>
        <div>
            <img src="/images/ngo-child-image.jpg" alt="child-image" />
        </div>
        <div className='content'>
            <h2>
                Child Education
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia rerum ex quis distinctio doloremque commodi unde aut, nisi, molestiae beatae, excepturi eligendi. Rerum corporis reprehenderit esse quaerat molestias, possimus quos.
            </p>
            <button>
                Donate Now
            </button>
        </div>
    </MainDiv>
  )
}

const MainDiv = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    margin: 5rem 0 5rem 0;
    img{
        object-fit: cover;
        height: 400px;
        @media screen and (max-width:1500px){
            height:300px;
        }
        @media screen and (max-width:600px){
            height: 250px;
        }
    }
    .content{
        padding: 0 2rem 0 2rem ;
        background-color: #e79660;
        height: 400px;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        h2{
            font-size: 2rem;
        }
        p{
            max-width: 500px;
        }
        button{
            margin-top: 3rem;
            border: none;
            background-color: black;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 1rem;
        }
        @media screen and (max-width:1500px){
            height: 300px;
        }
        @media screen and (max-width:600px){
            button{
                margin: 1rem 0 0 0;
            }
        }
    }
    @media screen and (max-width:1500px){
        flex-direction: column;
        align-items: center;
        margin: 5rem 0 2rem 0;
    }
    @media screen and (max-width:600px){
        margin: 5rem 2rem 5rem 2rem;
    }

`

export default ImageSection2