import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filter, sortBy } from 'lodash';

import { loadWitnesses } from '../../actions/witnesses';
import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';

import Header from '../ContentPrimaryHeader';
import Vote from './Vote';

import styles from './VoteList.css';

class VoteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: '',
      witnesses: this.props.witnesses
    };
  }

  filterTokens = (e) => {
    let filtered = this.props.witnesses.filter((witness) => {
      return witness.url.toLowerCase().includes(e.target.value.toLowerCase());
    });

    this.setState({
      witnesses: filtered,
    });
  };

  componentDidMount() {
    this.props.loadWitnesses();
  }

  renderWitnesses(witnesses) {
    console.log("onRenderWitnesses");
    let { searchString } = this.props;
    witnesses = filter(witnesses, w => w.url.toUpperCase().indexOf(searchString) !== -1);
    witnesses = sortBy(witnesses, w => w.url);

    return (
      <div className={styles.votesContainer}>
        {witnesses.length < 1 ? (<div className={styles.noResults}>No Witnesses Found</div>) : ''}
        {
          witnesses.map((rep, index) =>
            <Vote
              key={index}
              voteLabel={index + 1}
              voteTitle={rep.url}
              lastBlock={rep.latestblocknum}
              blocksProduced={rep.totalproduced}
              blocksMissed={rep.totalmissed}
              totalVote={rep.votecount}
            />)
        }
      </div>
    );
  }

  render() {

    let witnesses = this.props.witnesses.witnesses;

    return (
      <div className={styles.container}>
        <Header className={styles.header} text="REPRESENTATIVE LISTING :"/>
        <input className={styles.input} placeholder="Search for a Witness here..." onChange={this.filterTokens}/>
        {this.renderWitnesses(witnesses)}
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
