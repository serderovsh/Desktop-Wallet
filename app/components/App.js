/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';

import Navbar from './Navbar/';
import Sidebar from './Sidebar';
import Main from './Main';

// Styles
import styles from '../components/ContentMain.css';

class App extends React.Component {
  render() {
    return (
      <div className="interface">
        <Navbar />
        <div className={styles.container}>
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
