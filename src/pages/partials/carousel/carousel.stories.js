import { storiesOf } from '@storybook/html'
import Carousel from './carousel.html'
import CarouselArticle from './carousel-articles.html'

storiesOf('Carousel', module)
  .add('Carousel', () => Carousel )
  .add('CarouselArticle', () => CarouselArticle )
