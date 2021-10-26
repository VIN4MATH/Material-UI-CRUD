import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#011627",
    transform:'translateZ(0)',
    padding:'0px',
    margin:'0px',   
  
  },
  searchInput: {
    opacity: "0.6",
    padding: "0px 5px",
    fontSize: "0.8rem",
    color: "white",
    border: "1px solid white",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    "& .MuiSvgIcon-root": {
      marginRight: "8px",
    },
  },
  btn: {
    color: "white",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              className={classes.searchInput}
              placeholder="Search"
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid>

          <Grid item sm></Grid>

          <Grid item>
            <IconButton className={classes.btn}>
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton className={classes.btn}>
              <Badge badgeContent={4} color="primary">
                <ChatIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton className={classes.btn}>
              <Badge color="secondary">
                <PowerSettingsNewIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
