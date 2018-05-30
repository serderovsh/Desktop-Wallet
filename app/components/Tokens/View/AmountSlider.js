import React, { Component } from 'react';

import { Input } from 'semantic-ui-react';
import styles from './AmountSlider.css';

class AmountSlider extends Component {
  state = {
    current: 0,
  };

  handleChange = (e, { value }) => {
    //if(this.onSliderChange)
    this.props.onSliderChange(value);
    this.setState({ current: value });
  };

  get sliderWidthCalc() {
    if (this.state.current === 0 || this.props.totalTRX === 0) {
      return 0;
    }
    return Math.round((this.state.current / this.props.totalTRX));
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.amount}>{ parseInt(this.state.current) } TRX</div>
        <div className={styles.sliderContainer}>
          <Input
            className={styles.slider}
            min={0}
            max={this.props.totalTRX}
            onChange={this.handleChange}
            type="range"
            value={this.state.current}
          />
          <div className={styles.progress} style={{width: this.sliderWidthCalc + '%'}}></div>
          <div className={styles.sliderBG}></div>
        </div>
        <div className={styles.sliderRange}>
          <span>0 TRX</span>
          <span>{ this.props.totalTRX } TRX</span>
        </div>
      </div>
    );
  }
}

export default AmountSlider;
