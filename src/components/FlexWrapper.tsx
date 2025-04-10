import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

type FlexWrapperPropsType = {
  direction?: string;
  directionTablet?: string;
  justify?: string;
  align?: string;
  wrap?: string;
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};

  @media ${theme.media.desktop} {
    flex-direction: ${props => props.directionTablet || props.direction || "row"};
  }
  @media ${theme.media.tablet} {
    flex-direction: ${props => props.direction || "column"};
    flex-wrap: ${props => props.wrap || "wrap"};
    
  }

`