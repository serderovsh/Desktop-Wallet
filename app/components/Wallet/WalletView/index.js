import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Dropdown, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styles from './WalletView.css';

import { MoreIcon, VoteIcon, CalendarIcon, SendIcon, QRScanIcon, DownloadIcon } from '../../Icons';
import buttonStyles from '../../Button.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import SubHeader from './SubHeader';
import DatePicker from './DatePicker';
import TxList from './TxList';
import Background from '../../ContentSecondaryBG';

class WalletView extends Component {

  render() {
    let accountId = parseInt(this.props.match.params.account);
    let account = this.props.wallet.persistent.accounts[accountId];

    if(!account){
      this.props.history.push("/wallets/");
      return(<div></div>);
    }

    return (
      <Secondary>
      <div className={styles.headerContainer}>
        <Header headerName={account.name}>
          <Dropdown className={styles.moreMenu} icon={<MoreIcon />}>
            <Dropdown.Menu>
              <Dropdown.Item text="Temp Dropdown One" icon={<VoteIcon />} />
              <Dropdown.Divider />
              <Dropdown.Item text="Temp Dropdown Two" icon={<CalendarIcon />} />
            </Dropdown.Menu>
          </Dropdown>
        </Header>
        <SubHeader tokens={account.tokens} trx={account.trx} />
      </div>
        <div className={styles.buttonContainer}>
          <NavLink to={"/wallets/send/" + accountId + "/"}>
            <Button className={buttonStyles.button}><SendIcon />Send</Button>
          </NavLink>
          <NavLink to={"/wallets/receive/" + accountId + "/"}>
            <Button className={buttonStyles.button}><QRScanIcon />Receive</Button>
          </NavLink>
          <NavLink to="/wallets/walletBackup">
            <Button className={buttonStyles.button}><DownloadIcon />Backup</Button>
          </NavLink>
        </div>
        <DatePicker />
        <TxList />
      </Secondary>
    );
  }
}

export default withRouter(connect(
  state => ({ wallet: state.wallet }),
  dispatch => ({
    initFromStorage: (props) => {
      dispatch(initFromStorage(props));
    }
  })
)(WalletView));
