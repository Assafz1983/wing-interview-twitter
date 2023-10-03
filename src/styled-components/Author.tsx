import styled from "styled-components";

const Author = styled.h2<{ $underline?: boolean; }>`
  color: black;
  font-weight: 800;
  font-size: 13px;
  text-align: left;
  border-bottom: ${props => props.$underline ? "1px dashed gray" : "0"};
  display: inline-block;
  padding-bottom: 3px;
  margin-bottom: 7px;
`;

export default Author;