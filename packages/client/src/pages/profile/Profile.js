import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/styles";

import Tabs from './Components/Tabs';
import Donut from './Components/DonutChart';
import MediaBlock from './Components/MediaBlock';
import ProfileIcon from '../../images/JDP_7014.jpg';
import MediumIcon from '../../images/profile/LinkedinIcon.svg';
import FacebookIcon from '../../images/profile/FacebookIcon.svg';
import InstagramIcon from '../../images/profile/InstagramIcon.svg';


// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";

function Profile() {
  var classes = useStyles();
  var theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={6} lg={5}>
        <Widget>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5} md={5} lg={5}>
              <div className={classes.visualProfile}>
                <div>
                  <img width="100%" src={ProfileIcon} style={{borderRadius:'50%'}} alt="profile" />
                </div>
        
              </div>
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <div class={classes.profileDescription}>
                <Typography variant="h3" className={classes.profileTitle}>
                  Selim Lalaoui
                </Typography>
                <span className={classes.profileSubtitle}>Architect</span>
                <a className={classes.profileExternalRes} href="https://sykxlab.com">sykxlab.com</a>
                <div>
                </div>
                <div className={classes.socials}>
                  <a href="#"><img src={FacebookIcon} alt="FacebookIcon" /></a>
                  <a href="#"><img src={MediumIcon} alt="MediumIcon" /></a>
                  <a href="#"><img src={InstagramIcon} alt="InstagramIcon" /></a>
                </div>
              </div>
            </Grid>
          </Grid>
        </Widget>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={7}>
        <Widget title="Badges" disableWidgetMenu>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Tabs />
            </Grid>
          </Grid>
        </Widget>
      </Grid>

      <Grid item xs={12} lg={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <Widget widgetWithDropdown
              bodyClass={classes.mediaBlockPadding}
              title="Cheers"
            >
              <Grid container spacing={1}>
                <MediaBlock />
              </Grid>
            </Widget>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <Widget widgetWithDropdown
              className={classes.adjustHeight}
              title="Team badges"
            >
              <Donut />
            </Widget>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

// #######################################################################

export default Profile;
