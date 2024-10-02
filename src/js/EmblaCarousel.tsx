import React, { useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  options?: EmblaOptionsType
}

export const EmblaCarouselDynamic: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const [slides, setSlides] = useState([
    <div className="embla__slide" key={1}>
      <div className="embla__slide__number">1</div>
      <div><button onClick={() => {emblaApi?.scrollNext()}}>move to next</button></div>
    </div>,
    <div className="embla__slide" key={2}>
      <div className="embla__slide__number">2</div>
      <div><button onClick={() => {emblaApi?.scrollNext()}}>move to next</button></div>
    </div>,
    <div className="embla__slide" key={3}>
      <div className="embla__slide__number">3</div>
      <div><button onClick={() => {emblaApi?.scrollNext()}}>move to next</button></div>
    </div>  
  ])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit()
    }
  }, [emblaApi, slides])

  function addSlide() {
    setSlides([
      ...slides,
      <div className="embla__slide" key={slides.length + 1}>
        <div className="embla__slide__number">{slides.length + 1}</div>
        <div><button onClick={() => {emblaApi?.scrollNext()}}>move to next</button></div>
      </div>
    ])
  }

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides}
        </div>
      </div>
      <button onClick={() => addSlide()}>Add slide</button>
    </section>
  )
}


export const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        <div className="embla__slide" key={1}>
          <div className="embla__slide__number">1</div>
          <div><button onClick={() => {emblaApi?.scrollNext()}}>move to next</button></div>
        </div>,
        <div className="embla__slide" key={2}>
          <div className="embla__slide__number">2</div>
          <div><button onClick={() => {emblaApi?.scrollNext()}}>move to next</button></div>
        </div>,
        <div className="embla__slide" key={3}>
          <div className="embla__slide__number">3</div>
          <div><button onClick={() => {emblaApi?.scrollNext()}}>move to next</button></div>
        </div>  
        </div>
      </div>
    </section>
  )
}
