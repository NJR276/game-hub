import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Heart = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;
  else return <AiOutlineHeart color="black" size={20} onClick={toggle} />;
};

export default Heart;
