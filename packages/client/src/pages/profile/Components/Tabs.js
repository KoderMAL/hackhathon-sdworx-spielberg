import React from 'react';
import { Grid } from '@material-ui/core'
import { withStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import Box from '@material-ui/core/Box';

import mentor from '../../../images/profile/mentor.svg'
import seniority from '../../../images/profile/seniority.svg'
import ponctuality from '../../../images/profile/ponctuality.svg'
import content from '../../../images/profile/content.svg'
import challenge from '../../../images/profile/challenge.svg'
import confluence from '../../../images/profile/confluence.svg'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index }
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const AntTabs = withStyles((theme) => ({
  root: {
    borderBottom: `1px solid rgba(185, 185, 185, 0.3)`,
  },
  indicator: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 2,
  },
}))(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontSize: '14px',
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(0),
    color: theme.palette.text.primary,
    fontFamily: [
      'Roboto',
      'sans-serif'
    ].join(','),
    '&:hover': {
      color: theme.palette.text.primary,
      opacity: 1,
    },
    '&$selected': {
      color: theme.palette.text.primary,
    },
    '&:focus': {
      color: theme.palette.text.primary,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    '& .react-swipeable-view-container': {
      transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s !important'
    },
    paddingBottom: 0,
  },
  padding: {
    padding: theme.spacing(3),
    paddingBottom: 0,
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
  folderWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  }
})

function CustomizedTabs({ classes }) {
  const [value, setValue] = React.useState(0);
  const [index, setIndex] = React.useState(0);

  const handleChange = (event, index) => {
    setIndex(index)
  }

  const handleChangeIndex = (index) => {
    setIndex(index)
  }

  const theme = useTheme();

  return (
    <div class={classes.root}>
      <AntTabs
        value={index}
        onChange={handleChange}
      >
        <AntTab value={0} label="Work" />
        <AntTab value={1} label="Events" />
        <AntTab value={2} label="Social" />
      </AntTabs>
      <SwipeableViews
        index={index}
        style={{ padding: '24px 0 0 ' }}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel>
          <Grid container direction="row">
          <Grid container xs={3} direction='column' alignItems='center'>
            <Grid>
              <img src={mentor}></img>
            </Grid>
            <Grid>
              <strong className={classes.valueLabel}>Mentor</strong>
            </Grid>
            <Grid>              
              <span>17 times</span>
            </Grid>

          </Grid>

          <Grid container xs={3} direction='column' alignItems='center'>
            <Grid>
              <img src={seniority}></img>
            </Grid>
            <Grid>
              <strong className={classes.valueLabel}>Seniority</strong>
            </Grid>
            <Grid>              
              <span>7 years</span>
            </Grid>

          </Grid>

          <Grid container xs={3} direction='column' alignItems='center'>
            <Grid>
              <img src={ponctuality}></img>
            </Grid>
            <Grid>
              <strong className={classes.valueLabel}>Poctuality</strong>
            </Grid>
            <Grid>              
              <span>7 badges</span>
            </Grid>

          </Grid>

          <Grid container xs={3} direction='column' alignItems='center'>
            <Grid>
              <img src={content}></img>
            </Grid>
            <Grid>
              <strong className={classes.valueLabel}>Content</strong>
            </Grid>
            <Grid>              
              <span>7 badges</span>
            </Grid>

          </Grid>
          </Grid>
        </TabPanel>

        <TabPanel>
        <Grid container direction="row">
          <Grid container xs={3} direction='column' alignItems='center'>
              <Grid>
                <img src={challenge}></img>
              </Grid>
              <Grid>
                <strong className={classes.valueLabel}>Monthly Challenges</strong>
              </Grid>
              <Grid>              
                <span>14 badges</span>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel>
        <Grid container direction="row">
          <Grid container xs={3} direction='column' alignItems='center'>
              <Grid>
                <img src={confluence}></img>
              </Grid>
              <Grid>
                <strong className={classes.valueLabel}>Confluence</strong>
              </Grid>
              <Grid>
                <span>323 likes</span>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default withStyles(styles)(CustomizedTabs);
