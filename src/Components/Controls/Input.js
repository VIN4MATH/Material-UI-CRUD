import { makeStyles, TextField } from "@material-ui/core";
import React from "react";
   
const useStyles =makeStyles(theme=> ({
  root:{
    '&.MuiTextField-root':{
      color:'red'
    }

  }
}))

export default function InputCnt(Props) {
  const { name, label, value, onChange,error=null,...other} = Props;
  const classes =useStyles();

  

  return (
    <TextField 
      className={classes.root}
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
       {...other}
      {...(error && {error:true,helperText:error})}
    />
  );
}
