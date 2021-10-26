import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import Header from "../Components/Header";

import SideMenu from "../Components/Sidemenu";
import Employees from "../Pages/Employees/Employees";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f5af09",
    },
    secondary:{
      main:'#011627',
    },
    background: {
      default: "#eaecef",
    },
  },
  shape: {
    borderRadius: "12px",
  },

});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "300px",
    width: "100%",
  },
});
function App(props) {
  const classes = useStyles();

  return (
    
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />

        <Employees/>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
