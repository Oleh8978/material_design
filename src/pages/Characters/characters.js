import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EnhancedTableHead from "./TableRowHead";
import { getTimeday } from "./../functions/randomizer";
import { getComparator } from "./../functions/getComparator";
import { stableSort } from "./../functions/stableSort";
import RowsOfTable from "./TableRow";
import { ListItem } from "@material-ui/core";
import {
  dataFilter,
  nameForFilter,
  dataFilterGen,
  nameForFilterGen,
  dataFilterStatus,
  nameForFiltertatus
} from "./dataForFilter/dataforfilter";
import { filterFunction } from "./functionsForFil/filters";

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("image");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [fillterValSpec, setFillterValSpec] = React.useState("");
  const [fillterValGend, setFillterValGend] = React.useState("");
  const [fillterValStat, setFillterValStat] = React.useState("");
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const setSpecies = (arg) => {
    setFillterValSpec(arg);
  };

  const setGender = (arg) => {
    setFillterValGend(arg);
  };
  const setStatus = (arg) => {
    setFillterValStat(arg);
  };

  const filterSpecData = [
    nameForFilter,
    dataFilter,
    setSpecies,
    fillterValSpec
  ];

  const filterDataGen = [
    nameForFilterGen,
    dataFilterGen,
    setGender,
    fillterValGend
  ];
  const filterSpecStat = [
    nameForFiltertatus,
    dataFilterStatus,
    setStatus,
    fillterValStat
  ];

  let data = filterFunction(
    props.data,
    fillterValSpec,
    fillterValStat,
    fillterValGend
  );

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, props.data.length - page * rowsPerPage);
  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={"medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                filterSpecData={filterSpecData}
                filterDataGen={filterDataGen}
                filterSpecStat={filterSpecStat}
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={props.data.length}
              />
              <TableBody>
                {stableSort(data, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((characters, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    // console.log(characters);
                    return (
                      <>
                        <RowsOfTable labelId={labelId} data={characters} />
                      </>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{ height: 53 * emptyRows }}
                    key={getTimeday()}
                  >
                    <TableCell colSpan={3} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}
