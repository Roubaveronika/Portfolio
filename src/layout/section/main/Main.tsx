import styled from "styled-components";
import photo from "../../../assets/images/IMG_9270.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Name} from "../../../components/menu/Name.tsx";
import {ContainerBox} from "../../../components/ContainerBox.ts";
import {theme} from "../../../styles/Theme.ts";
import {MainTitle} from "./MainTitle.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <ContainerBox>
            <FlexWrapper align={"center"} justify={"flex-start"}>
                <TextBlock>
                    <Name>HELLO I’M<br/>VERONIKA</Name>
                    <MainTitle/>
                </TextBlock>
                <PhotoWrapper>
                    <Photo src= {photo} alt="Photo"/>
                </PhotoWrapper>
            </FlexWrapper>
    </ContainerBox>
        </StyledMain>
    );
};


const StyledMain =styled.div `
    background-color: ${theme.colors.primaryBg};
    display: flex;
    min-height: 100vh;
    margin-bottom: 30px;
`
const TextBlock = styled.div`
    width: 50%;
    text-align: left;
    z-index: 2;
    position:absolute;
    color: ${theme.colors.secondaryFont};
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    padding: 0 20px ;
`

const PhotoWrapper = styled.div `
    position: relative;
    width: 55%;
    display: flex;
    justify-content: center;
    left: 52%;
    z-index: 1;     
    
    &::before {
        content: "";
        width: 420px;
        height: 570px;
        transform: translateX(-50%) rotate(-12deg);
        background-color: #E7E7E7;
        position: absolute;
        top: -200px;
        left: 50%;
        z-index: -1;
        
    }
    
    
    `
    
const Photo =styled.img `
    position: absolute;
    top: -200px; 
    left: 50%; 
    transform: translateX(-50%) rotate(12deg); 
    width: 100%;
    max-width: 420px;
    height: auto;
    object-fit: cover;
    `


