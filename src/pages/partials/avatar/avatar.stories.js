/* global document */
import { storiesOf } from '@storybook/html'
import * as Avatar from './avatar.html'

storiesOf('Avatar', module)
  .add('Avatar xs', () => Avatar, {size: 'xs'} , {
    notes: 'A very simple component',
  })
  .add('Avatar sm', () => Avatar, {size: 'sm'}, {
    notes: 'A very simple component',
  })
  .add('Avatar', () => Avatar, {
    notes: 'A very simple component',
  })
  .add('Avatar lg', () => Avatar, { size: 'lg' }, {
    notes: 'A very simple component',
  })
  .add('Avatar xl', () => Avatar, { size: 'xl' }, {
    notes: 'A very simple component',
  })
  .add('Avatar xxl', () => Avatar, { size: 'xxl' }, {
    notes: 'A very simple component',
  })
