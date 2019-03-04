import { storiesOf } from '@storybook/html'
import TabVertical from './tab-vertical.html'
import TabVerticalIcon from './tab-vertical-icon.html'
import TabTextIcon from './tab-text-icon.html'
import TabBigIcon from './tab-big-icon.html'
import TabDark from './tab-dark.html'

storiesOf('Tab | Horizontal', module)
  .add('with text and icon', () => TabTextIcon )
  .add('with big icon', () => TabBigIcon )
  .add('dark', () => TabDark )

storiesOf('Tab | Vertical', module)
 .add('vertical', () => TabVertical )
 .add('vertical with icons', () => TabVerticalIcon )
