import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Comment = (props) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoader] = useState(false);
  let { id } = useParams();
  const history = useNavigate();

  async function requestComments() {
    setLoader(true);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/post/${id}/comments`
    );
    const json = await res.json();
    setComments(json);
    setLoader(false);
  }

  useEffect(() => {
    requestComments();
  }, []);

  return (
    <>
      <button onClick={() => history('/')} className="router-btn">
        Go Back
      </button>
      <div className="posts">
        <h4>Comments</h4>
        {loading ? <h3>Loading...</h3> : null}
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <h3 className="comment-name">{comment.name}</h3>
            <p className="comment-email">{comment.email}</p>
            <p className="comment-body">{comment.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comment;
