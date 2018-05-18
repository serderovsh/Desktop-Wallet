import * as React from 'react';

import Navbar from '../components/Navbar/Navbar';
import ContentMain from '../components/ContentMain';
import WalletView from '../components/ContentSecondary/WalletView/WalletView';

import styles from '../components/ContentMain.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="interface">
          <Navbar />
          <div className={styles.container}>
              {this.props.children}
            <div className={ styles.contentSecondary }>
                <WalletView />
            </div>
          </div>
      </div>
    );
  }
}
