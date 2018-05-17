// @flow
import * as React from 'react';

import Navbar from '../components/Navbar/Navbar.js';
import ContentMain from '../components/ContentMain.js';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div className="interface">
        <Navbar />
        <ContentMain>{ /*this.props.children*/ }</ContentMain>
      </div>
    );
  }
}
