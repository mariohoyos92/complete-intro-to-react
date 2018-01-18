// @flow
import React, { Component } from "react";

import preload from "../data.json";
import ShowCard from "./ShowCard";

type Props = {};
type State = {
  searchTerm: string
};

class Search extends Component<Props, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(
    event: SyntheticKeyboardEvent<*> & { target: HTMLInputElement }
  ) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>SVideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="search"
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
