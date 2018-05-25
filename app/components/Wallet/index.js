import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Header from '../ContentPrimaryHeader';
import Wallet from './Wallet';

//import { loadTokenBalances } from '../../actions/wallet';

import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';
import styles from './WalletList.css';
import buttonStyles from '../Button.css';

const wallets = [
  {
    name: 'Personal Wallet',
    tokens: [{ name: 'TRX', amount: '480 980.00' }, { name: 'tkn1', amount: '452.00' }, {
      name: 'tkn2',
      amount: '7 879.00'
    }]
  },
];

class WalletList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header className={styles.header} text="MY WALLETS :">
          <Dropdown icon={<MoreIcon />}>
            <Dropdown.Menu>
              <NavLink to="/wallets/create">
                <Dropdown.Item text='Import or Create Wallet' icon={<WalletIcon />} />
              </NavLink>
              {/*
                <Dropdown.Divider />
                <NavLink to="/wallets/import">
                  <Dropdown.Item text='Import Wallet' icon={<DownloadIcon />} />
                </NavLink>
              */}
            </Dropdown.Menu>
          </Dropdown>
        </Header>
        <div className={styles.buttonContainer}>
          <NavLink to="/wallets/create">
            <Button className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Create New Wallet</Button>
          </NavLink>
        </div>
        <div className={styles.walletContainer}>
          {
            wallets.map((wallet, i) =>
              // NavLink in Wallet Component
              <Wallet key={i} name={wallet.name} tokens={wallet.tokens} />
            )
          }
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     wallet: state.app.wallet,
//     tokenBalances: state.wallet.tokens,
//     entropy: state.wallet.entropy,
//   };
// }
// const mapDispatchToProps = {
//   loadTokenBalances,
// };

export default WalletList;
