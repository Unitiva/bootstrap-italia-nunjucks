/* global document */
import { storiesOf } from '@storybook/html'
import * as Header from './header.html'
var nunjucks = require('nunjucks')

storiesOf('Partials', module).add('Header', () => nunjucks.render('header.html') , {
  notes: 'A very simple component',
})
