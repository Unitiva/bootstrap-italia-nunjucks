import { storiesOf } from '@storybook/html'
import Input from './input.html'
import InputPassword from './input-password.html'
import Toggle from './toggle.html'
import Select from './select.html'

storiesOf('Form elements | input', module)
  .add('text', () => Input, { label: 'input type text label'})
  .add('number', () => Input, { type: 'number', label: 'input type number label'})
  .add('time', () => Input, { type: 'time', label: 'input type time label'})
  .add('text with extra text and placehoder',
    () => Input, { placeholder: 'testo placehoder', description: 'lorem ipsum'})
  .add('disabled', () => Input, { disabled: 'disabled'})

storiesOf('Form elements | password', module)
  .add('password', () => InputPassword,
    {
      label: 'input type password label',
      description: 'lorem ipsum'})
  .add('password with stenght meter', () => InputPassword,
    {
      label: 'input type password label',
      strengthMeter: true
    })

storiesOf('Form elements | toggle', module)
  .add('toggle', () => Toggle )
  .add('toggle disabled', () => Toggle, { disabled: 'disabled' } )

  storiesOf('Form elements | select', module)
  .add('select', () => Select )
