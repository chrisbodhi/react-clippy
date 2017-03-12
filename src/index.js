import React from 'react';

import './clippy.css';
import clippy from './clippy.js';

class ReactClippy extends React.Component {
  constructor (props) {
    super(props);
    console.log('props in constructor', props);
  }

  componentDidMount () {
    const { actor, animation, dialog } = this.props;
    clippy.load(actor, (agent) => {
      agent.show();
      animation && agent.play(animation);
      dialog && agent.speak(dialog);
    });
  }

  render () {
    return (<div>
      <h2>Welcome to React components</h2>
    </div>);
  }
}

ReactClippy.propTypes = {
  actor: React.PropTypes.string.isRequired,
  animation: React.PropTypes.string,
  dialog: React.PropTypes.string
};

export default ReactClippy;
