import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Comments from "./Comment";
import Posts from "./Posts";

// import logo from './logo.svg';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoader] = useState(false);


  async function requestPosts() {
    setLoader(true);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const json = await res.json();
    setPosts(json);
    setLoader(false);
  }

  useEffect(() => {
    requestPosts();
  }, []);

  return (
    <Router>
      <div className="app">
        <h2 className="app-headers">Blog Posts</h2>
        {loading ? <h3>Loading...</h3> : null}
        <Routes>
          <Route path="/" element={<Posts postData={posts} />} />
          <Route path="/posts/:id/comments" element={<Comments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
