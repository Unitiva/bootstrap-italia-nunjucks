/* global document */
import { storiesOf } from '@storybook/html'
import * as Footer from './footer.html'

storiesOf('Partials', module).add('Footer', () => Footer, {
  notes: 'A very simple component',
})
