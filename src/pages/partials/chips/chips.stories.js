import { storiesOf } from '@storybook/html'
import Chips from './chips.html'
import ChipsDisabled from './chips-disabled.html'

storiesOf('Chips', module)
  .add('simple', () => Chips )
  .add('disabled', () => ChipsDisabled )
