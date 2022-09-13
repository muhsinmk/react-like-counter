import React from "react";
import Icon from "./Icon";
import Likes from "./Likes";

function Post({ id, user, image, likes, postLike, setPostLike }) {
  //Handler Fn
  const postLikeHandler = (likeID) => {
    setPostLike((prev) => {
      return prev.map((likeItem) => {
        console.log(likeItem);
        if (likeItem.id === likeID) {
          return { ...likeItem, likes: likeItem.likes++ };
        } else return likeItem;
      });
    });
  };

  return (
    <div className="postItem">
      <div className="postHeader">
        <div className="avatar">
          <Icon />
        </div>
        <h2>{user}</h2>
      </div>
      <div className="postImage">
        <img src={image} alt="" />
      </div>
      <div className="postFooter">
        <Likes likes={likes} />
        <button className="addLike" onClick={() => postLikeHandler(id)}>
          Add Like
        </button>
      </div>
    </div>
  );
}

export default Post;
