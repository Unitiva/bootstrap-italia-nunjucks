import { storiesOf } from '@storybook/html'
import * as Catalogo from './catalogo.html'

storiesOf('Partials', module).add('Catalogo', () => Catalogo, {
 notes: 'A very simple component',
})
