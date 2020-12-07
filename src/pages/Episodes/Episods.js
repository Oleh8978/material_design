import React from "react";
import { render } from "react-dom";
import EpisodPage from "./EpisodsComp/episods";

export default class Episods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/episode/")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  }

  render() {
    const { data } = this.state;
    return <EpisodPage data={data} />;
  }
}
