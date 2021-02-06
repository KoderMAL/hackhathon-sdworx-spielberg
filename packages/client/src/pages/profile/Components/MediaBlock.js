import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import cheers from '../../../images/profile/cheers.svg'
import distrib from '../../../images/profile/distrib.svg'
import rank from '../../../images/profile/rank.svg'
import bu from '../../../images/profile/bu.svg'

const styles = (theme) => ({
  mediaIndicator: {
    fontSize: 18,
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '22px 0',
    '& strong': {
      margin: '1px 0',
    },
    '& span': {
      fontSize: 13,
      opacity: .6,
    }
  },
  mediaIconsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    '@media (max-width: 1280px)': {
      marginTop: 40,
    }
  },
  valueLabel: {
    marginBottom: '-8px',
  }
})

const MediaBlock = ({ classes }) => {
  return (
    <div className={classes.mediaIconsWrapper}>
      <div className={classes.mediaIndicator}>
        <img src={cheers}></img>
        <strong className={classes.valueLabel}>194</strong>
        <span>Received</span>
      </div>
      <div className={classes.mediaIndicator}>
        <img src={distrib}></img>
        <strong>2</strong>
        <span>To distribute</span>
      </div>
      <div className={classes.mediaIndicator}>
        <img src={bu}></img>
        <strong>970</strong>
        <span>Business unit</span>
      </div>
      <div className={classes.mediaIndicator}>
        <img src={rank}></img>
        <strong>2nd</strong>
        <span>Team Rank</span>
      </div>
    </div>
  )
}

export default withStyles(styles)(MediaBlock);