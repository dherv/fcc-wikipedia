import React, {
  useState,
  unstable_useTransition as useTransition,
  Suspense,
} from "react";
import { hot } from "react-hot-loader";
import { wrapPromise } from "./api";
import "./App.css";

const WikiPageList = ({ resource }) => {
  return (
    <ul>
      {resource.read().map(([id, page]) => (
        <li key={id} className="wikipage_list-item">
          {page.thumbnail ? (
            <img
              className="wikipage_list-img"
              style={{
                backgroundImage: `url(${page.thumbnail.source})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          ) : (
            <svg viewBox="0 0 30 30" width="30px">
              <g>
                <rect x="0" y="0" width="30" height="30" fill="silver"></rect>
                <text x="15" y="21" textAnchor="middle" fill="#fff">
                  W
                </text>
              </g>
            </svg>
          )}
          <a href={page.fullurl} className="wikipage_list-anchor">
            {page.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

const fetchWiki = (value) => {
  return wrapPromise(
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=pageimages|info&inprop=url&list=search&gsrsearch=${value}`
    )
      .then((response) => response.json())
      .then((res) =>
        res.query ? Object.entries(res.query.pages) : []
      )
      .catch((error) => console.error(error))
  );
};

const initialQuery = "meaning";
const initialResource = fetchWiki(initialQuery);

const App = () => {
  const [query, setQuery] = useState(initialQuery);
  const [resource, setResource] = useState(initialResource);
  const [isPending, startTransition] = useTransition({
    timeoutMs: 5000,
  });

  const handleChange = (event) => {
    setQuery(event.target.value);

    startTransition(() => {
      setResource(fetchWiki(event.target.value));
    });
  };

  return (
    <section className="page">
      <label htmlFor="search">search</label>
      <input id="search" value={query} onChange={handleChange}></input>
      <Suspense fallback={<p>Loading...</p>}>
        <WikiPageList resource={resource} />
      </Suspense>
    </section>
  );
};

export default hot(module)(App);
