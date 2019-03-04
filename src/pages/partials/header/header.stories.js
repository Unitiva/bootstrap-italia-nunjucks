/* global document */
import { storiesOf } from '@storybook/html'
import * as Header from './header.html'

storiesOf('Header', module).add('Header', () => Header, {
  notes: 'A very simple component',
})
