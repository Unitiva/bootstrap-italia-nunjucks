import { storiesOf } from '@storybook/html'
import Collapse from './collapse.html'
import CollapseList from './collapse-list.html'
import Accordion from './accordion.html'
import ComplexAccordion from './complex-accordion.html'
import CollapseIcon from './collapse-icon.html'

storiesOf('Collapse | Collapse', module)
  .add('simple', () => Collapse )
  .add('list', () => CollapseList )
  .add('with icons', () => CollapseIcon )

storiesOf('Collapse | Accordion', module)
  .add('accordion', () => Accordion )
  .add('accordion complex', () => ComplexAccordion )
