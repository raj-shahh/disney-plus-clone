import React from 'react'
import styled from 'styled-components'
import rec1 from '../../images/rec1.webp'
import rec2 from '../../images/rec2.png'
import rec3 from '../../images/rec3.png'
import rec4 from '../../images/rec4.png'
import rec5 from '../../images/rec5.png'
// import tr1 from ''
// import tr2 from '' 
// import tr3 from '' 
// import tr4 from '' 
// import tr5 from ''  



function Movies() {

    function Box({ image}) {

        return (
            <Card >
                
                    <img src={image} alt="tp" />
                
               

            </Card>
        )

    }

  return (
    <MovieContainer>

        <h4 style={{marginTop:"0px"}}>Recommended For You</h4>
        <section style={{display:"grid",gridTemplateColumns:"repeat(5, minmax(0,1fr))",gridGap:"25px",marginBottom:"20px"}}>
            
            <Box image={rec1}/>
            <Box image={rec2}/>
            <Box image={rec3}/>
            <Box image={rec4}/>
            <Box image={rec5}/>
        </section>
        

        
        <h4>Trending Now</h4>
        <section style={{display:"grid",gridTemplateColumns:"repeat(5, minmax(0,1fr))",gridGap:"25px",marginBottom:"20px"}}>

            
            
            
            <Box image={ 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5243/1455243-v-c7c8070be2ee' }/>
            <Box image={'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4452/1444452-v-aff8aea93f8e'}/>
            <Box image={'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5420/1445420-v-50e5c9e5afc8'}/>
            <Box image={'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8727/1448727-v-984e086fc891'}/>
            <Box image={'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6497/1446497-v-ffb21d244133'}/>
        </section>
        

        <h4>All Time Picks</h4>
        <section style={{display:"grid",gridTemplateColumns:"repeat(5, minmax(0,1fr))",gridGap:"25px",marginBottom:"20px"}}>
            
            <Box image={'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1514/1161514-v-8c2341c419fd'}/>
            <Box image={'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/928/1360928-v-b808273e5b54'}/>
            <Box image={'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4293/754293-v'}/>
            <Box image={'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v'}/>
            <Box image={'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9157/1429157-v-c0a5806446c1'}/>
        </section>
        
    </MovieContainer>
  )
}

const MovieContainer = styled.div`

    color: white;
    margin-top: 0px;
    padding: 30px 0 26px;
    width: 100%;


    
`

const Card = styled.div`

    background: transparent;
    width: calc( 100vw/6 );
    border-radius: 10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    box-shadow: rgb(1, 8, 15) 0px 20px 30px -10px;
    overflow: hidden;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        
    }

    &:hover{
        
        transform: scale(1.10);
        
    }

`


export default Movies