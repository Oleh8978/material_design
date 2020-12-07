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
import ImgageCard from "./charImg/charimg";

export default class Imag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }));
  }

  render() {
    const { data } = this.state;
    return <ImgageCard data={data} />;
  }
}
