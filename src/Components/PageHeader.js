import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fdfdff",
    padding:theme.spacing(1)
  },
  pageHeader: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(8),
    display: "flex",
    marginBottom: theme.spacing(1),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(1),    
    color: '#f5af09',
    
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    color:'#011627',
    '& .MuiTypography-subtitle2':{
        opacity:'0.6',
    },
  }
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const { title, subTitle, icon } = props;
  return (
    <Paper elevation={3} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>

        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
