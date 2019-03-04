import { storiesOf } from '@storybook/html'
import SimpleCard from './simple-card.html'
import ArticleCard from './article-card.html'
import FlagCard from './flag-card.html'

storiesOf('Card | Simple', module)
  .add('Card ', () => SimpleCard)
  .add('Card with icon', () => SimpleCard,
    {
      withIcon: true,
      icon: 'it-file'
    }
  )
  .add('Card with icon and shadow', () => SimpleCard,
    {
      withBg: true,
      withIcon: true,
      icon: 'it-close'
    }
  )
  .add('Card with image and shadow', () => SimpleCard,
    {
      withImg: true,
      withBg: true,
    }
  )
storiesOf('Card | Complex', module)
  .add('Article Card', () => ArticleCard)
  .add('Card with flag', () => FlagCard)