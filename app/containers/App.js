import * as React from 'react';

import Navbar from '../components/Navbar/Navbar';
import ContentMain from '../components/ContentMain';
import WalletView from '../components/Wallet/WalletView/WalletView';
import Send from '../components/Wallet/Send/Send';
import SendAmount from '../components/Wallet/Send/SendAmount';

import styles from '../components/ContentMain.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="interface">
          <Navbar />
          <div className={styles.container}>
            <div className={ styles.contentPrimary }>
              {this.props.children}
            </div>
            <div className={ styles.contentSecondary }>
                <WalletView />
            </div>
          </div>
      </div>
    );
  }
}
