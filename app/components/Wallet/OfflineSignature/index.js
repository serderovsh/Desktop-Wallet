import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { TextArea, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styles from './OfflineSignature.css';

import { MoreIcon, CalendarIcon, SendIcon, QRScanIcon, DownloadIcon } from '../../Icons';
import buttonStyles from '../../Button.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';

export default class OfflineSignature extends Component {

  setHex = (e, { value }) => this.setState({ hex: value })

  submitHex = () => {
    console.log(this.state.hex);
  }

  render() {
    return (
      <Secondary>
        <div className={styles.container}>
          <Header headerName="Offline Signature" />
          <div className={styles.subContainer}>
            <div className={styles.header}>TRANSACTION HEX :</div>
            <div className={styles.headerSubText}>Here you can paste a transaction hex to inspect the contents of a transaction. The transaction can then be broadcasted to the network.</div>
            <TextArea placeholder="Write your message here..." className={styles.textArea} onChange={this.setHex}/>
            <Button onClick={this.submitHex} className={`${buttonStyles.button} ${buttonStyles.black}`}>Load Transaction</Button>
          </div>
        </div>
      </Secondary>
    );
  }
}
