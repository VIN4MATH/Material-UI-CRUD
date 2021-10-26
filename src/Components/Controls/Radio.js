import {
  createMuiTheme,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";

const theme = createMuiTheme({
  overrides: {
    MuiRadio: {
      root: {
        color: "#011627",
      },
      colorSecondary: {
        "&$checked": {
          color: "#f5af09",
        },
      },
    },
  },
});

export default function RadioCnt(props) {
  const { name, label, value, onChange, items } = props;
  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <RadioGroup row name={name} value={value} onChange={onChange}>
          {items.map((item) => (
            <FormControlLabel
              key={item.id}
              value={item.id}
              control={<Radio />}
              label={item.title}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
}
