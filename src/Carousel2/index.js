import React, { useState } from "react";

import { CarouselProvider } from "pure-react-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import Ocean from "../images/ocean.jpg";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  Card,
  ButtonContainer,
  SliderContainer,
  StyledSlide,
  StyledSlider,
  BackButton,
  NextButton,
  CardText,
  CardImage,
  CardButton,
  CardButtonBlue
} from "./styles";

const data = [
  {
    title: "Single Bed ",
    
    src: "https://p.rmjo.in/productSquare/u8c7uurw-500x500.jpg",
    amount:"249"
  },
  {
    title: "Shoe Rack Large",
    
    src:"https://p.rmjo.in/productSquare/yxvjrli3-500x500.jpg",
    amount:"189"
  },
  {
    title: "Microwave Solo",
    
    src:"https://p.rmjo.in/productSquare/c3tutctj-500x500.jpg",
    amount:"299"
  },
  {
    title: "Leather Sofa",
    
    src:"https://p.rmjo.in/productSquare/rdkbbjk9-500x500.jpg",
    amount:"659"
  },
  {
    title: "Miller Office Chair",
    
    src: "https://p.rmjo.in/productSquare/akv269ws-500x500.jpg",
    amount:"149"
  },
  
  {
    title: "Stuart Study Table",
    
    src: "https://p.rmjo.in/productSquare/txf0setg-500x500.jpg",
    amount:"149"
  },
  {
    title: "Mini Fridge",
    
    src:"https://p.rmjo.in/productSquare/j00gzjjf-500x500.jpg",
    amount:"499"
  },
  {
    title: "Washing Machine",
    
    src: "https://p.rmjo.in/productSquare/m6oo29aw-500x500.jpg",
    amount:"479"
  },
  {
    title: "MacBook Pro ",
    
    src:"https://p.rmjo.in/productSquare/g0ealw05-500x500.jpg",
    amount:"3049"
  },
  {
    title: "Google Pixe l2",
    
    src:"https://p.rmjo.in/productSquare/tmp99edr-500x500.jpg",
    amount:"1509"
  },
  {
    title: "Galaxy S20",
    
    src:"https://p.rmjo.in/productSquare/t0rotvxl-500x500.jpg",
    amount:"1419"
  },

  {
    title: "One Plus 7 Pro",
    
    src:"https://p.rmjo.in/productSquare/mxzy0xf9-500x500.jpg",
    amount:"1479"
  },

  {
    title: "One Plus",
    
    src:"https://p.rmjo.in/productSquare/lbf7407m-500x500.jpg",
    amount:"989"
  },

  {
    title: "Inverter AC",
    
    src:"https://p.rmjo.in/productSquare/u7mg4hes-500x500.jpg",
    amount:"1939"
  },

  {
    title: "Exercise Cycle",
    
    src:"https://p.rmjo.in/productSquare/42v0ixqu-500x500.jpg",
    amount:"999"
  },

  {
    title: "Samsung Galxy 10",
    
    src:"https://p.rmjo.in/productSquare/fhonufah-500x500.jpg",
    amount:"1979"
  },

  {
    title: "Redmi K20 pro",
    
    src:"https://p.rmjo.in/productSquare/c601su0m-500x500.jpg",
    amount:"829"
  },

  {
    title: "Foldable Treadmill",
    
    src:"https://p.rmjo.in/productSquare/bk7tbcu2-500x500.jpg",
    amount:"2159"
  },

  {
    title: "One Plus 7T",
    
    src:"https://p.rmjo.in/productSquare/d0ecgei2-500x500.jpg",
    amount:"1159"
  },

  {
    title: "Fridge",
    
    src:"https://p.rmjo.in/productSquare/t1omg9mj-500x500.jpg",
    amount:"719"
  },

  {
    title: "Top Load",
    
    src:"https://p.rmjo.in/productSquare/7ng9dzt2-500x500.jpg",
    amount:"769"
  },

  {
    title: "Air Conditioner",
    
    src:"https://p.rmjo.in/productSquare/l6xann5r-500x500.jpg",
    amount:"1859"
  },

  {
    title: "Air Conditioner 1.5",
    
    src:"https://p.rmjo.in/productSquare/05gpq2h8-500x500.jpg",
    amount:"2269"
  },

  {
    title: "One Plus 7T",
    
    src:"https://p.rmjo.in/productSquare/05gpq2h8-500x500.jpg",
    amount:"1639"
  },

  {
    title: "Treadmill",
    
    src:"https://p.rmjo.in/productSquare/zo83l86x-500x500.jpg",
    amount:"2359"
  },

  {
    title: "Treadmill",
    
    src:"https://p.rmjo.in/productSquare/04s9a186-500x500.jpg",
    amount:"2359"
  },


];

const CardCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={10}
      naturalSlideHeight={10}
      totalSlides={data.length}
      visibleSlides={4}
      step={1}
    >
      <div classname="cor2upperdiv"style={{display:"flex" }}>
        <div class="rm-main-head">
          You'll love to
          <span style={{borderBottom:"3px solid red"}}>take <span style={{borderBottom:"4px solid white"}}>these home</span></span>
        </div>
        <div>
          <ButtonContainer style ={{ position:"relative", left:"900px"}}>
            <BackButton>
              <FiChevronLeft size="1.5em" />
            </BackButton>
            <NextButton>
              <FiChevronRight size="1.5em" />
            </NextButton>
          </ButtonContainer>
        </div>
      </div>
      
      <SliderContainer>
        <StyledSlider classNameAnimation="animating">
          {data.map((item, index) => (
            <StyledSlide
              index={index}
              classNameHidden="hidden"
              classNameVisible="visible"
            >
              <Card >
                <CardImage backgroundImage={item.src} />
                <CardText>
                  <h2>{item.title}</h2>
                  <div className="ratetxtcar2">
                    <div>
                      <p style={{color:"gray"}}>rent</p>
                      <p>{`???${item.amount}/mo`}</p>
                    </div>
                    <div className="seemorediv">
                        See More
                    </div>
                  </div>
                </CardText>
                <CardButton />
                <CardButtonBlue />
              </Card>
            </StyledSlide>
          ))}
        </StyledSlider>
      </SliderContainer>
    </CarouselProvider>
  );
};

export default CardCarousel;
