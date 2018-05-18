import * as React from 'react';

import Navbar from '../components/Navbar/Navbar';
import ContentMain from '../components/ContentMain';

export default class App extends React.Component {
  
  render() {
    return (
      <div className="interface">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
