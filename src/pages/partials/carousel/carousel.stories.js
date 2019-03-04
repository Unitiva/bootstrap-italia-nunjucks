import { storiesOf } from '@storybook/html'
import Carousel from './carousel.html'
import CarouselArticles from './carousel-articles.html'

storiesOf('Carousel', module)
  .add('simple', () => Carousel )
  .add('with articles', () => CarouselArticles )
