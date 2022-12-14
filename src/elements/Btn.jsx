import React from "react";
import styled from "styled-components";

export const Btn = (props) => {
  const { bgColor, w, h, cl, children, onClick } = props;
  const styles = { bgColor, w, h, cl };
  return (
    <StBtn {...styles} onClick={onClick}>
      {children}
    </StBtn>
  );
};
Btn.defaultProps = {
  bgColor: "white",
  w: "100px",
  h: "100px",
  cl: "black",
  children: undefined,
  onClick: () => {},
};
const StBtn = styled.button`
  width: 100px;
  height: 100px;
  background-color: ${({ bgColor }) => bgColor};
  color: "black";
`;
