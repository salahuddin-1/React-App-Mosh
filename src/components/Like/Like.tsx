import { useState } from "react";
import { MdOutlineFavorite } from "react-icons/md";

interface LikeProps {
  onClick: () => void;
  activeColor: string;
  inactiveColor: string;
  size: string;
  isActive: boolean;
}

const Like = (props: LikeProps) => {
  return (
    <MdOutlineFavorite
      color={props.isActive ? props.activeColor : props.inactiveColor}
      size={props.size}
      onClick={() => {
        props.onClick();
      }}
    />
  );
};

export default Like;
