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
  const [loop, setLoop] = useState(null);

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
    slideRef.current.style.transform = `translate3D(-${currentSlide}00%,0,0)`;
  }, [currentSlide]);

  useEffect(() => {
    if (!images) {
      clearTimeout(loop);
    } else {
      const swiperLoop = setTimeout(() => {
        setCurrentSlide((prev) => {
          if (prev < images.length - 1) {
            return prev + 1;
          } else return 0;
        });
      }, 3000);
      setLoop(swiperLoop);
    }
    return clearTimeout(loop);
  }, [images, setCurrentSlide, currentSlide]);

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
  height: 190px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid red;

  .carousel-control {
    position: absolute;
    top: 50%;
    z-index: 1;
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }
`;

const CarouselSlides = styled.div`
  display: flex;

  img {
    object-fit: contain;
    flex: none;
  }
`;
export default App;
