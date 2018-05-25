import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Backup.css';

import MainModal from '../../Content/DarkMainModal';

import { Button, Input, Checkbox } from 'semantic-ui-react';
import buttonStyles from '../../Button.css';

import { Form, ContactIcon, CloseIcon } from '../../Icons';

export default class Backup extends Component {

  state = {
    backupPhrase: ["apple", "banana", "orange", "horse", "pig", "street", "happy", "sad", "fun", "mad", "because", "beta", "omega", "hack", "chain", "link", "verge", "tron", "golem", "test", "phrase", "girl", "boy", "goat"],
  }

  render() {
    return (
      <MainModal header="Backup Wallet" className={styles.container}>
        <div className={styles.subHeader}>CAREFULLY WRITE DOWN THESE WORDS :</div>
        <div className={styles.wordContainer}>
            <div className={styles.wordColumn}>
                <div className={styles.word}><span>1 : </span>{ this.state.backupPhrase[0] }</div>
                <div className={styles.word}><span>2 : </span>{ this.state.backupPhrase[1] }</div>
                <div className={styles.word}><span>3 : </span>{ this.state.backupPhrase[2] }</div>
                <div className={styles.word}><span>4 : </span>{ this.state.backupPhrase[3] }</div>
                <div className={styles.word}><span>5 : </span>{ this.state.backupPhrase[4] }</div>
                <div className={styles.word}><span>6 : </span>{ this.state.backupPhrase[5] }</div>
                <div className={styles.word}><span>7 : </span>{ this.state.backupPhrase[6] }</div>
                <div className={styles.word}><span>8 : </span>{ this.state.backupPhrase[7] }</div>
                <div className={styles.word}><span>9 : </span>{ this.state.backupPhrase[8] }</div>
                <div className={styles.word}><span>10 : </span>{ this.state.backupPhrase[9] }</div>
                <div className={styles.word}><span>11 : </span>{ this.state.backupPhrase[10] }</div>
                <div className={styles.word}><span>12 : </span>{ this.state.backupPhrase[11] }</div>
            </div>
            <div className={styles.wordColumn}>
                <div className={styles.word}><span>13 : </span>{ this.state.backupPhrase[12] }</div>
                <div className={styles.word}><span>14 : </span>{ this.state.backupPhrase[13] }</div>
                <div className={styles.word}><span>15 : </span>{ this.state.backupPhrase[14] }</div>
                <div className={styles.word}><span>16 : </span>{ this.state.backupPhrase[15] }</div>
                <div className={styles.word}><span>17 : </span>{ this.state.backupPhrase[16] }</div>
                <div className={styles.word}><span>18 : </span>{ this.state.backupPhrase[17] }</div>
                <div className={styles.word}><span>19 : </span>{ this.state.backupPhrase[18] }</div>
                <div className={styles.word}><span>20 : </span>{ this.state.backupPhrase[19] }</div>
                <div className={styles.word}><span>21 : </span>{ this.state.backupPhrase[20] }</div>
                <div className={styles.word}><span>22 : </span>{ this.state.backupPhrase[21] }</div>
                <div className={styles.word}><span>23 : </span>{ this.state.backupPhrase[22] }</div>
                <div className={styles.word}><span>24 : </span>{ this.state.backupPhrase[23] }</div>
            </div>
        </div>
        <div className={styles.checkboxContainer}>
            <Checkbox className={styles.checkbox} />
            <span className={styles.checkboxLabel}>I have written it down</span>
        </div>
        <Button className={`${buttonStyles.button} ${buttonStyles.black}`}>Backup</Button>
      </MainModal>
    );
  }
}
