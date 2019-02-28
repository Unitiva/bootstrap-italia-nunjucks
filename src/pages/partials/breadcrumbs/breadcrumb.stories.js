/* global document */
import { storiesOf } from '@storybook/html'
import * as Breadcrumbs from './breadcrumbs.html'

storiesOf('Partials', module).add('Breadcrumbs', () => Breadcrumbs, {
  notes: 'A very simple component',
})
