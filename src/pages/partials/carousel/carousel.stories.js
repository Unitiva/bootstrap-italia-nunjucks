import { storiesOf } from '@storybook/html'
import * as Carousel from './carousel.html'

storiesOf('Carousel', module).add('Carousel', () => Carousel , {
  notes: 'A very simple component',
})
