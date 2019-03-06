/* global document */
import { storiesOf } from '@storybook/html'
import AffixTop from './affix-top.html'
import AffixBottom from './affix-bottom.html'

storiesOf('Affix', module)
  .add('top', () => AffixTop )
  .add('bottom', () => AffixBottom )

