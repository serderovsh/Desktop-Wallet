import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AmountInput.css';

export default class AmountInput extends Component {
  render() {
    return (
      <input type="number" placeholder="0.00000000" required />
    );
  }
}
