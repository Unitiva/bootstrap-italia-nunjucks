/* global document */
import { storiesOf } from '@storybook/html'
import * as Alert from './alert.html'

storiesOf('Alerts', module)
  .add('Alert success', () => Alert, { type: 'success' }, {
    notes: 'A very simple component',
  })
  .add('Alert warning', () => Alert, { type: 'warning' }, {
    notes: 'A very simple component',
  })
  .add('Alert danger', () => Alert, { type: 'danger' }, {
    notes: 'A very simple component',
  })

