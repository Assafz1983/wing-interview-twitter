import { styled } from "styled-components";

const Counter = styled.div<{ $negative?: boolean; }>`
    color: ${props => props.$negative ? "red" : "default"};
`;

export default Counter;