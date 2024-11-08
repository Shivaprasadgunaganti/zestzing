import React, { useState } from 'react';
import instagramFeed from '../feedData';
import { Link } from 'react-router-dom';
import Ellipse from '../../Ellipse/Ellipse';
import Like from '../../like/like';
import Comment from '../../comment/comment';
import Share from '../../share/share';
import Save from '../../save/save';
import Emoji from '../../Emoji/emoji';

// Helper function to format large numbers (like converting 1500 to "1.5k")
const formatLikes = (likeCount) => {
  if (likeCount >= 1000) {
    return (likeCount / 1000).toFixed(1) + 'k';
  }
  return likeCount;
};

const Feedcard = () => {
  // Initialize state for likes, comments, comment visibility, and comment input
  const [likes, setLikes] = useState(
    instagramFeed.map(feed => {
      let likeCount = feed.likeCount;
      if (typeof likeCount === 'string' && likeCount.includes('k')) {
        likeCount = parseFloat(likeCount.replace('k', '')) * 1000;
      } else {
        likeCount = Number(likeCount);
      }
      return { id: feed.id, likeCount: likeCount };
    })
  );

  const [comments, setComments] = useState(
    instagramFeed.map(feed => ({ id: feed.id, commentCount: Number(feed.commentCount), commentList: [] }))
  );

  const [commentInput, setCommentInput] = useState(
    instagramFeed.reduce((acc, feed) => ({ ...acc, [feed.id]: '' }), {})
  );

  const [commentVisible, setCommentVisible] = useState(
    instagramFeed.reduce((acc, feed) => ({ ...acc, [feed.id]: false }), {})
  );

  // Handle like button click
  const handleLike = (id) => {
    setLikes(prevLikes =>
      prevLikes.map(like =>
        like.id === id
          ? { ...like, likeCount: like.likeCount + 1 }
          : like
      )
    );
  };

  // Toggle comment section visibility
  const toggleComments = (id) => {
    setCommentVisible(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  // Handle comment input change
  const handleCommentChange = (id, value) => {
    setCommentInput({
      ...commentInput,
      [id]: value,
    });
  };

  // Handle comment submission
  const handleCommentSubmit = (id) => {
    if (commentInput[id].trim() === '') return; // Prevent empty comments
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === id
          ? {
              ...comment,
              commentCount: comment.commentCount + 1,
              commentList: [...comment.commentList, commentInput[id]], // Add new comment to list
            }
          : comment
      )
    );
    setCommentInput({ ...commentInput, [id]: '' }); // Clear input after submission
  };

  return (
    <>
      {instagramFeed.map((feed) => {
        const feedLikes = likes.find(like => like.id === feed.id)?.likeCount;
        const feedComments = comments.find(comment => comment.id === feed.id)?.commentCount;
        const feedCommentList = comments.find(comment => comment.id === feed.id)?.commentList;

        return (
          <div key={feed.id} className='w-full h-auto mb-6'>
            {/* Post details */}
            <div className='w-full h-auto flex items-center justify-between mb-2'>
              <div className='flex items-center gap-x-2'>
                <Link to="/" className="flex items-center justify-center flex-col flex-shrink-0">
                  <div className='w-10 h-10 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]'>
                    <img src={feed.profileImg} alt={feed.username} className='rounded-full w-full h-full object-cover p-[2.5px] bg-black' />
                  </div>
                </Link>
                <div className='flex items-center gap-x-2'>
                  <p className='text-white text-sm font-medium'>{feed.username}</p>
                  <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                  <p className='text-white text-sm font-medium'>{feed.time}</p>
                </div>
              </div>
              <Ellipse />
            </div>

            {/* Post image */}
            <div className='w-ful lg:max-h-[75vh] md:max-h-[70vh] sm:mx-h-[65vh] mx-h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh] md:min-h-[55vh] sm-min-h-[50vh] min-h-[45vh] border border-gray-300 rounded overflow-hidden mb-3 '>
              <img src={feed.postImg} alt={feed.caption} className='w-full h-full rounded object-center' />
            </div>

            {/* User actions: like, comment, share, save */}
            <div className='w-full h-auto flex items-center justify-between'>
              <div className='flex items-center gap-x-3'>
                <button onClick={() => handleLike(feed.id)}>
                  <Like />
                </button>
                <button onClick={() => toggleComments(feed.id)}>
                  <Comment />
                </button>
                <Share />
              </div>
              <Save />
            </div>

            {/* Like count */}
            <Link to="/" className='w-full h-full flex items-center gap-x-2 text-base text-gray-200 font-medium my-2'>
              <div className='flex items-center'>
                <img src={feed.mutualFrndImg1} alt={feed.likeCount} className='w-5 h-5 rounded-full object-full p-[1.5px] bg-black' />
                <img src={feed.mutualFrndImg2} alt={feed.likeCount} className='w-5 h-5 rounded-full object-full p-[1.5px] bg-black -ml-3' />
                {formatLikes(feedLikes)} likes
              </div>
            </Link>

            {/* Post caption */}
            <div className='w-full h-auto flex items-center gap-x-1'>
              <div className='w-full h-auto text-sm text-gray-200 font-thin'>
                <Link to="/" className='text-white font-medium text-sm me-1'>{feed.username}</Link>
                {feed.caption}
                <Link to="/" className='text-gray-400 text-sm ms-1'>more</Link>
              </div>
            </div>

            {/* Comment count */}
            <Link to="/" className='text-gray-400 font-normal my-2' onClick={() => toggleComments(feed.id)}>
              View all {feedComments} comments
            </Link>

            {/* Comment section (shown when comments are toggled) */}
            {commentVisible[feed.id] && (
              <div className="comment-section">
                {feedCommentList.length > 0 ? (
                  <ul className="text-gray-400 font-normal my-2">
                    {feedCommentList.map((comment, index) => (
                      <li key={index}>{comment}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 font-normal my-2"> comments </p>
                )}

                {/* Comment input */}
                <div className='w-full h-auto flex items-center justify-between border-b border-b-gray-500'>
                  <input
                    type='text'
                    value={commentInput[feed.id]}
                    onChange={(e) => handleCommentChange(feed.id, e.target.value)}
                    className='w-[90%] h-[auto] bg-transparent border-none outline-none focus:outline-none text-sm text-gray-400 py-3'
                    placeholder="Add a comment..."
                  />
                  <button onClick={() => handleCommentSubmit(feed.id)} className='text-blue-400'>
                    Post
                  </button>
                  <Emoji />
                </div>
              </div>
            )}
            
          </div>
        );
      })}
    </>
  );
};

export default Feedcard;

