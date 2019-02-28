/* global document */
import { storiesOf } from '@storybook/html'
import * as Carousel from './carousel.html'

storiesOf('Partials', module).add('Carousel', () => Carousel, {
  notes: 'A very simple component',
})
