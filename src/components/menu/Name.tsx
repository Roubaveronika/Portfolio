import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
export const Name = styled.h2`
    color: ${theme.colors.secondaryFont};
    text-align: left;
    font-size: 132px;
    font-weight: 700;
    line-height: 117%;
   
    
    
    @media ${theme.media.tablet} {
        font-size: 75px;
        text-align: left;
    }
  
    
    
`