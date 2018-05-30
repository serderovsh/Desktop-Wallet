import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filter, sortBy } from 'lodash';

import { loadWitnesses } from '../../actions/witnesses';
import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';

import Header from '../ContentPrimaryHeader';
import Vote from './Vote';

import { CSSTransitionGroup } from 'react-transition-group';

import styles from './VoteList.css';

class VoteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: '',
      witnesses: this.props.witnesses.witnesses
    };
  }

  filterTokens = (e) => {
    let filtered = this.props.witnesses.witnesses.filter((witness) => {
      return witness.url.toLowerCase().includes(e.target.value.toLowerCase());
    });

    this.setState({
      witnesses: filtered,
    });
  };

  componentDidMount() {
    this.props.loadWitnesses();
  }


  render() {

    let witnesses = this.state.witnesses;

    return (
      <div className={styles.container}>
        <Header className={styles.header} text="REPRESENTATIVE LISTING :" />
        <input className={styles.input} placeholder="Search for a Witness here..." onChange={this.filterTokens} />
        <div className={styles.votesContainer}>
          {witnesses.length < 1 ? (<div className={styles.noResults}>No Witnesses Found</div>) : ''}
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {
              witnesses.map((rep, i) =>
                <Vote
                  key={i}
                  voteLabel={i + 1}
                  voteTitle={rep.url}
                  lastBlock={rep.latestblocknum}
                  blocksProduced={rep.totalproduced}
                  blocksMissed={rep.totalmissed}
                  totalVote={rep.votecount}
                  address={rep.address}
                />)
            }
          </CSSTransitionGroup >
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ witnesses: state.witnesses, searchString: state.app.searchString }),
  dispatch => ({
    loadWitnesses: () => {
      dispatch(loadWitnesses(dispatch));
    }
  })
)(VoteList);
