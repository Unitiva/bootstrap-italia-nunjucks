/* global document */
import { storiesOf } from '@storybook/html'
import * as Services from './services.html'

storiesOf('Partials', module).add('Service', () => Services, {
  notes: 'A very simple component',
})
