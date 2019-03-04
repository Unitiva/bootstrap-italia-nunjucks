/* global document */
import { storiesOf } from '@storybook/html'
import * as Calendar from './calendar.html'

storiesOf('Calendar', module).add('Calendar', () => Calendar, {
  notes: 'A very simple component',
})
