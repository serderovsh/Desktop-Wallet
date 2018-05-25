import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Import.css';

import { Checkbox, Input, Form, Button } from 'semantic-ui-react';
import buttonStyles from '../../../Button.css';

export default class Import extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value });

  // enum for radio state: 0: cold, 1: hot 
  // handle via semantic UI's <Form> https://react.semantic-ui.com/collections/form

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>TYPE BACKUP PHRASE TO IMPORT :</div>
        <Form className={styles.form}>
          <div className={styles.wordContainer}>
            <div className={styles.wordColumn}>
              <div className={styles.word}><span>1 : </span><Input /></div>
              <div className={styles.word}><span>2 : </span><Input /></div>
              <div className={styles.word}><span>3 : </span><Input /></div>
              <div className={styles.word}><span>4 : </span><Input /></div>
              <div className={styles.word}><span>5 : </span><Input /></div>
              <div className={styles.word}><span>6 : </span><Input /></div>
              <div className={styles.word}><span>7 : </span><Input /></div>
              <div className={styles.word}><span>8 : </span><Input /></div>
              <div className={styles.word}><span>9 : </span><Input /></div>
              <div className={styles.word}><span>10 : </span><Input /></div>
              <div className={styles.word}><span>11 : </span><Input /></div>
              <div className={styles.word}><span>12 : </span><Input /></div>
            </div>
            <div className={styles.wordColumn}>
              <div className={styles.word}><span>13 : </span><Input /></div>
              <div className={styles.word}><span>14 : </span><Input /></div>
              <div className={styles.word}><span>15 : </span><Input /></div>
              <div className={styles.word}><span>16 : </span><Input /></div>
              <div className={styles.word}><span>17 : </span><Input /></div>
              <div className={styles.word}><span>18 : </span><Input /></div>
              <div className={styles.word}><span>19 : </span><Input /></div>
              <div className={styles.word}><span>20 : </span><Input /></div>
              <div className={styles.word}><span>21 : </span><Input /></div>
              <div className={styles.word}><span>22 : </span><Input /></div>
              <div className={styles.word}><span>23 : </span><Input /></div>
              <div className={styles.word}><span>24 : </span><Input /></div>
            </div>
          </div>
          <Form.Button className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>Import</Form.Button>
        </Form>
      </div>
    );
  }
}
