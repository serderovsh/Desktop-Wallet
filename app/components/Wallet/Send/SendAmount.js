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

    async onClickSend(){
        let accountId = this.props.match.params.account;
        let account = this.props.wallet.persistent.accounts[accountId];
        let client = new TronHttpClient();
        let response = null;
        if(this.props.match.params.token){
            response = await client.sendToken(account.privateKey, this.state.address, this.state.amount, this.props.match.params.token);
        }else{
            response = await client.sendTrx(account.privateKey, this.state.address, this.state.amount);
        }
        console.log(response);
    }

    onSetAmount(amount){
        this.state.amount = amount;
    }

    onSetAddress(event){
        this.state.address = event.target.value;
    }

  render() {
        let token = (this.props.match.params.token ? this.props.match.params.token : "TRX");
    return (
      <div className={styles.container}>
        <Header className={styles.white} headerName="Enter Amount" />
        <div onClick={this.props.history.goBack} className={styles.backArrow}><BackArrowIcon /></div>
        <div className={styles.subContainer}>
            <div className={styles.addressContainer}>
                <ContactIcon />
                <input onChange={this.onSetAddress.bind(this)} placeholder="Recipient Address" className={styles.address} value={this.props.address}/>
            </div>
            <AmountDisplay token={token} onSetAmount={this.onSetAmount.bind(this)}/>
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
