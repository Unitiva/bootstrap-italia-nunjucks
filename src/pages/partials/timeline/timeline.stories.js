import { storiesOf } from '@storybook/html'
import Timeline from './timeline.html'

storiesOf('Timeline', module)
  .add('timeline', () => Timeline, {
    notes: 'A very simple component',
  })
