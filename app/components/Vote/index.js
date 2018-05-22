import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './VoteList.css';

import Header from '../ContentPrimaryHeader';
import Vote from './Vote';

import { Dropdown } from 'semantic-ui-react'
import { MoreIcon, WalletIcon, DownloadIcon } from '../Icons';

const votes = [
  {
    voteTitle: 'https://twitter.com/tronfund/3087340756334730567',
    lastBlock: '65986',
    blocksProduced: '5274',
    blocksMissed: '2400000'
  },
  {voteTitle: 'https://twitter.com/tronfund/3087340756334730567',lastBlock: '65986',blocksProduced: '5274',blocksMissed: '2400000'},
  {voteTitle: 'https://twitter.com/tronfund/3087340756334730567',lastBlock: '65986',blocksProduced: '5274',blocksMissed: '2400000'},
  {voteTitle: 'https://twitter.com/tronfund/3087340756334730567',lastBlock: '65986',blocksProduced: '5274',blocksMissed: '2400000'},
  {voteTitle: 'https://twitter.com/tronfund/3087340756334730567',lastBlock: '65986',blocksProduced: '5274',blocksMissed: '2400000'},
  {voteTitle: 'https://twitter.com/tronfund/3087340756334730567',lastBlock: '65986',blocksProduced: '5274',blocksMissed: '2400000'},
  {voteTitle: 'https://twitter.com/tronfund/3087340756334730567',lastBlock: '65986',blocksProduced: '5274',blocksMissed: '2400000'},
  {voteTitle: 'https://twitter.com/tronfund/3087340756334730567',lastBlock: '65986',blocksProduced: '5274',blocksMissed: '2400000'},
  {voteTitle: 'https://twitter.com/tronfund/3087340756334730567',lastBlock: '65986',blocksProduced: '5274',blocksMissed: '2400000'},
  {voteTitle: 'https://twitter.com/tronfund/3087340756334730567',lastBlock: '65986',blocksProduced: '5274',blocksMissed: '2400000'},
  {voteTitle: 'https://twitter.com/tronfund/3087340756334730567',lastBlock: '65986',blocksProduced: '5274',blocksMissed: '2400000'},
  {voteTitle: 'https://twitter.com/tronfund/3087340756334730567',lastBlock: '65986',blocksProduced: '5274',blocksMissed: '2400000'},
  {voteTitle: 'https://twitter.com/tronfund/3087340756334730567',lastBlock: '65986',blocksProduced: '5274',blocksMissed: '2400000'},
];

export default class VoteList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header className={styles.header} text="REPRESENTATIVE LISTING :" />
        <div className={styles.votesContainer}>
          {
            votes.map((votes, i) =>
              <Vote
                key={i}
                voteLabel={i + 1}
                voteTitle={votes.voteTitle}
                lastBlock={votes.lastBlock}
                blocksProduced={votes.blocksProduced}
                blocksMissed={votes.blocksMissed}
              />
            )
          }
        </div>
      </div>
    );
  }
}
