import { storiesOf } from '@storybook/html'
import Chips from './chips.html'
import ChipsDisabled from './chips-disabled.html'
import ChipsGroups from './chips-groups.html'

storiesOf('Chips', module)
  .add('chips', () => Chips )
  .add('disabled', () => ChipsDisabled )
  .add('groups', () => ChipsGroups )
