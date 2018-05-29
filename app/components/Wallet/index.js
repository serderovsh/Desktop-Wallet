import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Button, Dropdown } from 'semantic-ui-react';

import { connect } from 'react-redux';
import Header from '../ContentPrimaryHeader';
import Wallet from './Wallet';

import { tu } from '../../utils/i18n';

import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';
import styles from './WalletList.css';
import buttonStyles from '../Button.css';
import {initFromStorage} from "../../actions/wallet";

class WalletList extends Component {

    componentDidMount() {
        this.props.initFromStorage(this.props);
    }

  render() {
        let accounts = this.props.wallet.persistent.accounts;
        let accountKeys = Object.keys(accounts);
    return (
      <div className={styles.container}>
        <Header className={styles.header} text="MY WALLETS :">
          <Dropdown icon={<MoreIcon />}>
            <Dropdown.Menu>
              <NavLink to="/wallets/create">
                <Dropdown.Item text="Create Wallet" icon={<WalletIcon />} />
              </NavLink>
              <Dropdown.Divider />
              <NavLink to="/wallets/import">
                <Dropdown.Item text="Import Wallet" icon={<DownloadIcon />} />
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </Header>
        <div className={styles.buttonContainer}>
          <NavLink to="/wallets/createAccount">
            <Button className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Create New Wallet</Button>
          </NavLink>
        </div>
        <div className={styles.walletContainer}>
          {
            accountKeys.map((key, i) =>
              // NavLink in Wallet Component
              <Wallet
                key={key}
                pub={accounts[key].publicKey}
                trx={accounts[key].trx}
                name={accounts[key].name}
                tokens={accounts[key].tokens}
                index={accounts[key].publicKey}
              />)
          }
        </div>
      </div>
    );
  }
}

export default withRouter(connect(
    state => ({ wallet: state.wallet }),
    dispatch => ( {
        initFromStorage: (props) => {
            dispatch(initFromStorage(props, dispatch));
        }
    } )
)(WalletList));
