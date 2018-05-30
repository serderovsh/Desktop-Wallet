import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PopupModal.css';

import Anime from 'react-anime';
import { Button } from 'semantic-ui-react';
import buttonStyles from '../Button.css';

import { CSSTransitionGroup } from 'react-transition-group';

import { withRouter } from 'react-router-dom';

import { CheckMarkBoxAnimation, WarningCircleAnimation, QuestionMarkAnimation } from '../Icons';

class PopupModal extends Component {

  modalVis() {
    if (!this.props.modalVis) {
      return styles.hidden;
    }
    return '';
  }

  renderButtons() {
    if (this.props.confirmation) {
      return (
      <div className={styles.buttonContainer}>
        <Button onClick={this.props.modalConfirm} className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Confirm</Button>
        <Button onClick={this.props.modalDecline} className={`${buttonStyles.button} ${buttonStyles.black}`}>Decline</Button>
      </div>
      );
    } else {
      if (this.props.buttonText) {
        return <Button onClick={this.props.closeModalFunction} className={`${buttonStyles.button} ${buttonStyles.gradient}`}>{ this.props.buttonText }</Button>
      } else {
        return <Button onClick={this.props.closeModalFunction} className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Close</Button>
      }
    }
  }

  renderSymbol() {
    if (this.props.confirmation) {
      return <QuestionMarkAnimation className={styles.warning} />
    } else {
      if (this.props.success) {
        return <CheckMarkBoxAnimation className={styles.success} />
      } else if (this.props.failure) {
        return <WarningCircleAnimation className={styles.failure} />
      }
    }
  }

  render() {
    if (this.props.modalVis) {
      return (
        <div className={`${styles.container} ${this.modalVis()}`}>
          <Anime scale={[0.7, 1]} duration={500} delay={100}>
            <div className={`${styles.subContainer} ${this.props.className}`}>
              {this.renderSymbol()}
              <div className={styles.modalText}>{this.props.modalText}</div>
              {this.renderButtons()}
            </div>
          </Anime>
        </div>
      );
    }
    return '';
  }
}

export default withRouter((PopupModal));


/*
        this.state = {
              modalVis: true
        }

        modalConfirm = () => {
                //confirm logic here
                console.log('confirm')
                this.modalClose();
        }

        modalDecline = () => {
            //decline logic here
            console.log('decline')
            this.modalClose();
        }

        modalOpen = () => this.setState({ modalVis: true});
        modalClose = () => this.setState({ modalVis: false});


        <PopupModal success (or) confirmation (or) failure
          modalVis={this.state.modalVis}
          modalText="Are you sure you wanna do this?"
          closeModalFunction={this.modalClose}
          modalConfirm={this.modalConfirm}
          modalDecline={this.modalDecline}
        />
*/