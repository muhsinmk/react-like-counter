import Post from "./components/Post";
import data from "./data";
import { useState } from "react";

function App() {
  // Use atate
  const [postLike, setPostLike] = useState(data);
  return (
    <div className="App">
      {postLike.map((post) => {
        return (
          <Post
            key={post.id}
            {...post}
            postLike={postLike}
            setPostLike={setPostLike}
          />
        );
      })}
    </div>
  );
}

export default App;
