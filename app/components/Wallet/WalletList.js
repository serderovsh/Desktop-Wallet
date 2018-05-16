// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './WalletList.css';

import Button from '../Button.js';
import Wallet from './Wallet.js';
import More from 'react-icons/lib/md/more-horiz';

type Props = {};

const wallets = [
  { name: 'Personal Wallet', trx: '0.48999850', tkn1: '0.48000000', tkn2: '0.48033000' },
  { name: 'Business Wallet', trx: '0.48999850', tkn1: '0.48000000', tkn2: '0.48303000' },
  { name: 'Personal Wallet', trx: '0.48999850', tkn1: '0.48000000', tkn2: '0.40833000' },
  { name: 'Personal Wallet', trx: '0.48999850', tkn1: '0.48000000', tkn2: '0.48303000' },
  { name: 'Personal Wallet', trx: '0.48999850', tkn1: '0.48000000', tkn2: '0.48033000' },
  { name: 'Business Wallet', trx: '0.48999850', tkn1: '0.48000000', tkn2: '0.48303000' },
  { name: 'Personal Wallet', trx: '0.48999850', tkn1: '0.48000000', tkn2: '0.40833000' },
  { name: 'Personal Wallet', trx: '0.48999850', tkn1: '0.48000000', tkn2: '0.48303000' },
  { name: 'Personal Wallet', trx: '0.48999850', tkn1: '0.48000000', tkn2: '0.48033000' },
  { name: 'Business Wallet', trx: '0.48999850', tkn1: '0.48000000', tkn2: '0.48303000' },
  { name: 'Personal Wallet', trx: '0.48999850', tkn1: '0.48000000', tkn2: '0.40833000' },
  { name: 'Personal Wallet', trx: '0.48999850', tkn1: '0.48000000', tkn2: '0.48303000' }
];

export default class WalletList extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.walletBar}>
          <div>MY WALLETS :</div>
          <More />
        </div>
        <div className={styles.buttonContainer}>
          <Button name="Create New Wallet"/>
        </div>
        <div className={styles.walletContainer}>
          {
            wallets.map((wallet, i) =>
              <Wallet key={i} name={wallet.name} trx={wallet.trx} tkn1={wallet.tkn1} tkn2={wallet.tkn2} />
            )
          }
        </div>
      </div>
    );
  }
}
