/* global document */
import { storiesOf } from '@storybook/html'
import * as ListingCard from './listing-card.html'

storiesOf('ListingCard', module).add('Listing card', () => ListingCard, {
  notes: 'A very simple component',
})
