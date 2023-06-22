import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      console.log('unliked');
    } else {
      console.log('liked');
    }
    setLiked(!liked);
  };

  return (
    <button onClick={handleLike}>
      {liked ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
};

export default LikeButton;
