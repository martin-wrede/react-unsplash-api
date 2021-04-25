import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "-KpXQBXwl60mbVcoPP1aTSRI6x9hRkw6KmTgM6qo5VY",
});

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
      // console.log(json)
        setPics(json.results);
      });
  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        {" "}
        <label className="label" htmlFor="query">
          {" "}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={` Try "dog" or "apple" `}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          SearchPhotos
        </button>
      </form>
      <div className="card-list">
        {pics &&
          pics.map((pic) => (
            <div className="card" key={pic.id}>
              <img
                className="car"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>
          ))}
        {""}
      </div>
    </>
  );
}
