import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Heading, Box } from '@chakra-ui/react';
import pic1 from '../Slides/picimg1.jpg'
import pic2 from '../Slides/picimg2.jpg'
import pic3 from '../Slides/picimg3.jpg'
import pic4 from '../Slides/picimg4.jpg'
import pic5 from '../Slides/picimg5.jpeg'

function CarouselComponent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 445,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
   
        ],
      };
  return (
    <Box p={2} shadow={'md'} mb="8px">
      <Heading as='h2' p={4} textAlign={'left'} textTransform={'uppercase'}>Chakra Gallery</Heading>
      <Slider {...settings} className='slider_container'>
        <div>
          <img src={pic1} alt="Slide 1" style={{height:'200px', width:'400px'}} />
        </div>
        <div>
          <img src={pic2} alt="Slide 2" style={{height:'200px', width:'400px'}} />
        </div>
        <div>
          <img src={pic3} alt="Slide 3" style={{height:'200px', width:'400px'}} />
        </div>
        <div>
          <img src={pic4} alt="Slide 4" style={{height:'200px', width:'400px'}} />
        </div>
        <div>
          <img src={pic5} alt="Slide 5" style={{height:'200px', width:'400px'}} />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </Box>
  )
}

export default CarouselComponent