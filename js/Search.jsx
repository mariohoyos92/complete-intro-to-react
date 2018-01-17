import React from "react";
import preload from "../data.json";

import ShowCard from "./ShowCard.jsx";

const Search = () => (
  <div className="search">
    {preload.shows.map(show => <ShowCard show={show} />)}
  </div>
);

export default Search;
