import { storiesOf } from '@storybook/html'
import Modale from './modale.html'
import ModaleClose from './modale-close.html'
import ModaleIcon from './modale-icon.html'
import ModaleRadio from './modale-radio.html'
import ModaleLinks from './modale-links.html'
import PopConfirm from './modale-popconfirm.html'

storiesOf('Modals', module)
  .add('basic', () => Modale )
  .add('with close button', () => ModaleClose )
  .add('with icon', () => ModaleIcon )
  .add('with radio', () => ModaleRadio )
  .add('with links', () => ModaleLinks )
  .add('popconfirm', () => PopConfirm )
