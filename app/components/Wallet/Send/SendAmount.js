import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SendAmount.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../Header';
import AmountDisplay from './AmountDisplay';

import { Button } from 'semantic-ui-react';
import buttonStyles from '../../Button.css';

import { ContactIcon, BackArrowIcon } from '../../Icons';
import TronHttpClient from 'tron-http-client';

class SendAmount extends Component {

    constructor(props){
        super(props);

        this.state = {
            amount : 0,
            address : ""
        }
    }

    onClickSend(){
        let accountId = this.props.match.params.account;
        let account = this.props.wallet.persistent.accounts[accountId];
        let client = new TronHttpClient();
        client.sendTrx(account.privateKey, this.state.address, this.state.amount);
    }

    onSetAmount(amount){
        this.state.amount = amount;
    }

    onSetAddress(event){
        this.state.address = event.target.value;
    }

  render() {
    return (
      <div className={styles.container}>
        <Header className={styles.white} headerName="Enter Amount" />
        <div onClick={this.props.history.goBack} className={styles.backArrow}><BackArrowIcon /></div>
        <div className={styles.subContainer}>
            <div className={styles.addressContainer}>
                <ContactIcon />
                <input onChange={this.onSetAddress.bind(this)} placeholder="Recipient Address" className={styles.address} value={this.props.address}/>
            </div>
            <AmountDisplay onSetAmount={this.onSetAmount.bind(this)}/>
            <Button onClick={this.onClickSend.bind(this)} className={`${buttonStyles.button} ${buttonStyles.black}`}>Send</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(
    state => ({ wallet: state.wallet }),
    dispatch => ( {
    } )
)(SendAmount));
