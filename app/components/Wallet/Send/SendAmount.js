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

class SendAmount extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header className={styles.white} headerName="Enter Amount" />
        <div onClick={this.props.history.goBack} className={styles.backArrow}><BackArrowIcon /></div>
        <div className={styles.subContainer}>
            <div className={styles.addressContainer}>
                <ContactIcon />
                <input className={styles.address}></input>
            </div>
            <AmountDisplay />
            <Button className={`${buttonStyles.button} ${buttonStyles.black}`}>Send</Button>
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
