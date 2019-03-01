/* global document */
import { storiesOf } from '@storybook/html'
import * as Button from './button.html'


storiesOf('Buttons | Primary buttons', module)
  .add('Button primary', () => Button,
    {
      type: 'primary', text: 'Primary'
    },
    {
      notes: 'A very simple component',
    }
  )
  .add('Button primary outline', () => Button,
    {
      type: 'outline-primary', text: 'Primary outline'
    },
    {
      notes: 'A very simple component',
    }
  )
  .add('Button primary disabled', () => Button,
    {
      type: 'primary', text: 'Primary disabled', disabled: true
    },
    {
      notes: 'A very simple component',
    }
  )
  .add('Button primary mini', () => Button,
    {
      type: 'primary', text: 'Primary', size: 'xs'
    },
    {
      notes: 'A very simple component',
    }
  )
  .add('Button primary small', () => Button,
    {
      type: 'primary', text: 'Primary', size: 'sm'
    },
    {
      notes: 'A very simple component',
    }
  )
  .add('Button primary large', () => Button,
    {
      type: 'primary', text: 'Primary', size: 'lg'
    },
    {
      notes: 'A very simple component',
    }
  )
  .add('Button primary block', () => Button,
    {
      type: 'primary', text: 'Primary', block: true
    },
    {
      notes: 'A very simple component',
    }
  )

storiesOf('Buttons | Secondary buttons', module)
  .add('Button secondary', () => Button,
    {
      type: 'secondary', text: 'Primary'
    },
    {
      notes: 'A very simple component',
    }
  )
  .add('Button secondary outline', () => Button,
    {
      type: 'outline-secondary', text: 'Secondary outline'
    },
    {
      notes: 'A very simple component',
    }
  )
  .add('Button secondary disabled', () => Button,
    {
      type: 'secondary', text: 'Secondary disabled', disabled: true
    },
    {
      notes: 'A very simple component',
    }
  )
