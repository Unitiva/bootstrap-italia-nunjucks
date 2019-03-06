/* global document */
import { storiesOf } from '@storybook/html'
import Bar from './bar.html'
import InfiniteBar from './infinite-bar.html'
import Spinner from './spinner.html'
import ButtonProgress from './button-progress.html'

storiesOf('Progress Indicators', module)
  .add('50% Progress bar', () => Bar )
  .add('infinite Progress bar', () => InfiniteBar )
  .add('spinner', () => Spinner )
  .add('button with progress bar', () => ButtonProgress )
