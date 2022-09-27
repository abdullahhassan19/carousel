import './App.css';
import React from "react";
import "./Carousel2/styles.css";
import CardCarousel from "./Carousel2/index";
import { CarouselContainer } from "./Carousel2/style";
function App() {
  return (
    <div>
      <CarouselContainer>
      <CardCarousel />
    </CarouselContainer>
    
    <div className='check'>

    Hello
    </div>
    </div>
  );
}

export default App;
