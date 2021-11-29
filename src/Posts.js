import { Link } from "react-router-dom";

const Posts = ({ postData }) => {
  return (
    <div>
      {postData.map((post) => (
        <div className="posts" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`posts/${post.id}/comments`}>
            <p className="comments">Comments</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
