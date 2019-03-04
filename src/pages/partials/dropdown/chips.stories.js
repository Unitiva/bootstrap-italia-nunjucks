import { storiesOf } from '@storybook/html'
import Dropdown from './dropdown.html'
import DropdownButton from './dropdown-button.html'
import DropdownLink from './dropdown-link.html'

storiesOf('Dropdown', module)
  .add('Dropdown', () => Dropdown )
  .add('Dropdown Button', () => DropdownButton )
  .add('Dropdown Link', () => DropdownLink )
