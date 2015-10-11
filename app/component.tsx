import './component.scss';
import React = require('react/addons');

interface HelloState{
  message: String;
}

class Component extends React.Component<any, HelloState> {
  shouldComponentUpdate() {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }
}

export class Hello extends Component {
  constructor() {
    super();
    this.state = {message: 'Hello world!'};
  }
  render() {
    return <h1>{this.state.message}</h1>;
  }
}
