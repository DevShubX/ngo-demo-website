import React from 'react'
import styled from 'styled-components'

const VolunteerSection = () => {
  return (
    <MainDiv>
        <Heading>
            BEST<span>VOLUNTEER</span>
        </Heading>
        <Container>
            <Card>
                <div>
                    <img src="/images/volunteer-1.png" alt="volunteer" />
                </div>
                <p className='name'>
                    JOHN DOE
                </p>
                <p className='subtitle'>
                    Volunteer
                </p>
            </Card>
           <Card>
                <div>
                    <img src="/images/volunteer-2.jpg" alt="volunteer" />
                </div>
                <p className='name'>
                    JOHN DOE
                </p>
                <p className='subtitle'>
                    Volunteer
                </p>
           </Card>
           <Card>
                <div>
                    <img src="/images/volunteer-3.webp" alt="volunteer" />
                </div>
                <p className='name'>
                    JOHN DOE
                </p>
                <p className='subtitle'>
                    Volunteer
                </p>
           </Card>
           <Card>
                 <div>
                    <img src="/images/volunteer-4.jpg" alt="volunteer" />
                </div>
                <p className='name'>
                    JOHN DOE
                </p>
                <p className='subtitle'>
                    Volunteer
                </p>
           </Card>
        </Container>
    </MainDiv>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 10rem;
    padding: 3rem 0 0 0 ;
    @media screen and (max-width:1300px){
        gap: 4rem;
    }
    @media screen and (max-width:800px){
        display: grid;
        grid-template-columns: repeat(auto-fill,150px);
    }

`

const Card = styled.div`
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    img{
        width: 200px;
        height: 210px;
        border-radius: 50%;
        object-fit: cover;
        @media screen and (max-width:1000px){
            width: 150px;
            height: 160px;
        }
    }
    .name{
        font-size: 1.3rem;
        font-weight:bold;
    }
    .subtitle{
        font-size: 1.2rem;
        font-weight: 400;
    }
`


const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size:3rem;
    gap: 0.5rem;
    font-weight: bold;
    span{
        color: orange;
    }
    @media screen and (max-width:600px){
        font-size: 2.5rem;
    }

`

const MainDiv = styled.div`
    margin: 3rem 0 0 0;
`


export default VolunteerSection