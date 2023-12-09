import { useState } from "react";
import Like from "./Like";
import styled from "styled-components";

const StyledLikeFeature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LikeFeature = () => {
  const [isLiked, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!isLiked);
    console.log("Like clicked");
  };

  return (
    <StyledLikeFeature>
      <Like
        activeColor="pink"
        inactiveColor="lightgray"
        size="100"
        isActive={isLiked}
        onClick={() => {
          toggleLike();
        }}
      />
    </StyledLikeFeature>
  );
};

export default LikeFeature;
