import styled from "styled-components";
import photo from "../../../assets/images/IMG_9270.webp";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import { Name } from "../../../components/menu/Name.tsx";
import { ContainerBox } from "../../../components/ContainerBox.ts";
import { theme } from "../../../styles/Theme.ts";
import { MainTitle } from "./MainTitle.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <ContainerBoxMain>
                <FlexWrapper align="center" justify="space-between" direction="row"
                             directionTablet="column" >
                    <TextBlock>
                        <Name>HELLO I’M<br />VERONIKA</Name>
                        <MainTitle />
                    </TextBlock>
                    <PhotoWrapper>
                        <Photo src={photo} alt="Photo" />
                    </PhotoWrapper>
                </FlexWrapper>
            </ContainerBoxMain>
        </StyledMain>
    );
};

const ContainerBoxMain = styled(ContainerBox)`
    width: 100%;
    
`
const StyledMain = styled.div`
  background-color: ${theme.colors.primaryBg};
  padding-top: 80px;
  display: flex;
  align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    

  @media ${theme.media.tablet} {
   
  }
`;

const TextBlock = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    padding-left: 60px;
    
    
    color: ${theme.colors.secondaryFont};
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    @media ${theme.media.tablet} {
        width: 100%;
        margin-bottom: 30px;
        text-align: left;
        padding-top:80px;
        padding-left: 0;
    }
`;

const PhotoWrapper = styled.div`
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    padding: 4rem;
    

    @media ${theme.media.tablet} {
        width: 100%;
        margin-top: 30px;
        padding: 1rem;
    }

    &::before {
        content: "";
        position: absolute;
        top: 10%;
        left: 50%;
        width: 420px;
        height: 570px;
        background-color: #e7e7e7;
        transform: translate(-50%) rotate(-12deg);
        z-index: -1;

        @media ${theme.media.desktop} {
            width: 270px;
            height: 420px;
            rotate: 0deg;
        }
    }
`;

const Photo = styled.img`
  position: relative;
  min-width: 320px;
  height: auto;
  object-fit: cover;
  
  transform: rotate(12deg);
   
    

  @media ${theme.media.tablet} {
    margin: 20px auto;
      width: 100%;
      height: 100%;
      transform: rotate(0deg)
      
  }
`;

