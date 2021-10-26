import React from "react";
import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";

export default function CheckboxCnt(props) {
  const { name, label, value, onChange } = props;

  const convertToDefEventpara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefEventpara(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
}
