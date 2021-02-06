import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Fab
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon
} from "@material-ui/icons";
import classNames from "classnames";
import {
  Redirect
} from "react-router-dom";


//images
import profile from "../../images/JDP_7014.jpg";

// styles
import useStyles from "./styles";

// components
import { Badge, Typography, Avatar } from "../Wrappers/Wrappers";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar
} from "../../context/LayoutContext";
import { useUserDispatch, signOut } from "../../context/UserContext";

const messages = [
  {
    id: 0,
    variant: "warning",
    name: "Jane Hew",
    message: "Hey! How is it going?",
    time: "9:32"
  },
  {
    id: 1,
    variant: "success",
    name: "Lloyd Brown",
    message: "Check out my new Dashboard",
    time: "9:18"
  },
  {
    id: 2,
    variant: "primary",
    name: "Mark Winstein",
    message: "I want rearrange the appointment",
    time: "9:15"
  },
  {
    id: 3,
    variant: "secondary",
    name: "Liana Dutti",
    message: "Good news from sale department",
    time: "9:09"
  }
];

const notifications = [
  { id: 0, color: "warning", message: "Check out this awesome ticket" },
  {
    id: 1,
    color: "success",
    type: "info",
    message: "What is the best way to get ..."
  },
  {
    id: 2,
    color: "secondary",
    type: "notification",
    message: "This is just a simple notification"
  },
  {
    id: 3,
    color: "primary",
    type: "e-commerce",
    message: "12 new orders has arrived today"
  }
];

export default function Header(props) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  var userDispatch = useUserDispatch();

  // local
  var [mailMenu, setMailMenu] = useState(null);
  var [isMailsUnread, setIsMailsUnread] = useState(true);
  var [notificationsMenu, setNotificationsMenu] = useState(null);
  var [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
  var [profileMenu, setProfileMenu] = useState(null);
  var [isSearchOpen, setSearchOpen] = useState(false);
  const [isSmall, setSmall] = useState(false);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;
    setSmall(isSmallScreen);
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButton,
            classes.headerMenuButtonCollapse
          )}
        >
          {(!layoutState.isSidebarOpened && isSmall) ||
          (layoutState.isSidebarOpened && !isSmall) ? (
            <ArrowBackIcon
              classes={{
                root: classNames(classes.headerIcon, classes.headerIconCollapse)
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(classes.headerIcon, classes.headerIconCollapse)
              }}
            />
          )}
        </IconButton>
        <Typography variant="h6" weight="medium" className={classes.logotype}>
          Sykx Lab Worx Together
        </Typography>
        <div className={classes.grow} />
        <div
          className={classNames(classes.search, {
            [classes.searchFocused]: isSearchOpen
          })}
        >
          <div
            className={classNames(classes.searchIcon, {
              [classes.searchIconOpened]: isSearchOpen
            })}
            onClick={() => setSearchOpen(!isSearchOpen)}
          >
            <SearchIcon classes={{ root: classes.headerIcon }} />
          </div>
          <form onSubmit={() => <Redirect to="/app/user/list" />}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </form>
        </div>
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          onClick={e => {
            setNotificationsMenu(e.currentTarget);
            setIsNotificationsUnread(false);
          }}
          className={classes.headerMenuButton}
        >
          <Badge
            badgeContent={isNotificationsUnread ? notifications.length : null}
            color="warning"
          >
            <NotificationsIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          onClick={e => {
            setMailMenu(e.currentTarget);
            setIsMailsUnread(false);
          }}
          className={classes.headerMenuButton}
        >
          <Badge
            badgeContent={isMailsUnread ? messages.length : null}
            color="secondary"
          >
            <MailIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={e => setProfileMenu(e.currentTarget)}
        >
          <Avatar
            alt="Selim Lalaoui"
            src={profile}
            classes={{ root: classes.headerIcon }}
          />
        </IconButton>
        <Typography
          block
          variant="body2"
          style={{ display: "flex", alignItems: "center", marginLeft: 8 }}
        >
          Hi,&nbsp;
          <Typography variant="body2" weight={"bold"}>
            Selim Lalaoui
          </Typography>
        </Typography>
        <Menu
          id="mail-menu"
          open={Boolean(mailMenu)}
          anchorEl={mailMenu}
          onClose={() => setMailMenu(null)}
          MenuListProps={{ className: classes.headerMenuList }}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium">
              New Messages
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              component="a"
              color="secondary"
            >
              {messages.length} New Messages
            </Typography>
          </div>
          {messages.map(message => (
            <MenuItem key={message.id} className={classes.messageNotification}>
              <div className={classes.messageNotificationSide}>
                <Typography size="sm" color="text" colorBrightness="secondary">
                  {message.time}
                </Typography>
              </div>
              <div
                className={classNames(
                  classes.messageNotificationSide,
                  classes.messageNotificationBodySide
                )}
              >
                <Typography weight="medium" gutterBottom>
                  {message.name}
                </Typography>
                <Typography color="text" colorBrightness="secondary">
                  {message.message}
                </Typography>
              </div>
            </MenuItem>
          ))}
          <Fab
            variant="extended"
            color="primary"
            aria-label="Add"
            className={classes.sendMessageButton}
          >
            Send New Message
            <SendIcon className={classes.sendButtonIcon} />
          </Fab>
        </Menu>
        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium">
              Selim Lalaoui
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              component="a"
              color="primary"
              href="https://sykxlab.com"
            >
              sykxlab.com
            </Typography>
          </div>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Profile
          </MenuItem>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Tasks
          </MenuItem>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Messages
          </MenuItem>
          <div className={classes.profileMenuUser}>
            <Typography
              className={classes.profileMenuLink}
              color="primary"
              onClick={() => signOut(userDispatch, props.history)}
            >
              Sign Out
            </Typography>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
