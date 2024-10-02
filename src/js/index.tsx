import React from 'react'
import {EmblaCarousel, EmblaCarouselDynamic} from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Header from './Header'
import Footer from './Footer'
import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'

const OPTIONS: EmblaOptionsType = {
  watchFocus: false,
  watchDrag: false,
  watchResize: false,
  watchSlides: true  
}

export const App: React.FC = () => (
  <>
    <Header />
    <h1>Fixed slides</h1>
    <EmblaCarousel options={OPTIONS} />

    <h1>Dynamic slides</h1>
    <EmblaCarouselDynamic options={OPTIONS} />
    <Footer />
  </>
)
