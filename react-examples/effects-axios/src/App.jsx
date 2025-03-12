import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(1);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getResults() {
      const results = await axios(`https://jsonplaceholder.typicode.com/posts/${count}`);
      setPosts(results.data)
    }
    getResults()
  }, [count])
  console.log(posts)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h3>
        {posts.body}
      </h3>
    </div>
  );
}

export default App;