import { storiesOf } from '@storybook/html'
import Notification from './notifications.html'
import NotificationMessage from './notifications-message.html'
import NotificationDismissable from './notifcations-dismissable.html'

storiesOf('Notification', module)
  .add('simple', () => Notification )
  .add('with message', () => NotificationMessage )
  .add('dismissable', () => NotificationDismissable )

