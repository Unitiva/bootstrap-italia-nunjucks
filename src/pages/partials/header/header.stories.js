/* global document */
import { storiesOf } from '@storybook/html'
import * as Header from './header.html'

storiesOf('Partials', module).add('Header', () => nunjucks.renderString(Header), {
  notes: 'A very simple component',
})
