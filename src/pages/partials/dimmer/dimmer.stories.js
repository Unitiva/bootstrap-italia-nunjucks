import { storiesOf } from '@storybook/html'
import Dimmer from './dimmer.html'
import DimmerPrimary from './dimmer-primary.html'
import DimmerActions from './dimmer-actions.html'

storiesOf('Dimmer', module)
  .add('simple', () => Dimmer )
  .add('primary', () => Dimmer )
  .add('with acions', () => DimmerActions )
