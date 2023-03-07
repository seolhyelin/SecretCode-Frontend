import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const TOTAL_SLIDES = 3;
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const [images, setImages] = useState([
    "/img/movies/movie-1.jpg",
    "/img/movies/movie-2.jpg",
    "/img/movies/movie-3.jpg",
    "/img/movies/movie-4.jpg",
  ]);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "transform 0.5s ease-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <>
      <label for="overflow">
        carousel <b>overflow: hidden</b>
      </label>
      <input type="checkbox" id="overflow" checked />

      <h1 class="title">Carousel Slider</h1>
      <Carousel>
        <CarouselSlides ref={slideRef}>
          {images.map((img, index) => {
            return <img key={img[index]} alt="img" src={images[index]} />;
          })}
        </CarouselSlides>
        <button onClick={prevSlide} class="carousel-control prev">
          &laquo;
        </button>
        <button onClick={nextSlide} class="carousel-control next">
          &raquo;
        </button>
      </Carousel>
    </>
  );
}

const Carousel = styled.div`
  position: relative;
  width: 340px;
  height: 390px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid red;
`;

const CarouselSlides = styled.div`
  display: flex;

  img {
    object-fit: contain;
    flex: none;
  }
`;
export default App;
