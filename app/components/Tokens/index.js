import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { CSSTransitionGroup } from 'react-transition-group';
import styles from './TokenList.css';
import buttonStyles from '../Button.css';
import { loadTokens } from '../../actions/tokens';
import Token from './Token';
import Header from '../ContentPrimaryHeader';


class TokenList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: '',
      tokens: this.props.tokens,
    }
    this.props.loadTokens();
  }

  filterTokens = (e) => {
    let filtered = this.props.tokens.filter((token) => {
      return token.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    this.setState({
      tokens: filtered,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Header text="TOKENS :" />
        <div className={styles.subContainer}>
          <input className={styles.input} placeholder="Search for a token here..." onChange={this.filterTokens} />
          <div className={styles.tokensContainer}>
            {this.state.tokens.length < 1 ? <div className={styles.noResults}>No Tokens Found</div> : ''}
            <CSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              {
                this.state.tokens.map((token, i) => {
                  return (
                      <Token
                        key={token._id}
                        tokenName={token.name}
                        tokenURL={token.url}
                        totalIssued={((token.bought / token.trx_num) * token.num)}
                        totalSupply={token.total_supply}
                        endTime={token.end_time}
                        tokenID={token._id}
                      />
                    );
                })
              }
            </CSSTransitionGroup >
          </div>
          <div className={styles.buttonContainer}>
            <NavLink to="/tokens/createtoken">
              <Button className={`${buttonStyles.button} ${buttonStyles.gradient}`}>Create New Token</Button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(
  state => ({ tokens: state.tokens.tokens }),
  dispatch => ({
    loadTokens: () => {
      dispatch(loadTokens(dispatch));
    }
  })
)(TokenList);
