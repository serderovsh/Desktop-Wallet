import React, { Component } from "react";
import { FormattedNumber } from "react-intl";

import { Input } from "semantic-ui-react";
import styles from "./AmountSlider.css";

import { dropsToTrx } from "../../../utils/currency";

class AmountSlider extends Component {
  state = {
    current: 0
  };

  handleChange = (e, { value }) => {
    //if(this.onSliderChange)
    if (value) {
      this.props.onSliderChange(this.state.ratio * value);
      this.setState({ current: value });
    } else {
      this.props.onSliderChange(0);
      this.setState({ current: 0 });
    }
  };

  get sliderWidthCalc() {
    console.log(this.state.current, this.props.totalTRX);
    if (this.state.current === 0 || this.props.totalTRX === 0) {
      return 0;
    }
    return Math.round((this.state.current / this.state.assetPossible) * 100);
  }
  /*<FormattedNumber value={parseInt(this.state.current)} />*/
  render() {
    console.log(
      this.props.assetNum,
      dropsToTrx(this.props.trxNum),
      dropsToTrx(this.props.totalTRX)
    );
    this.state.ratio = this.props.assetNum / dropsToTrx(this.props.trxNum);
    this.state.assetPossible =
      this.state.ratio * dropsToTrx(this.props.totalTRX);
    console.log(this.state.ratio, this.state.assetPossible);
    return (
      <div className={styles.container}>
        <div className={styles.amount}>
          <Input
            type="number"
            min={0}
            max={this.state.assetPossible}
            className={styles.input}
            value={this.state.current}
            onChange={this.handleChange}
          />{" "}
          {this.props.tokenLabel}
        </div>
        <div className={styles.sliderContainer}>
          <Input
            className={styles.slider}
            min={0}
            max={this.state.assetPossible}
            onChange={this.handleChange}
            type="range"
            value={this.state.current}
          />
          <div
            className={styles.progress}
            style={{ width: this.sliderWidthCalc + "%" }}
          />
          <div className={styles.sliderBG} />
        </div>
        <div className={styles.sliderRange}>
          <span>0 TRX</span>
          <span>
            <FormattedNumber value={this.state.assetPossible} />{" "}
            TRX
          </span>
        </div>
      </div>
    );
  }
}

export default AmountSlider;
