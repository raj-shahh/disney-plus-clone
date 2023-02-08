import React from 'react'
import styled from 'styled-components'
import bgImage from '../../images/login-background.jpg'
import image1 from '../../images/cta-logo-one.svg'
import image2 from '../../images/cta-logo-two.png'
import { Link } from 'react-router-dom'


function Membership() {
  return (
    
    <LoginContainer>
        
        <img src={image1} alt="" />
        <Link to="/"><BtnStyle>GET ALL THERE</BtnStyle></Link>
        <p>Get Premier Access to Raya and The Last Dragon for an additonal fee with a Disney+ subscription</p>
        <p>As of 03/26/2023, the price of Disney+ and the Disney bundle will increase by $1</p>
        <img src={image2} alt="" />
    </LoginContainer>
  )
}


const LoginContainer=styled.div`


background: url(${bgImage}) center center / cover no-repeat fixed ;
color: white;
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


img{
    width: 60vw;
    margin: 10px;
}

p{
    margin: 0px;
    font-size: 10px;
    padding: 0;


}

`

const BtnStyle=styled.button`
    background: #1F7FDD;
    border-radius: 4px;
    border: solid #1F7FDD;
    color: white;
    width: 65vw;
    letter-spacing: 1.5px;
    font-size: medium;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`

export default Membership