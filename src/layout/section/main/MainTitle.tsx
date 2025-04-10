import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const MainTitle = () => {
    return (
        <TitleWrapper>
            <svg width="1000" height="300" viewBox="0 0 1000 300">
                <defs>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="3" dy="3" stdDeviation="3" floodColor="gray" />
                    </filter>

                    <path id="arcPath1" d="M 35 100 Q 450 250 950 100" fill="transparent" />
                    <path id="arcPath2" d="M 35 100 Q 450 250 965 100" fill="transparent" />
                </defs>

                <text fontSize="51" fontWeight="bold" textAnchor="middle">
                    <textPath href="#arcPath1" startOffset="9%" fill="none" stroke="black" strokeWidth="2" letterSpacing="3">
                        FRoNT
                    </textPath>
                    <textPath href="#arcPath2" startOffset="90%" fill="none" stroke="black" strokeWidth="2" letterSpacing="3">
                       Spain
                    </textPath>
                </text>
                <text fontSize="45" fontWeight="bold" textAnchor="middle" filter="url(#shadow)">
                    <textPath href="#arcPath1" startOffset="50%" fill="black" letterSpacing="2">
                        enD DeVeLOPeR Based In
                    </textPath>
                </text>
            </svg>
        </TitleWrapper>
    );
};

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100px;
    max-width: 600px;
    overflow: hidden;
    
    @media ${theme.media.tablet} {
        max-height: 70px;
        max-width: 350px;
        align-items: center;
        
    }
    
`;
