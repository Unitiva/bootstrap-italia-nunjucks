/* global document */
import { storiesOf } from '@storybook/html'
import * as Home from './index.html'

storiesOf('Pages', module).add('Home', () => Home, {
  notes: 'A very simple component',
})
