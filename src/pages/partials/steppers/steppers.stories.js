import { storiesOf } from '@storybook/html'
import Steppers from './steppers.html'
import SteppersIcons from './steppers-icons.html'
import SteppersNav from './steppers-nav.html'
import SteppersProgess from './steppers-progress.html'
import SteppersDots from './steppers-dots.html'
import SteppersDark from './steppers-dark.html'

storiesOf('Steppers', module)
  .add('simple', () => Steppers)
  .add('with icon', () => SteppersIcons )
  .add('with nav', () => SteppersNav )
  .add('with dots', () => SteppersDots )
  .add('with progress bar', () => SteppersProgess )
  .add('dark versione', () => SteppersDark )

