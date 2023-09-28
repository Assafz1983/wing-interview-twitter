import styled from "styled-components";

const TweetButton = styled.button<{$disabled: boolean}>`
border-radius: 9999px;
border: none;
background-color: rgb(29, 155, 240);
color: white;
outline: none;
font-size: 15px;
padding: 10px 16px;
cursor: pointer;
font-family: Tahoma,Arial,sans-serif;
font-weight: bold;
opacity: ${props => props.$disabled ? "0.6" : "1"};
pointer-events: ${props => props.$disabled ? "none" : "all"};
`;

export default  TweetButton;