import { storiesOf } from '@storybook/html'
import * as Hero from './hero.html'

storiesOf('Hero', module).add('Hero', () => Hero , {
  notes: 'A very simple component',
})
