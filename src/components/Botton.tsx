import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const Button = styled.button`
    background:${theme.colors.secondaryFont};  
    color:${theme.colors.primaryFont};
    max-width:111px;
    width:100%;
    min-height:40px;
    height:100%;
    font-size:16px;
    font-weight:bold;
`;