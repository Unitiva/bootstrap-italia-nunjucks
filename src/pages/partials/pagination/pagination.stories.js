/* global document */
import { storiesOf } from '@storybook/html'
import * as Pagination from './pagination.html'

storiesOf('Pagination', module).add('Pagination', () => Pagination, {
  notes: 'A very simple component',
})
