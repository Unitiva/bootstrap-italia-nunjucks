/* global document */
import { storiesOf } from '@storybook/html'
import * as ListingNews from './listing-news.html'

storiesOf('ListingNews', module).add('ListingNews', () => ListingNews, {
  notes: 'A very simple component',
})
