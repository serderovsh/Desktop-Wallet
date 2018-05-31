import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Dropdown, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styles from './WalletView.css';

import { MoreIcon, CalendarIcon, SendIcon, QRScanIcon, DownloadIcon, SnowIcon } from '../../Icons';
import buttonStyles from '../../Button.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import SubHeader from './SubHeader';
import DatePicker from './DatePicker';
import TxList from './TxList';

class WalletView extends Component {
  render() {
    let accountId = this.props.match.params.account;
    let account = this.props.wallet.persistent.accounts[accountId];

    if (!account) {
      this.props.history.push('/wallets/');
      return (<div></div>);
    }

    let token =(this.props.match.params.token ? this.props.match.params.token : "");
    return (
      <Secondary>
        <div className={styles.headerContainer}>
          <Header headerName={account.name}>
            <Dropdown className={styles.moreMenu} icon={<MoreIcon/>}>
              <Dropdown.Menu>
                <NavLink to={"/wallets/walletBackup/" + accountId}>
                  <Dropdown.Item text="Backup Wallet" icon={<DownloadIcon/>}/>
                </NavLink>
              </Dropdown.Menu>
            </Dropdown>
          </Header>
          <SubHeader account={account} />
        </div>
        <div className={styles.buttonContainer}>
          <NavLink to={'/wallets/send/' + accountId + '/' + token}>
            <Button className={buttonStyles.button}><SendIcon />Send</Button>
          </NavLink>
          <NavLink to={'/wallets/receive/' + accountId + '/'}>
            <Button className={buttonStyles.button}><QRScanIcon />Receive</Button>
          </NavLink>
          <NavLink to={'/wallets/freeze/' + accountId + '/' + token}>
            <Button className={buttonStyles.button}><SnowIcon />Freeze TRX</Button>
          </NavLink>
          <NavLink to={'/wallets/offline/' + accountId }>
            <Button className={buttonStyles.button}><SnowIcon />Offline Sign</Button>
          </NavLink>
        </div>
        {/*<DatePicker/>*/}
        <TxList/>
      </Secondary>
    );
  }
}

export default withRouter(connect(
  state => ({ wallet: state.wallet }),
  dispatch => ({ })
)(WalletView));
