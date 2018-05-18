// @flow
import * as React from 'react';

import Navbar from '../components/Navbar/Navbar';
import ContentMain from '../components/ContentMain';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div className="interface">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
