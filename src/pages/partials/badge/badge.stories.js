import { storiesOf } from '@storybook/html'
import Badge from './badge.html'
import BadgeButton from './badge-button.html'
import BadgeColors from './badge-colors.html'

storiesOf('Badge', module)
  .add('simple', () => Badge )
  .add('in button', () => BadgeButton )
  .add('colors', () => BadgeColors )
