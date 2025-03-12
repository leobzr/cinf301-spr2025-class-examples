import { useState, useEffect } from 'react';
import axios from 'axios';

function GetImages() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getResults() {
      const results = await axios(`https://images-api.nasa.gov/search?q=${query}`);
      setPhotos(results.data["collection"]["items"]);
      setLoading(true);
    }
    getResults();
  }, [query])

  const handleChangeEvent = e => {
    setQuery(e.target.value);
  }

  return (
    <div>
      <h1>NASA Data</h1>
      <form>
        <label>
          Query: {" "}
          <input type="text" value={query} onChange={handleChangeEvent} />
        </label>
      </form>
      <h2>Query: {query}</h2>

      {/* See how this below is a problem because useEffect not done */}
      {/* {photos[0].href} */}

      {loading && photos.map(entry => (
        <li>
          {entry.href}
        </li>
      ))}
    </div>
  );
}

export default GetImages;
