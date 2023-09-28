import styled from "styled-components";

const Author = styled.h2<{ $underline?: boolean; }>`
  color: black;
  font-weight: bold;
  font-size: 15px;
  text-align: left;
  text-decoration: ${props => props.$underline ? "underline" : "none"};
  text-decoration-style: dotted;
`;

export default Author;