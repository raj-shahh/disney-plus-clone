import backgroundHome from '../../images/home-background.png'
import styled from 'styled-components'
import Banner from "../Banner/banner"
import React from 'react'
import ViewerPanel from '../ViewerPanel/viewerpanel.jsx'
import Movies from '../Movies/movies';





function Home() {


  return (

    <div>
    
    <HomeContainer>
      
        <Banner/>
        <ViewerPanel/>
        <Movies/>

    </HomeContainer>
    </div>
  )
}


const HomeContainer=styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  background: url(${backgroundHome}) center center / cover no-repeat fixed;
  overflow-x: hidden;
`
export default Home