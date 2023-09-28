import { TextareaAutosize } from "@mui/base";
import styled from "styled-components";


const TextArea = styled(TextareaAutosize)<{$valid: boolean, $empty: boolean}>`
    border: none;
    border-bottom: ${props => props.$valid || props.$empty ? "1px solid gray" : "1px solid red"};
    outline: none;
    resize: none;
    display: block;
    width: 100%;
    margin-bottom: 20px;
`;

export default TextArea;