import React, { useRef, useEffect, useState } from 'react';
import FirstReelVideo from "../components/Feeds/reels/reel1.mp4";
import SecondReelVideo from "../components/Feeds/reels/reel2.mp4";
import ThirdReelVideo from "../components/Feeds/reels/reel3.mp4";
import FourthReelVideo from "../components/Feeds/reels/reel4.mp4";
import FifthReelVideo from "../components/Feeds/reels/reel5.mp4";
import Largenav from './header/largenav';
import "./explore.css";


// Profile picture URLs for each user
const profilePictures = [
  "https://randomuser.me/api/portraits/men/1.jpg", // John Doe
  "https://randomuser.me/api/portraits/women/1.jpg", // Jane Smith
  "https://randomuser.me/api/portraits/men/2.jpg", // Michael Lee
  "https://randomuser.me/api/portraits/women/2.jpg", // Sarah Kim
  "https://randomuser.me/api/portraits/men/3.jpg", // David Chen
];

const Exploree = () => {
  const videosRef = useRef([]);
  const [likes, setLikes] = useState([0, 0, 0, 0, 0]);
  const [comments, setComments] = useState([[], [], [], [], []]);
  const [commentInput, setCommentInput] = useState("");

  // List of users for each video
  const users = ["John Doe", "Jane Smith", "Michael Lee", "Sarah Kim", "David Chen"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              console.log("Video play was prevented");
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.7 }
    );

    videosRef.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videosRef.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const handleAddComment = (index) => {
    if (commentInput.trim() !== "") {
      const newComments = [...comments];
      newComments[index] = [...newComments[index], commentInput];
      setComments(newComments);
      setCommentInput(""); // Clear input after adding comment
    }
  };

  return (
    <>
    <div className='setexplore'>
    <Largenav/>
    <div className='w-50 ml-56 h-screen overflow-y-scroll snap-y  snap-mandatory'>
      {[FirstReelVideo, SecondReelVideo, ThirdReelVideo, FourthReelVideo, FifthReelVideo].map((videoSrc, index) => (
        <div key={index} className='w-full h-screen snap-start flex flex-col items-center justify-center bg-black text-white my-8'>
          {/* Profile Information (top of video) */}
          <div className='flex items-center w-4/5 p-4 bg-black-800 bg-opacity-70 rounded-t-lg'>
            <img 
              src={profilePictures[index]} 
              alt={users[index]} 
              className='w-10 h-10 rounded-full mr-2' 
            />
            <p className='text-lg font-semibold'>{users[index]}</p>
          </div>
          
          {/* Video with Reduced Width */}
          <video
            ref={(el) => (videosRef.current[index] = el)}
            src={videoSrc}
            className='w-4/5 h-4/5 object-cover rounded-lg'
            muted
            loop={false}
          />

          {/* Likes and Comments (below video) */}
          <div className='flex items-center justify-around w-4/5 p-4 bg-black-800 bg-opacity-70 rounded-b-lg'>
            <button onClick={() => handleLike(index)} className='text-white text-xl flex items-center'>
              ❤️ {likes[index]} Likes
            </button>
            <button onClick={() => handleAddComment(index)} className='text-white text-xl flex items-center'>
              💬 Add Comment
            </button>
          </div>
          
          {/* Display Comments */}
          <div className='w-4/5 p-4 bg-black-700 bg-opacity-70 rounded-lg max-h-20 overflow-y-auto'>
            {comments[index].map((comment, i) => (
              <p key={i} className='text-sm text-gray-200'>- {comment}</p>
            ))}
          </div>

          {/* Input for New Comment */}
          <div className='w-4/5 p-4'>
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              className='w-full p-2 bg-gray-800 text-white rounded-md'
              placeholder="Write a comment..."
            />
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
    
  );
};

export default Exploree;
