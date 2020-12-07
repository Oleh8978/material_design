import React from "react";
import { render } from "react-dom";
import CharPage from "./characters";

export default class CharFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  }

  render() {
    const { data } = this.state;
    return <CharPage data={data} />;
  }
}
