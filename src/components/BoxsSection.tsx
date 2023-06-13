import React from 'react'
import styled from 'styled-components'

const BoxsSection = () => {
  return (
   <MainDiv>
    <div>
        <img src="/images/hands-gray.webp" alt="hands-white" />
        <h2>
            Become a Volunteer
        </h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, unde voluptas. Expedita eos, magni impedit corrupti quis aut. Error velit et voluptas corrupti.
        </p>
    </div>
    <div>
        <img src="/images/charity-gray.webp" alt="charity-white" />
        <h2>
            Online Conference
        </h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At vero, harum porro et corporis, itaque alias aperiam ex debitis laudantium commodi iusto accusantium non 
        </p>
    </div>
    <div>
        <img src="/images/donation-gray.webp" alt="donation-white.webp"/>
        <h2>
           Dance & Music
        </h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto ut fugiat voluptas nam temporibus modi labore ipsa commodi pariatur eos cumque voluptatibus.
        </p>
    </div>
   </MainDiv>
  )
}


const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin:5rem 0 2rem 0 ;
    div{
        padding: 2rem 2rem 2rem 2rem;
        background-color: #ecf2f5;
        width:300px;
        text-align: center;
        border-radius: 2rem;
        h2{
            font-weight: 600;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        p{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: grey;
        }
    }
    @media screen and (max-width:800px){
        flex-direction:column;
        align-items: center;
        margin: 2rem 2rem;
    }
`

export default BoxsSection