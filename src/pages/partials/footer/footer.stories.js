/* global document */
import { storiesOf } from '@storybook/html'
import * as Footer from './footer.html'

storiesOf('Footer', module).add('Footer', () => Footer, {
  notes: 'A very simple component',
})
