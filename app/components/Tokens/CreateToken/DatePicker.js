import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./DatePicker.css";

import DateSelect from "react-date-picker";

import { CalendarIcon, ArrowLeftIcon, ArrowRightIcon } from "../../Icons";

export default class DatePicker extends Component {
  state = {
    dateFrom: new Date(),
    dateTo: new Date()
  };

  onChangeFrom = date => this.setState({ dateFrom: date });
  onChangeTo = date => this.setState({ dateTo: date });

  render() {
    return (
      <div className={styles.datePicker}>
        <DateSelect onChange={this.onChangeFrom} value={this.state.dateFrom} />
        <DateSelect onChange={this.onChangeTo} value={this.state.dateTo} />
      </div>
    );
  }
}