import React from "react";
import PropTypes from "prop-types";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import { getTimeday } from "./../../../functions/randomizer";
import { timeConverter } from "./../../../functions/timeConverter";
import { checker } from "./checker/checker";
import Imag from "./charImgs/charImgFath";

export default function ColapseBox(props) {
  return (
    <TableRow key={getTimeday()}>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={props.open} timeout="auto" unmountOnExit>
          <Box margin={1}>
            <Typography variant="h6" gutterBottom component="div"></Typography>
            <Table size="small" aria-label="purchases">
              <TableBody>
                {Object.entries(props.data).map((obj) => {
                  return (
                    <TableRow key={getTimeday()}>
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          paddingLeft: "10%",
                          paddingBottom: 0,
                          paddingTop: 0,
                          borderBottom: "none"
                        }}
                        colSpan={3}
                      >
                        {checker(obj)}
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow key={getTimeday()}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      paddingLeft: "10%",
                      paddingBottom: 0,
                      paddingTop: 0,
                      borderBottom: "none"
                    }}
                    colSpan={6}
                  >
                    Created: {timeConverter(props.data.created)}
                  </TableCell>
                </TableRow>
                <TableRow key={getTimeday()}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      paddingLeft: "10%",
                      paddingBottom: 0,
                      paddingTop: 0,
                      borderBottom: "none"
                    }}
                    colSpan={6}
                  >
                    <h1 style={{ marginLeft: "30%" }}>Chraracters</h1>
                  </TableCell>
                </TableRow>
                <TableRow key={getTimeday()}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      paddingLeft: "10%",
                      paddingBottom: 0,
                      paddingTop: 0,
                      borderBottom: "none"
                    }}
                    colSpan={6}
                  >
                    {props.data.characters.map((url) => {
                      return <Imag url={url} />;
                    })}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}
