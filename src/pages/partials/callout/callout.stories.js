import { storiesOf } from '@storybook/html'
import SimpleCallout from './simple-callout.html'
import HighlightCallout from './highlight-callout.html'
import ComplexCallout from './complex-callout.html'

const text = `Maecenas vulputate ante dictum vestibulum volutpat.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Aenean non augue non purus vestibulum varius.`

storiesOf('Callout | Simple callout', module)
  .add('Simple callout', () => SimpleCallout,
    {
      notes: 'A very simple component',
      icon: 'it-info-circle',
      text,
      title: 'titolo callout'
    }
  )
  .add('Simple success callout', () => SimpleCallout,
    {
      type: 'success',
      icon: 'it-check-circle',
      text,
      title: 'usa'
    },
    {
      notes: 'A very simple component',
    }
  )
  .add('Simple warning callout', () => SimpleCallout,
    {
      type: 'warning',
      icon: 'it-help-circle',
      text,
      title: 'attenzione'
    },
    {
      notes: 'A very simple component',
    }
  )
  .add('Simple danger callout', () => SimpleCallout,
    {
      type: 'danger',
      icon: 'it-close-circle',
      text,
      title: 'non usare'
    },
    {
      notes: 'A very simple component',
    }
  )
  .add('Simple important callout', () => SimpleCallout,
    {
      type: 'important',
      icon: 'it-info-circle',
      text,
      title: 'importante'
    },
    {
      notes: 'A very simple component',
    }
  )
  .add('Simple note callout', () => SimpleCallout,
    {
      type: 'note',
      icon: 'it-info-circle',
      text,
      title: 'note al riguardo'
    },
    {
      notes: 'A very simple component',
    }
  )

storiesOf('Callout | Highlight callout', module)
  .add('Highlight callout', () => HighlightCallout,
    {
      icon: 'it-info-circle',
      text,
      title: 'note al riguardo',
      highlight: 'Lorem Ipsum'
    },
    {
      notes: 'A very simple component',
    }
  )
  .add('Highlight danger callout', () => HighlightCallout,
    {
      type: 'danger',
      icon: 'it-close-circle',
      text,
      title: 'note al riguardo',
      highlight: 'Lorem Ipsum!!'
    },
    {
      notes: 'A very simple component',
    }
  )
  storiesOf('Callout | Complex callout', module)
  .add('Complex callout', () => ComplexCallout,
    {
      type: 'danger',
      icon: 'it-close-circle',
      text,
      title: 'note al riguardo',
      highlight: 'Lorem Ipsum!!'
    },
    {
      notes: 'A very simple component',
    }
  )
