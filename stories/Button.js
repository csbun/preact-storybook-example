import { h, Component } from 'preact';

const style = {
  display: 'inline-block',
  lineHight: 15,
  textAlign: 'center',
  border: '1px solid #666',
  borderRadius: 3,
  padding: 3,
  cursor: 'pointer',
};

export default class Button extends Component {
  render() {
    const { text, onPress } = this.props;
    return <span style={style} onClick={onPress}>{text}</span>
  }
}
