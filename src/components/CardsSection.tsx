import React from 'react'
import styled from 'styled-components'

const CardsSection = () => {
  return (
    <MainDiv>
        <Heading>
            FEATURED<span>CAUSES</span>
        </Heading>
        <Container>
            <Card>
                <img src="/images/card-image-1.jpg" alt="child" />
                {/* <input type="range" value={50}/> */}
                <div>
                    <p>
                        Raised : $300,000
                    </p>
                    <p>
                        Goal : $800,000
                    </p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button>
                    Donate Now
                </button>
            </Card>
            <Card>
                <img src="/images/card-image-2.jpg" alt="child" />
                <div>
                    <p>
                        Raised : $500,000
                    </p>
                    <p>
                        Goal : $900,000
                    </p>
                </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    </p>
                <button>
                    Donate Now
                </button>
                
            </Card>
            <Card>
                <img src="/images/card-image-3.jpg" alt="child" />
                <div>
                    <p>
                        Raised : $400,000
                    </p>
                    <p>
                        Goal : $700,000
                    </p>
                </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                <button>
                    Donate Now
                </button>
            </Card>
        </Container>
    </MainDiv>
  )
}


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
const Card = styled.div`
    width: 300px;
    background-color: #f77e2d;
    color: white;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 0 0 2rem 0;
    border-radius: 0.5rem;
    img{
        width: 300px;
        height: 200px;
    }
    div{
        display: flex;
        justify-content: space-around;
        font-weight: 700;
        margin: 0 0.5rem 0 0.5rem;
    }
    button{
        margin: 2rem 0 0 0 ;
        border: none;
        background-color: black;
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        font-size:1rem;
        cursor: pointer;
    }
`

const Container = styled.div`
    display: flex;
    gap: 5%;
    justify-content: center;
    margin: 3rem 0 0 0 ;
    @media screen and (max-width:1000px){
        flex-direction: column;
        align-items:center;
        row-gap: 30px;
    }
`


const MainDiv = styled.div`
    margin: 2rem 0 2rem 0;
`

export default CardsSection