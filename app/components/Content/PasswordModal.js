import React, { Component } from 'react';
import styles from './PasswordModal.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { Form } from 'semantic-ui-react';
import buttonStyles from '../Button.css';
import { LockIcon } from '../Icons';

class PasswordModal extends Component {

    constructor(props){
        super(props);

        this.state = {
            pw : "",
            confirm : ""
        }
    }

    onClick(){
        console.log(this.state);
        this.props.onPassword(this.state.pw);
    }

    setPw(e){
        this.setState({
            pw : e.target.value
        });
        console.log(this.state);
    }

    setConfirm(e){
        this.setState({
            confirm: e.target.value
        });
        console.log(this.state);

    }

    onUserPwReset(){
        this.props.onUserPwReset();
    }

    onWrongPassword(){

    }

    renderResetPart(){
        return (
            <div>
                <Form.Button onClick={this.onUserPwReset.bind(this)} className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>Reset Password</Form.Button>
            </div>
        );
    }
    renderEnterPassword(){
        return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.modalHeader}>Enter Password</div>
                <Form className={styles.modalContainer}>
                    <LockIcon className={styles.icon}/>
                    <Form.Input onChange={this.setPw.bind(this)} type="password" placeholder="Enter your Password..." className={styles.passwordInput} />
                    <Form.Button onClick={this.onClick.bind(this)} className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>Submit</Form.Button>
                    {this.props.userHasEnteredWrongPw ? this.renderResetPart() : ""}
                </Form>
            </div>
        </div>
        );
    }

    renderCreatePassword(){
        return(
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <div className={styles.modalHeader}>Set a secure Password</div>
                    <Form className={styles.modalContainer}>
                        <LockIcon className={styles.icon}/>
                        <Form.Input onChange={this.setPw.bind(this)} type="password" placeholder="Enter your Password..." className={styles.passwordInput} />
                        {(this.props.newPass !== undefined) ? <Form.Input onChange={this.setConfirm.bind(this)} type="password" placeholder="Enter your Password..." className={styles.passwordInput} /> : ''}
                        <Form.Button onClick={this.onClick.bind(this)} className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>Submit</Form.Button>
                    </Form>
                </div>
            </div>
        )
    }

  render() {
    if(!this.props.render){
        return (
            <div></div>
        );
    }

    if(this.props.newPass !== undefined){
        return this.renderCreatePassword();
    }else{
        return this.renderEnterPassword(this.props);
    }
  }
}

export default withRouter(connect(
    state => ({ wallet: state.wallet }),
    dispatch => ({})
)(PasswordModal));
