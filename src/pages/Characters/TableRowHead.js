import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { headCell } from "./headCels";
import { getTimeday } from "./../functions/randomizer";
import SelectOption from "./../UI/Filter";

export default function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  // console.log(props.filterDataGen);
  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell colSpan={3}>
          <SelectOption
            name={props.filterSpecData[0]}
            vall={props.filterSpecData[3]}
            function={props.filterSpecData[2]}
            filterData={props.filterSpecData[1]}
          />
          <SelectOption
            name={props.filterDataGen[0]}
            vall={props.filterDataGen[3]}
            function={props.filterDataGen[2]}
            filterData={props.filterDataGen[1]}
          />
          <SelectOption
            name={props.filterSpecStat[0]}
            vall={props.filterSpecStat[3]}
            function={props.filterSpecStat[2]}
            filterData={props.filterSpecStat[1]}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell align={"left"}>Image</TableCell>
        {headCell.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.image ? "left" : "center"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
