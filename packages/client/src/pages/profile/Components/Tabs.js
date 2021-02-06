import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FolderBlue from '../Icons/FolderBlue';
import FolderBlueDark from '../Icons/FolderBlueDark';
import FolderRed from '../Icons/FolderRed';
import FolderRedDark from '../Icons/FolderRedDark';
import FolderGreen from '../Icons/FolderGreen';
import FolderGreenDark from '../Icons/FolderGreenDark';
import FolderYellow from '../Icons/FolderYellow';
import FolderYellowDark from '../Icons/FolderYellowDark';
import SwipeableViews from 'react-swipeable-views';
import Box from '@material-ui/core/Box';

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
          <span className={classes.folderWrapper}>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderBlueDark title="Mentor" label="times" value={17} /> 
              : <FolderBlue title="Mentor" label="times" value={17} />
            }
          </div>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderRedDark title="Seniority" label="years" value={7} /> 
              : <FolderRed title="Seniority" label="years" value={7} />
            }
          </div>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderGreenDark title="Ponctuality" label="cheers" value={98} /> 
              : <FolderGreen title="Ponctuality" label="cheers" value={98} />
            }
          </div>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderYellowDark title="Content" label="cheers" value={62} /> 
              : <FolderYellow title="Content" label="cheers" value={62} />
            }
          </div>
          </span>
        </TabPanel>
        <TabPanel>
        <span className={classes.folderWrapper}>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderBlueDark title="Monthly Challenges" label="files" value={4} /> 
              : <FolderBlue title="Monthly Challenges" label="files" value={4} />
            }
          </div>
          </span>
        </TabPanel>
        <TabPanel>
          <span className={classes.folderWrapper}>
          <div>
            {theme.palette.type === "dark" 
              ? <FolderBlueDark title="Monthly Challenges" label="files" value={4} /> 
              : <FolderBlue title="Monthly Challenges" label="files" value={4} />
            }
          </div>
          </span>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default withStyles(styles)(CustomizedTabs);
