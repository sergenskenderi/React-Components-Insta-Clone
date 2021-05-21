import React , {useState} from 'react';
import {v4 as uuidv4} from "uuid";

const CommentForm = props => {
  const {commentPost , postId} = props;
  const [comment , setComment] = useState("");

  function handleCommentInputChange(e){
    setComment(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    // check if comment is not empty
    if(comment.trim()){
        commentPost(postId , comment);
        //reset comment input
        setComment("");
    }
}

  return (
    <div className="comment-add-form">
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="comment"
          onChange={handleCommentInputChange}
          value = {comment} 
        />
        <button tybe="submit">Post</button>
       </form>
    </div>
  );
};


export default CommentForm;