import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { filter, sortBy } from 'lodash';

import { loadWitnesses } from '../../actions/witnesses';
import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';

import Header from '../ContentPrimaryHeader';
import Vote from './Vote';

import styles from './VoteList.css';

class VoteList extends Component {
  componentDidMount() {
    this.props.loadWitnesses();
  }

  renderWitnesses() {
    let { witnesses } = this.props;
    if (witnesses.length === 0) {
      return (
        <div>
          <h1>NOTHING HERE</h1>
        </div>
      );
    }

    witnesses = filter(witnesses, w => w.url !== -1);
    witnesses = sortBy(witnesses, w => w.url);

    return (
      <div className={styles.votesContainer}>
        {
          witnesses.map((rep, index) =>
            <Vote
              key={index}
              voteLabel={index + 1}
              voteTitle={rep.url}
              lastBlock={rep.latestBlockNumber}
              blocksProduced={rep.producedTotal}
              blocksMissed={rep.missedTotal}
            />)
        }
      </div>
    );
  }

  render() {

    let { witnesses } = this.props;

    return (
      <div className={styles.container}>
        <Header className={styles.header} text="REPRESENTATIVE LISTING :" />
        {this.renderWitnesses()}
      </div>
    );
  }
}

export default connect(
  state => ({ witnesses: state.witnesses }),
  dispatch => ({
    loadWitnesses: () => {
      dispatch(loadWitnesses(dispatch));
    }
  }))(VoteList);
