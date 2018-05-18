import * as React from 'react';

import Navbar from '../components/Navbar/Navbar.js';
import ContentMain from '../components/ContentMain.js';

export default class App extends React.Component {
  
  render() {
    return (
      <div className="interface">
        <Navbar />
        <ContentMain>{ /*this.props.children*/ }</ContentMain>
      </div>
    );
  }
}
