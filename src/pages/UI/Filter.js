import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getTimeday } from "./../functions/randomizer";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

let nameSelect = "Species";
let value = "Species";

export default function SelectOption(props) {
  const classes = useStyles();
  const handleChange = (event) => {
    props.function(event.target.value);
  };
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.vall}
          onChange={handleChange}
        >
          {props.filterData.map((object) => {
            return (
              <MenuItem value={object.value} key={getTimeday()}>
                {object.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}
