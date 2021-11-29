import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Comments from "./Comment";
import Posts from "./Posts";

// import logo from './logo.svg';

function App() {
  const [posts, setPosts] = useState([]);

  async function requestPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const json = await res.json();
    setPosts(json);
  }

  useEffect(() => {
    requestPosts();
  }, []);

  return (
    <Router>
      <div className="app">
        <h2 className="app-headers">Blog Posts</h2>
        <Routes>
          <Route path="/" element={<Posts postData={posts} />} />
          <Route path="/posts/:id/comments" element={<Comments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
