import { h } from 'preact';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button'; // preact component

storiesOf('Button', module)
  .add('case 1', () => {
    return (<Button text="CASE-1" onPress={action('case-1')} />);
  })
  .add('case 2', () => {
    return (<Button text="CASE-2" onPress={action('case-2')} />);
  });
