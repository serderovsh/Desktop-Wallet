import React, { Component } from "react";
import { FormattedNumber } from "react-intl";
import styles from "./AmountDisplay.css";

import AmountInput from "./AmountInput";

export default class AmountDisplay extends Component {
  render() {
    console.log(this.props.usd) 
    return (
      <div className={styles.container}>
        <div className={styles.amountTag}>Amount :</div>
        <div className={styles.amountInput}>
          <div className={styles.amountMain}>
            <AmountInput onSetAmount={this.props.onSetAmount} />
            <span>{this.props.token}</span>
          </div>
          <div className={styles.amountSub}>{parseFloat(this.props.usd).toLocaleString()} USD</div>
        </div>
      </div>
    );
  }
}
