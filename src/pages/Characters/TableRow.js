import React, { useState, useEffect } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { getTimeday } from "./../functions/randomizer";
import ColapseBox from "./colapsBox/colapsebx";

export default function RowsOfTable(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow
        hover
        onClick={() => setOpen(!open)}
        tabIndex={-1}
        key={getTimeday()}
      >
        <TableCell></TableCell>
        <TableCell component="th" id={props.labelId} scope="row" padding="none">
          <img
            src={props.data.image}
            style={{ width: "75px", height: "75px", borderRadius: "55px" }}
            alt="Logo"
          />
        </TableCell>
        <TableCell align="center">{props.data.name}</TableCell>
      </TableRow>
      <ColapseBox open={open} key={props.data.image} data={props.data} />
    </>
  );
}
