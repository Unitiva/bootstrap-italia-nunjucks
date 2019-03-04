import { storiesOf } from '@storybook/html'
import Tooltip from './tooltip.html'

storiesOf('Tooltip', module)
  .add('Tooltip', () => Tooltip, {
    notes: 'A very simple component',
  })
