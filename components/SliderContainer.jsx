'use client'
import HeroSlider, { Slide, Overlay } from "hero-slider";

const imagenes = [
  "https://images.unsplash.com/photo-1591283261401-c76eba2d369a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
]

const SliderContainer = () => {
  return (
    <div>
      <HeroSlider
        height={'40vh'}
        controller={{
          initialSlide: 2,
          slidingDuration: 100,
        }}
      >  
        <Overlay>
          <div className="flex flex-col gap-5 justify-center items-center h-full backdrop-blur-sm">
            <h1 className="uppercase font-bold text-7xl text-blue-900">Bienvenidos a</h1>
            <h2 className="uppercase font-bold text-7xl text-amber-500">FasterShop</h2>
          </div>
        </Overlay>

        {imagenes.map(imagen => 
          (
            <Slide 
              background={{
                backgroundImageSrc: imagen,
              }}
              key={imagen}
            />
          )
        )}
      </HeroSlider>
    </div>
  )
}

export default SliderContainer
