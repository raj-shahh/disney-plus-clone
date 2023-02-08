import React from 'react'
import styled from 'styled-components'
import marvelImage from '../../images/viewers-marvel.png'
import ngImage from '../../images/viewers-national.png'
import disImage from '../../images/viewers-disney.png'
import swImage from '../../images/viewers-starwars.png'
import pixImage from '../../images/viewers-pixar.png'
import marvelVideo from '../../videos/1564676115-marvel.mp4'
import ngVideo from '../../videos/1564676296-national-geographic.mp4'
import disVideo from '../../videos/1564674844-disney.mp4'
import swVideo from '../../videos/1608229455-star-wars.mp4'
import pixVideo from '../../videos/1564676714-pixar.mp4'

import { useState } from 'react'






function Viewerpanel() {



    const [marVid, setMarvVid] = useState(false);
    const [ngVid, setNgVid] = useState(false);
    const [disVid, setDisVid] = useState(false);
    const [swVid, setSwVid] = useState(false);
    const [pixVid, setPixVid] = useState(false);

    return (
        <PanelContainer>


            <Card id='pix' onMouseEnter={()=>setPixVid(true)} onMouseLeave={()=>setPixVid(false)} >

                {
                    pixVid && (<video autoPlay>
                        
                        <source src={pixVideo} type='video/mp4'/>
                    </video>
                )}
                <img src={pixImage} alt='' />
            </Card>

            <Card id='marvel' onMouseEnter={()=>setMarvVid(true)} onMouseLeave={()=>setMarvVid(false)} >
                
            {
                    marVid && (<video autoPlay>
                        
                        <source src={marvelVideo} type='video/mp4'/>
                    </video>
                )}
                
                <img src={marvelImage} alt="" />
            </Card>

            <Card id='disney' onMouseEnter={()=>setDisVid(true)} onMouseLeave={()=>setDisVid(false)} >
                
            {
                    disVid && (<video autoPlay>
                        
                        <source src={disVideo} type='video/mp4'/>
                    </video>
                )}

                <img src={disImage} alt="" />
            </Card>

            <Card id='sw' onMouseEnter={()=>setSwVid(true)} onMouseLeave={()=>setSwVid(false)} >
                
            {
                    swVid && (<video autoPlay>
                        
                        <source src={swVideo} type='video/mp4'/>
                    </video>
                )}
                <img src={swImage} alt="" />
            </Card>

            <Card id='ng' onMouseEnter={()=>setNgVid(true)} onMouseLeave={()=>setNgVid(false)} >
                
            {
                    ngVid && (<video autoPlay>
                        
                        <source src={ngVideo} type='video/mp4'/>
                    </video>
                )}
                <img src={ngImage} alt="" />
            </Card>

        </PanelContainer>
    )
}

const Card = styled.div`

    background: #1b1d26;
    border: 3px transparent;
    border-radius: 10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    box-shadow: rgb(1, 8, 15) 0px 20px 30px -10px;
    overflow: hidden;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: 1;
        
    }

    video{
        object-fit: cover;
        width:100% !important;
        height:100% !important;
        z-index: -1;
        border-radius: 6px;
        position: absolute;
    }

    &:hover{
        border: none;
        transform: scale(1.10);
    }

`

const PanelContainer = styled.div`

    color: white;
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid; 
    grid-template-columns: repeat(5, minmax(0, 1fr)); 
    grid-gap : 25px ;
    width: 100%;

    #marvel{
        &:hover{
        
        }
    }


    
`

export default Viewerpanel