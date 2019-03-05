import { storiesOf } from '@storybook/html'
import SectionPrimary from './section-primary.html'
import SectionPhoto from './section-photo.html'
import SectionCards from './section-cards.html'

storiesOf('Section', module)
  .add('primary', () => SectionPrimary )
  .add('with photo', () => SectionPhoto )
  .add('with card', () => SectionCards )
