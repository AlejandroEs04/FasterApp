'use client'
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

const imagen = "https://res.cloudinary.com/dmap6p5wl/image/upload/v1695306644/PRODUCTO_mwvixi.png"

const SliderContainer = () => {
  return (
    <HeroSlider
      height={'45vh'}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 100,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >  
      <Slide 
        background={{
          backgroundImageSrc: imagen
        }}
      />
    </HeroSlider>
  )
}

export default SliderContainer
