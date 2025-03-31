import styled from "styled-components";
import photo from "../../../assets/images/IMG_9270.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Name} from "../../../components/menu/Name.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"} >
                <div>
                    <Name>HELLO I’M VERONIKA</Name>
                    <MainTitle>A FRONTEND DEVELOPER</MainTitle>
                </div>
                <Photo src= {photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain =styled.div `
min-height: 100vh;
    background-color: #FFFFFF;
`
const Photo =styled.img `
width : 470px;
height : 470px;
object-fit: cover;
`
const MainTitle = styled.h1 `
    
`

