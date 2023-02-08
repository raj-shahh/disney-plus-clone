import image1 from '../../images/slider-badag.jpg'
import image2 from '../../images/slider-badging.jpg'
import image3 from '../../images/slider-scale.jpg'
import image4 from '../../images/slider-scales.jpg'
import styled from 'styled-components'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";





function Banner() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    appendDots: dots => (
      <div
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };




  return (
    <BannerContainer>
      <Slider {...settings}>
        <div><Img src={image2} alt=""/></div>
        <div><Img src={image1} alt="" /></div>
        <div><Img src={image3} alt=""/></div>
        <div><Img src={image4} alt=""/></div>
      </Slider>

    </BannerContainer>
  )
}

const BannerContainer = styled.div`
  
  margin-top: 10px;
  .slick-list {
    overflow: visible;
    
  }

  .slick-dots li button::before {
    color: white;
  }

    
`

const Img=styled.img`
  height:100%;
  width:100%;
  
  border:4px solid transparent;
  &:hover{
    border-radius: 4px;
    border: 4px solid white;
    cursor: pointer;
  }
  box-shadow: rgba(0, 0, 0, 0.863) 0px 5px 15px;


`


export default Banner