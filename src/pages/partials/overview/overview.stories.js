import { storiesOf } from '@storybook/html'
import Overview from './overview.html'
import OverviewDark from './overview-dark.html'
import OverviewIcon from './overview-icon.html'
import OverviewHover from './overview-hover.html'

storiesOf('Overlay', module)
  .add('simple', () => Overview )
  .add('dark', () => OverviewDark )
  .add('with icon', () => OverviewIcon )
  .add('hover', () => OverviewHover )
