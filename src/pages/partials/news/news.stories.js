/* global document */
import { storiesOf } from '@storybook/html'
import * as News from './news.html'

storiesOf('Partials', module).add('News', () => News, {
  notes: 'A very simple component',
})
