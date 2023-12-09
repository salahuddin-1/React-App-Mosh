import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  width: 150px;
  height: 50px;
  margin: 100px;
  border-radius: 10px 0px 10px 0px;
  background-color: orange;
  color: white;
`;

interface ButtonProps {
  children: string;
  // We can only pass these two values (only these 2 values are allowed)
  // if we pass anything else it will give us an error
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      onClick={() => {
        props.onClick();
      }}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
