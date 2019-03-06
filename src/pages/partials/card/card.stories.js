import { storiesOf } from '@storybook/html'
import SimpleCard from './simple-card.html'
import ArticleCard from './article-card.html'
import FlagCard from './flag-card.html'
import ColoredCard from './colored-card.html'

storiesOf('Card | Simple', module)
  .add('Card ', () => SimpleCard)
  .add('Card with icon', () => SimpleCard,
    {
      withIcon: true,
      icon: 'it-file',
    }
  )
  .add('Card with icon and shadow', () => SimpleCard,
    {
      withBg: true,
      withIcon: true,
    }
  )
  .add('Card with image and shadow', () => SimpleCard,
    {
      withImg: true,
      src: '/assets/img/amalfi.jpg',
      withBg: true,
    }
  )
storiesOf('Card | Complex', module)
  .add('Article Card', () => ArticleCard)
  .add('Card with flag', () => FlagCard)
  .add('Colored Card', () => ColoredCard)
