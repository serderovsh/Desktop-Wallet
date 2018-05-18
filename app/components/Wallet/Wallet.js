// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadTokenBalances } from '../../actions/wallet';
import styles from './Wallet.css';


import { WalletIcon, ArrowRightIcon } from '../Icons';

class Wallet extends Component {


  render() {
    return (
      <div className={styles.wallet}>
        <WalletIcon className={styles.walletIcon} />
        <ul className={styles.walletInfo}>
          <li className={styles.name}>{ this.props.name }</li>
          <li>{ this.props.trx } TRX</li>
          <li>{ this.props.tkn1 } Tkn1</li>
          <li>{ this.props.tkn2 } Tkn2</li>
        </ul>
        <ArrowRightIcon className={styles.arrowIcon} />
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
//
// export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

export default Wallet;
