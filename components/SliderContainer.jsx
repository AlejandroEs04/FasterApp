'use client'
import HeroSlider, { Slide } from "hero-slider";

const imagen1 = "https://images.unsplash.com/photo-1591283261401-c76eba2d369a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
const imagen2 = "https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
const imagen3 = "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"

const SliderContainer = () => {
  return (
    <>
      <HeroSlider
        height={'55vh'}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 100,
          slidingDelay: 100,
        }}
      >  
        <Slide 
          background={{
            backgroundImageSrc: imagen1
          }}
        />

        <Slide 
          background={{
            backgroundImageSrc: imagen2
          }}
        />

        <Slide 
          background={{
            backgroundImageSrc: imagen3
          }}
        />

      </HeroSlider>
    </>
  )
}

export default SliderContainer
