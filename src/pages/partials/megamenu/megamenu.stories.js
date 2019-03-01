/* global document */
import { storiesOf } from '@storybook/html'
import * as MegaMenu from './megamenu.html'

storiesOf('Partials', module).add('MegaMenu', () => MegaMenu, {
  notes: 'A very simple component',
})
