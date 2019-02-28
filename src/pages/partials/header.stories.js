/* global document */
import { storiesOf } from '@storybook/html'
import * as Header from './header.html'

storiesOf('Partials', module).add('Header', () => Header, {
  notes: 'A very simple component',
})
