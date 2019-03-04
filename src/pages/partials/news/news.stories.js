/* global document */
import { storiesOf } from '@storybook/html'
import * as News from './news.html'

storiesOf('News', module).add('News', () => News, {
  notes: 'A very simple component',
})
