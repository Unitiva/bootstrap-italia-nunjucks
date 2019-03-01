import { storiesOf } from '@storybook/html'
import * as CookieBar from './cookiebar.html'

storiesOf('Partials', module).add('Cookie Bar', () => CookieBar, {
 notes: 'A very simple component',
})
