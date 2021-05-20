// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeSection = props => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  const { likePost, numberOfLikes , liked} = props;
  const {comment , setComment} = useState(true);

  const toggleComment = () => {
    this.setComment(false);
  }

  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faHeart} onClick={likePost} style={{color: liked === true ? "red" : ""}}/>
        </div>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faComment} onClick={toggleComment}/>
        </div>
      </div>
      <p className='like-number'>{numberOfLikes} likes</p>
      {
        comment && <div className='comment-text'>
        <span className='user'>sergenskenderi</span>
        {' '}
          <input className="comment"
            type="text"
            placeholder="Comment"
          />
      </div>
      }
      
    </div>
  );
};

export default LikeSection;
